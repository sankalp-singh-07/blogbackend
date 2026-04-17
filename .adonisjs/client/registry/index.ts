/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.register': {
    methods: ["POST"],
    pattern: '/auth/register',
    tokens: [{"old":"/auth/register","type":0,"val":"auth","end":""},{"old":"/auth/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/auth/login',
    tokens: [{"old":"/auth/login","type":0,"val":"auth","end":""},{"old":"/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.logout': {
    methods: ["POST"],
    pattern: '/auth/logout',
    tokens: [{"old":"/auth/logout","type":0,"val":"auth","end":""},{"old":"/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'auth.me': {
    methods: ["GET","HEAD"],
    pattern: '/auth/me',
    tokens: [{"old":"/auth/me","type":0,"val":"auth","end":""},{"old":"/auth/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['auth.me']['types'],
  },
  'post.index': {
    methods: ["GET","HEAD"],
    pattern: '/posts',
    tokens: [{"old":"/posts","type":0,"val":"posts","end":""}],
    types: placeholder as Registry['post.index']['types'],
  },
  'post.show': {
    methods: ["GET","HEAD"],
    pattern: '/posts/:id',
    tokens: [{"old":"/posts/:id","type":0,"val":"posts","end":""},{"old":"/posts/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['post.show']['types'],
  },
  'post.create': {
    methods: ["POST"],
    pattern: '/posts/create',
    tokens: [{"old":"/posts/create","type":0,"val":"posts","end":""},{"old":"/posts/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['post.create']['types'],
  },
  'post.update': {
    methods: ["PUT"],
    pattern: '/posts/update/:id',
    tokens: [{"old":"/posts/update/:id","type":0,"val":"posts","end":""},{"old":"/posts/update/:id","type":0,"val":"update","end":""},{"old":"/posts/update/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['post.update']['types'],
  },
  'post.destroy': {
    methods: ["DELETE"],
    pattern: '/posts/delete/:id',
    tokens: [{"old":"/posts/delete/:id","type":0,"val":"posts","end":""},{"old":"/posts/delete/:id","type":0,"val":"delete","end":""},{"old":"/posts/delete/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['post.destroy']['types'],
  },
  'comment.index': {
    methods: ["GET","HEAD"],
    pattern: '/posts/:postId/comments',
    tokens: [{"old":"/posts/:postId/comments","type":0,"val":"posts","end":""},{"old":"/posts/:postId/comments","type":1,"val":"postId","end":""},{"old":"/posts/:postId/comments","type":0,"val":"comments","end":""}],
    types: placeholder as Registry['comment.index']['types'],
  },
  'comment.create': {
    methods: ["POST"],
    pattern: '/posts/:postId/comment',
    tokens: [{"old":"/posts/:postId/comment","type":0,"val":"posts","end":""},{"old":"/posts/:postId/comment","type":1,"val":"postId","end":""},{"old":"/posts/:postId/comment","type":0,"val":"comment","end":""}],
    types: placeholder as Registry['comment.create']['types'],
  },
  'comment.destroy': {
    methods: ["DELETE"],
    pattern: '/comments/:id',
    tokens: [{"old":"/comments/:id","type":0,"val":"comments","end":""},{"old":"/comments/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['comment.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
