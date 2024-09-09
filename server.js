// 导入 Fastify 库
import fastify from 'fastify'
import logger from './logger.js'

const app = fastify({
  // 启用日志记录
  logger: true
});

// 声明路由
app.get('/', async (request, reply) => {
  logger.info('Call api: GET /')
  return { hello: 'world' };
});

// 启动服务器函数
const start = async () => {
  try {
    await app.listen(3000);  // 监听 3000 端口
    console.log(`Server is running at 3000`);
  } catch (err) {
    logger.error(err);
  }
}

// 调用启动函数
start();