import vine from '@vinejs/vine'

export const registerValidator = vine.create(
  vine.object({
    fullName: vine.string().minLength(3),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    password: vine.string().trim().minLength(6),
  })
)
