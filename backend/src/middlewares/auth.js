import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";

const Auth = asyncHandler(async function (req, res, next) {
    const token = req.cookies?.access_token;

    console.log(token);
    console.log(req.cookies);

    if (!token || typeof token !== 'string' || token.trim() === "") {
        return res.status(401).json({
            message: 'Invalid Token Format'
        });
    }

    try {
        const decode = jwt.verify(token, process.env.ACCESS_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            error: error.message,
            stack: error.stack
        });
    }
});

export default Auth;