import User from "../db/models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const registerService = async (data) => {
    const { name, email, password ,phone} = data;
    const user = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 8),
        phone
    })
    return user;
};

export const loginService = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({email});
    if (!user)
        throw new Error("invalid email or password");
    const isMatch = await user.checkPassword(password)
    if (!isMatch)
        throw new Error("invalid email or password");

    const token = jwt.sign({
        _id: user.id, name: user.name, email: user.email, phone: user.phone, role:user.role
    },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }

    );
    return token

};