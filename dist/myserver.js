"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
const wordArray = ["apple", "shade", "watch", "agree", "power", "piece", "bloom", "plead", "sorry", "spoon", "bunny", "pause", "audio", "dream"];
//Define GET endpoint(s)
app.get("/", (req, res) => {
    let tosend = { randomWord: wordArray[Math.floor(Math.random() * wordArray.length)] };
    res.json(tosend);
});
app.listen(PORT, () => {
    console.log('sever is listening to port ${PORRT}');
});
