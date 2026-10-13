import pino from "pino";

export const logger = pino({
    level: process.env.LOG_LEVEL || "info",

    base: {
        service: "quick-shop",
        // environment: process.env.NODE_ENV,
    },

    redact: {
        paths: [
            "password",
            "password_hash",
            "token",
            "accessToken",
            "refreshToken",
            "email",
        ],
        censor: "[REDACTED]",
    },

    timestamp: pino.stdTimeFunctions.isoTime,
});