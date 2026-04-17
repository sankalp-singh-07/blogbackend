import Comment from '#models/comment'
import User from '#models/user'
import { Exception } from '@adonisjs/core/exceptions'

export default class CommentService {
  static async create(postId: number, userId: number, data: { content: string }) {
    const comment = await Comment.create({
      content: data.content,
      postId,
      userId,
    })
    await comment.load('user')
    return comment
  }

  static async getByPostId(postId: number) {
    const comments = await Comment.query()
      .where('postId', postId)
      .preload('user', (query) => {
        query.select('id', 'fullName', 'email')
      })
      .orderBy('createdAt', 'asc')
    return comments
  }

  static async delete(id: number, user: User) {
    const comment = await Comment.findOrFail(id)

    const isOwner = comment.userId === user.id
    const isAdmin = user.isAdmin === true

    if (!isOwner && !isAdmin) {
      throw new Exception('You are not authorized to delete this comment', { status: 403 })
    }

    await comment.delete()
  }
}
