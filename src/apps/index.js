import users from './user/index.js'

export default async (fastify) => {
    fastify.register(users, { prefix: '/user' })
    // 添加其他模块的routes
}