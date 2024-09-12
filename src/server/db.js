import Knex from 'knex'
import { Model } from 'objection'
import config from 'config'

//取出DB配置，初始化Knex实例
export const knex = Knex(config.db)

//给 objection.js 绑定 Knex 实例
Model.knex(knex)
