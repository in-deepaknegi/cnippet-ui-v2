import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        pro: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

const user_data = models.user_data || mongoose.model("user_data", userSchema);
export default user_data;
