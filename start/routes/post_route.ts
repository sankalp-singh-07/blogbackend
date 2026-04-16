import PostController from '#controllers/post_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/posts', [PostController, 'index'])
router.get('/posts/:id', [PostController, 'show'])

router
  .group(() => {
    router.post('/create', [PostController, 'create'])
    router.put('/update/:id', [PostController, 'update'])
    router.delete('/delete/:id', [PostController, 'destroy'])
  })
  .prefix('/posts')
  .middleware(middleware.auth())
