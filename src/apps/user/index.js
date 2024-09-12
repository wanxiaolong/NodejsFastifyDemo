import * as api from './user.api.js'

//定义这个模块下的api
export default async (fastify) => {
    fastify.get('/:id', api.findUserById)
    fastify.post('/', api.createUser)
}
  