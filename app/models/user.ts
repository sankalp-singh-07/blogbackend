import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import hash from '@adonisjs/core/services/hash'
import Post from './post.js'
import Comment from './comment.js'

import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider, AccessToken } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static accessTokens = DbAccessTokensProvider.forModel(User)

  declare currentAccessToken?: AccessToken

  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'fullName' })
  declare fullName: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @hasMany(() => Post)
  declare posts: HasMany<typeof Post>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
