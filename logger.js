import winston from 'winston'

// 创建一个logger
const logger = winston.createLogger({
    //默认日志级别为info
    level: 'info',
    //设置日志的格式
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss.SSS'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
        //输出日志到console
        new winston.transports.Console(),
        //error日志保存到error.log中
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        //所有的日志保存在combined.log中
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
})

export default logger