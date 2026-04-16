/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    register: typeof routes['auth.register']
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
    me: typeof routes['auth.me']
  }
  post: {
    index: typeof routes['post.index']
    show: typeof routes['post.show']
    create: typeof routes['post.create']
    update: typeof routes['post.update']
    destroy: typeof routes['post.destroy']
  }
}
