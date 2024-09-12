import winston from 'winston'
import config from 'config'

// 创建一个logger
const logger = winston.createLogger({
    //默认日志级别为info
    level: config.server.logLevel || 'info',
    //Winston中没有fatal和trace，但是fastify中需要用到，因此这里使用自定义的level级别
    //在winston.createLogger()中，可以看到它需要一个可选的options参数，里面包含了一个
    //levels对象，其类型为：Config.AbstractConfigSetLevels，值是一个map。
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        trace: 4,
        debug: 5
    },
    //设置日志的格式
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss.SSS'
        }),
        winston.format.json(),
    ),
    transports: [
        //输出日志到console
        new winston.transports.Console(),
        //error日志保存到error.log中
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        //所有的日志保存在combined.log中
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],
    exceptionHandlers: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/exception.log' })
    ]
})

export default logger