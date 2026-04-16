import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import hash from '@adonisjs/core/services/hash'

const AuthController = () => import('#controllers/auth_controller')

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router.post('/register', [AuthController, 'register'])
    router.post('/login', [AuthController, 'login'])
  })
  .prefix('/auth')

router
  .group(() => {
    router.post('/logout', [AuthController, 'logout'])
    router.get('/me', [AuthController, 'me'])
  })
  .prefix('/auth')
  .middleware(middleware.auth())
