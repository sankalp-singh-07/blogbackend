import Post from '#models/post'
import { Exception } from '@adonisjs/core/exceptions'

export default class PostService {
  static async create(data: { title: string; content: string; userId: number }) {
    const res = await Post.create(data)
    return res
  }

  static async getAll(page: number, limit: number) {
    return await Post.query().orderBy('createdAt', 'desc').paginate(page, limit)
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
    return post
  }

  static async delete(id: number, userId: number) {
    const post = await Post.findOrFail(id)
    
    if (post.userId !== userId) {
      throw new Exception('You are not authorized to delete this post', { status: 403 })
    }
    
    await post.delete()
  }
}
