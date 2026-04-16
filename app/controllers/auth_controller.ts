import type { HttpContext } from '@adonisjs/core/http'
import AuthService from '#services/AuthService'
import { registerValidator } from '#validators/auth/register'
import { loginValidator } from '#validators/auth/login'
import User from '#models/user'

export default class AuthController {
  async register({ request }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await AuthService.register(data)

    return {
      message: 'User registered successfully',
      user,
    }
  }

  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    return await AuthService.login(email, password)
  }

  async logout({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    await User.accessTokens.all(user)
    await AuthService.logout(user)

    return { message: 'Logged out successfully' }
  }

  async me({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return user
  }
}
