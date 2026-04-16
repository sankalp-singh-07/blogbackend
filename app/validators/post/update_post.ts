import vine from '@vinejs/vine'

export const updatePostValidator = vine.create(
  vine.object({
    title: vine.string().trim().minLength(5).optional(),
    content: vine.string().trim().minLength(20).optional(),
  })
)
