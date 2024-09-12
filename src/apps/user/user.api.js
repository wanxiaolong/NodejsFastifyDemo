import * as service from './user.service.js'
import status from 'http-status-codes'
import logger from '../../server/logger.js'

export const findById = async (request, reply) => {
    const { id } = request.params
    const user = await service.getUserById(id)
    if (!user) {
        const msg = `user with id ${id} not found`
        return reply.code(status.NOT_FOUND).send(msg)
    }
    logger.info(`user.name=${user.name}`)
    return reply.code(status.OK).send(user)
}
