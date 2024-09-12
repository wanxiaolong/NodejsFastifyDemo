import logger from './logger.js'
import { nanoid } from 'nanoid'

const reqIdHeaderKey = 'x-req-id'

export const onRequest = async (request, reply) => {
    // 创建一个requestId作为唯一标识
    let reqId = request.headers[reqIdHeaderKey]
    if (!reqId) {
        request.headers[reqIdHeaderKey] = nanoid()
    }
    const fullUri = `${request.raw.method} ${request.protocol}://${request.hostname}${request.raw.url}`

    // 在entrance中输出日志
    reqId = request.headers[reqIdHeaderKey]
    logger.info(
      `[request:${reqId}] ${fullUri}, headers: ${JSON.stringify(request.raw.rawHeaders)}`
    )
}

export const onResponse = async (request, reply) => {
    const reqId = request.headers[reqIdHeaderKey]
    logger.info(`[response:${reqId}] statusCode: ${reply.raw.statusCode}, headers: ${JSON.stringify(reply.getHeaders())}`)
}

export const onError = async (request, reply, error) => {
    logger.error(`[response hook] onError: ${error.message}`)
}