import User from "../db/models/user.model.js"
export const getUsers = async (usr) => {
    if (usr.role === "admin") {
        const users = await User.find();
        return users
    } else {
        throw new Error("dont have preamation")
    }
};

export const getUserById = async (id) => {
    const user = await User.findOne({ _id: id });
    return user
};

export const updateUser = async (id, data) => {
    await User.findByIdAndUpdate(
        id,
        data,
    );

};

export const deleteUser = async (id) => {
    await User.findOneAndDelete({ _id:id });
};





