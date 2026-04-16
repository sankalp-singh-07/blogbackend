import PostController from '#controllers/post_controller'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/create', [PostController, 'create'])
  })
  .prefix('/posts')
