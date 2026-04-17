import CommentService from '#services/CommentService'
import { createCommentValidator } from '#validators/comment/create_comment'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentController {
  async index({ params }: HttpContext) {
    const comments = await CommentService.getByPostId(params.postId)
    return {
      data: comments,
    }
  }

  async create({ request, params, auth }: HttpContext) {
    const data = await request.validateUsing(createCommentValidator)
    const userId = auth.user!.id
    const postId = params.postId

    const comment = await CommentService.create(postId, userId, data)
    return {
      message: 'Comment added successfully',
      data: comment,
    }
  }

  async destroy({ params, auth }: HttpContext) {
    const user = auth.user!
    await CommentService.delete(params.id, user)
    return {
      message: 'Comment deleted successfully',
    }
  }
}
