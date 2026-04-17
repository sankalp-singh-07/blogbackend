import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'auth.me': { paramsTuple?: []; params?: {} }
    'post.index': { paramsTuple?: []; params?: {} }
    'post.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'post.create': { paramsTuple?: []; params?: {} }
    'post.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'post.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comment.index': { paramsTuple: [ParamValue]; params: {'postId': ParamValue} }
    'comment.create': { paramsTuple: [ParamValue]; params: {'postId': ParamValue} }
    'comment.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'auth.me': { paramsTuple?: []; params?: {} }
    'post.index': { paramsTuple?: []; params?: {} }
    'post.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comment.index': { paramsTuple: [ParamValue]; params: {'postId': ParamValue} }
  }
  HEAD: {
    'auth.me': { paramsTuple?: []; params?: {} }
    'post.index': { paramsTuple?: []; params?: {} }
    'post.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comment.index': { paramsTuple: [ParamValue]; params: {'postId': ParamValue} }
  }
  POST: {
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'post.create': { paramsTuple?: []; params?: {} }
    'comment.create': { paramsTuple: [ParamValue]; params: {'postId': ParamValue} }
  }
  PUT: {
    'post.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'post.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comment.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}