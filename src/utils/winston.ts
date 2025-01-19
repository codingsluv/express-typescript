import winston from "winston";
import "winston-daily-rotate-file";

const transports = new winston.transports.DailyRotateFile({
    filename: "logs/app-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxSize: "1m",
    maxFiles: "5d",
    zippedArchive: true,
    level: "error",
    handleExceptions: true,
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.json(),
        winston.format.label({
            label: "[LOGGER]"
        }),
        winston.format.printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
});

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: "debug",
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize({ all: true }),
                winston.format.label({
                    label: "[CONSOLE]",
                }),
                winston.format.printf(
                    (info) => `${info.timestamp} ${info.level}: ${info.message}`
                )
            ),
        }),
        transports,
    ],
});

export default logger;