import Post from '#models/post'
import { Exception } from '@adonisjs/core/exceptions'
import redis from '@adonisjs/redis/services/main'

const CACHE_TTL = 60

function postsKey(page: number, limit: number) {
  return `posts:page:${page}:limit:${limit}`
}

async function invalidatePostsCache() {
  const keys = await redis.keys('posts:*')
  if (keys.length > 0) {
    await redis.del(...keys)
  }
}

export default class PostService {
  static async create(data: { title: string; content: string; userId: number }) {
    const res = await Post.create(data)
    await invalidatePostsCache() 
    return res
  }

  static async getAll(page: number, limit: number) {
    const cacheKey = postsKey(page, limit)

    const cached = await redis.get(cacheKey)
    if (cached) {
      return JSON.parse(cached)
    }

    const posts = await Post.query().orderBy('createdAt', 'desc').paginate(page, limit)

    await redis.setex(cacheKey, CACHE_TTL, JSON.stringify(posts))

    return posts
  }

  static async getById(id: number) {
    const post = await Post.findOrFail(id)
    return post
  }

  static async update(id: number, userId: number, data: { title?: string; content?: string }) {
    const post = await Post.findOrFail(id)

    if (post.userId !== userId) {
      throw new Exception('You are not authorized to update this post', { status: 403 })
    }

    post.merge(data)
    await post.save()
    await invalidatePostsCache()
    return post
  }

  static async delete(id: number, userId: number) {
    const post = await Post.findOrFail(id)

    if (post.userId !== userId) {
      throw new Exception('You are not authorized to delete this post', { status: 403 })
    }

    await post.delete()
    await invalidatePostsCache()
  }
}
