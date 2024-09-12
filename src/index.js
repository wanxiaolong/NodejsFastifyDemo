// 导入 Fastify 库
import fastify from 'fastify'
import logger from './server/logger.js'
import config  from 'config'
import routes from './apps/index.js'
import * as hooks from './server/hooks.js'

const server = fastify({
  logger,
  //禁止输出request日志
  disableRequestLogging: true,
  requestIdHeader: "x-req-id",
})
server.register(routes)

// 可以添加钩子函数
server.addHook('onRequest', hooks.onRequest)
server.addHook('onResponse', hooks.onResponse)
server.addHook('onError', hooks.onError)

// 启动服务器函数
const appOptions = {
  host: config.server.host || "localhost",
  port: config.server.port || 9080
}
await server.listen(appOptions);
