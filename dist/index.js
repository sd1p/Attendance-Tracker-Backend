"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", authRoutes_1.default);
app.get("/", (req, res) => {
    res.status(200).json({ message: "hey there" });
});
app.use(errorMiddleware_1.routeNotFound);
app.use(errorMiddleware_1.errorHandler);
const port = parseInt(process.env.PORT, 10) || 4000;
if (process.env.NODE_ENV === 'dev') {
    const hostname = "192.168.29.33";
    app.listen(port, hostname, () => {
        console.log(`Server is running on ${hostname}:${port}`);
    });
}
else {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });
}
app.on('error', (error) => console.error(error));
