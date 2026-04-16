import PostService from '#services/PostService'
import { createPostValidator } from '#validators/post/create_post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostController {
  async create({ request }: HttpContext) {
    const data = await request.validateUsing(createPostValidator)

    const res = await PostService.create(data)

    return {
      message: 'Post created successfully',
      data: res,
    }
  }
}
