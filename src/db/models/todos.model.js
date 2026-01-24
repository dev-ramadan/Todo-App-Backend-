import mongoose from "mongoose";

const TodosSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    description: {
        type: String,
        trim: true,
        default: ""
    },
    note: {
        type: String,
        trim: true,
        default: ""
    },
    time: {
        type: Date,
        default: Date.now
    },
    isFinished: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model("Todo", TodosSchema);

