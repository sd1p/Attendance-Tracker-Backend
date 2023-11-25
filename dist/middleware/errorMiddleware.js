"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.routeNotFound = void 0;
const routeNotFound = (req, res, next) => {
    const error = new Error(`Route Not Found -${req.originalUrl}`);
    res.status(404);
    next(error);
};
exports.routeNotFound = routeNotFound;
//handling error messages and status codes
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};
exports.errorHandler = errorHandler;
