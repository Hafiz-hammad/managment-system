import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    picture: { type: String },
    role: { type: String , default: "user", 
    enum: ["user", "doctor", "admin"] 

},
    extraInfo: {
        fees: { type: String },
        hospital: { type: String },
        time: { type: String },
        bio: { type: String },
        specialization: { type: String },
        gender: { type: String },
    }
});

export const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);
