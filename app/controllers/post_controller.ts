import PostService from '#services/PostService'
import { createPostValidator } from '#validators/post/create_post'
import { updatePostValidator } from '#validators/post/update_post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    
    const posts = await PostService.getAll(page, limit)
    return posts
  }

  async show({ params }: HttpContext) {
    const post = await PostService.getById(params.id)
    return {
      data: post,
    }
  }

  async create({ request, auth }: HttpContext) {
    const data = await request.validateUsing(createPostValidator)
    const userId = auth.user!.id

    const res = await PostService.create({ ...data, userId })

    return {
      message: 'Post created successfully',
      data: res,
    }
  }

  async update({ request, params, auth }: HttpContext) {
    const data = await request.validateUsing(updatePostValidator)
    const userId = auth.user!.id
    
    const res = await PostService.update(params.id, userId, data)
    
    return {
      message: 'Post updated successfully',
      data: res,
    }
  }

  async destroy({ params, auth }: HttpContext) {
    const userId = auth.user!.id
    await PostService.delete(params.id, userId)
    
    return {
      message: 'Post deleted successfully',
    }
  }
}
