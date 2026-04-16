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
  }
  GET: {
    'auth.me': { paramsTuple?: []; params?: {} }
    'post.index': { paramsTuple?: []; params?: {} }
    'post.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'auth.me': { paramsTuple?: []; params?: {} }
    'post.index': { paramsTuple?: []; params?: {} }
    'post.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'post.create': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'post.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'post.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}