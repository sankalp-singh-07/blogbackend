import vine from '@vinejs/vine'

export const createPostValidator = vine.create(
  vine.object({
    title: vine.string().trim().minLength(5),
    content: vine.string().trim().minLength(20),
  })
)
