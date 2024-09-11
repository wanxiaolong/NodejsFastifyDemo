// 导入 Fastify 库
import fastify from 'fastify'
import logger from './logger.js'
import dotenv from 'dotenv'
import config  from 'config'

dotenv.config()

const app = fastify({
  // 启用日志记录
  logger: true
});

// 声明路由
app.get('/', async (request, reply) => {
  logger.info(`Call api: GET /.`)
  logger.info(`Config using env: KEY1=${process.env.KEY1}, KEY2=${process.env.KEY2}`)
  logger.info(`Config using config: dbUsername=${config.dbUsername}`)
  return { hello: 'world' };
});

// 启动服务器函数
const start = async () => {
  try {
    const appOptions = {
      port: 9080
    }
    await app.listen(appOptions);  // 监听 9080 端口
    console.log(`Server is running at port 9080`);
  } catch (err) {
    logger.error(err);
  }
}

// 调用启动函数
start();