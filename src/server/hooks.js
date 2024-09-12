import logger from './logger.js'
import { nanoid } from 'nanoid'

export const onRequest = async (request, reply) => {
    logger.info({
        url: request.raw.url,
        protocol: request.protocol,
        method: request.raw.method,
        message: 'received request'
    })
    // 创建一个requestId作为唯一标识
    const reqId = request.headers['x-req-id']
    if (!reqId) {
        request.headers['x-req-id'] = nanoid()
    }
    const fullUri = `${request.raw.method} ${request.protocol}://${request.hostname}${request.raw.url}`
    logger.info(
      `[request] ${fullUri} headers: ${JSON.stringify(request.raw.rawHeaders)}`
    )
}

export const onResponse = async (request, reply) => {
    logger.info({
      url: request.raw.url,
      method: request.raw.method,
      statusCode: reply.raw.statusCode,
      message: 'request completed'
    })
    const fullUri = `${request.raw.method} ${request.protocol}://${request.hostname}${request.raw.url}`
    logger.info(`[response] ${fullUri} headers: ${JSON.stringify(reply.getHeaders())}`)
}

export const onError = async (request, reply, error) => {
    logger.error(`[response hook] onError: ${error.message}`)
}