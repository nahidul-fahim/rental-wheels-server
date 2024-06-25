import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";
import config from "../config";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = ((err, req, res, next) => {

    const statusCode = err?.statusCode || 500;
    const message = err?.message || "Something went wrong!";
    const errorSources: TErrorSources = [
        {
            path: err?.path || "",
            message: "Something went wrong!"
        }
    ]


    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: config.NODE_ENV === "development" ? err?.stack : null,
    })
})


export default globalErrorHandler;