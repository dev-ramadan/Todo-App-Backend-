import jwt from "jsonwebtoken"
export const auth = async (req, res, next) => {
    try {
        const gettoken = req.headers.authorization;
        const token = gettoken?.split(" ")[1];
        if (!token)
            return res.status(401)
                .json({ success: false, message: "you dont have preamation" });
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodeToken
        next()
    } catch (err) {
        return res.status(500)
            .json({ message: err.message || "internal server error" });
    }
};