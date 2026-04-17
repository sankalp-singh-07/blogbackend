import CommentController from '#controllers/comment_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/posts/:postId/comments', [CommentController, 'index'])

router
  .group(() => {
    router.post('/posts/:postId/comment', [CommentController, 'create'])
    router.delete('/comments/:id', [CommentController, 'destroy'])
  })
  .middleware(middleware.auth())
