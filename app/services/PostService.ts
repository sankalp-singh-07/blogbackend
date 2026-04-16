import Post from '#models/post'

export default class PostService {
  static async create(data: { title: string; content: string }) {
    const res = await Post.create(data)
    return res
  }
}
