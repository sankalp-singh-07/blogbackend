import vine from '@vinejs/vine'

export const createCommentValidator = vine.create(
  vine.object({
    content: vine.string().trim().minLength(1),
  })
)
