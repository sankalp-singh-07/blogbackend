import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class AuthService {
  static async register(data: { fullName: string; email: string; password: string }) {
    const user = await User.create(data)
    return user
  }

  static async login(email: string, plainPassword: string) {
    const user = await User.findBy('email', email)
    if (!user) {
      throw new Error('Invalid credentials')
    }

    const isValid = await hash.verify(user.password, plainPassword)
    if (!isValid) {
      throw new Error(`Invalid credentials`)
    }

    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: '7 days',
    })
    return {
      user,
      token: {
        type: 'bearer',
        value: token.value!.release(),
      },
    }
  }

  static async logout(user: User) {
    await User.accessTokens.delete(user, user.currentAccessToken!.identifier)
  }
}
