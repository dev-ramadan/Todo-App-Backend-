import mongoose from "mongoose";
import bcrypt from "bcrypt"
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, unique: true, sparse: true, },
    password: String,
    role: {
        type: String,
        default: "user"
    }
});

userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
export default mongoose.model("User", userSchema)