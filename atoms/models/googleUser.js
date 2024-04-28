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

const april_data = models.april_data || mongoose.model("april_data", userSchema);
export default april_data;
