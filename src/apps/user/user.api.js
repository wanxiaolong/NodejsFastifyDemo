import * as service from './user.service.js'
import status from 'http-status-codes'
import logger from '../../server/logger.js'

export const findUserById = async (request, reply) => {
    const { id } = request.params
    const user = await service.getUserById(id).catch(err => {
        console.error('Error creating user:', err);
    })
    if (!user) {
        const msg = `user with id ${id} not found`
        return reply.code(status.NOT_FOUND).send(msg)
    }
    return reply.code(status.OK).send(user)
}

export const createUser = async (request, reply) => {
    const user = request.body
    const inserted = await service.createUser(user).catch(err => {
        console.error('Error creating user:', err);
        return reply.code(status.NOT_FOUND)
    })
    return reply.code(status.CREATED).send(inserted)
}
