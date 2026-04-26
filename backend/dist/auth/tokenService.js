"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signAccessToken = signAccessToken;
exports.signRefreshToken = signRefreshToken;
exports.verifyAccessToken = verifyAccessToken;
exports.verifyRefreshToken = verifyRefreshToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
function signAccessToken(user) {
    const payload = {
        sub: user.id,
        email: user.email,
        displayName: user.displayName
    };
    return jsonwebtoken_1.default.sign(payload, config_1.config.accessTokenSecret, {
        expiresIn: config_1.config.accessTokenTtl
    });
}
function signRefreshToken(user) {
    return jsonwebtoken_1.default.sign({ sub: user.id }, config_1.config.refreshTokenSecret, {
        expiresIn: config_1.config.refreshTokenTtl
    });
}
function verifyAccessToken(token) {
    return jsonwebtoken_1.default.verify(token, config_1.config.accessTokenSecret);
}
function verifyRefreshToken(token) {
    return jsonwebtoken_1.default.verify(token, config_1.config.refreshTokenSecret);
}
