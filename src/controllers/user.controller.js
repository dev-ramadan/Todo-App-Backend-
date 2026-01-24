import { deleteUser, getUserById, getUsers, updateUser } from "../services/user.services.js"

export const getAll = async (req, res) => {
    try {
        const users = await getUsers(req.user);
        return res.status(200)
            .json({ success: true, message: "get all users success", users });
    } catch (err) {
        return res.status(500)
            .json({ success: false, message: err.message || "internal server eeror" });
    }
}

export const getById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUserById(id);
        return res.status(200)
            .json({ success: true, message: "get user success", user });
    } catch (err) {
        return res.status(500)
            .json({ success: false, message: err.message || "internal server eeror" })
    }
}

export const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, role } = req.body;
        let updateData = { name, email, phone };
        console.log(req.user.role);

        if (req.user.role === "admin") {
            updateData.role = role;
        }
        await updateUser(id, updateData);
        if (req.user.role === "user" && req.body.role) {
            return res.status(401).json({
                success: false,
                message: "dont have access to Update role",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Update user success",
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Internal server error"
        });
    }
};


export const removeUser = async (req, res) => {
    try {
        await deleteUser(req.params.id)
        return res.status(201)
            .json({ success: true, message: "delete user success" });
    } catch (err) {
        return res.status(500)
            .json({ success: false, message: err.message || "internal server eeror" })
    }
}
