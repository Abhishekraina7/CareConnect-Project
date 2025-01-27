import { Schema, model } from 'mongoose';
import pkg from 'bcryptjs';
const { genSalt, hash } = pkg;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Method to hash the password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('passwordHash')) {
        const salt = await genSalt(10);
        this.passwordHash = await hash(this.passwordHash, salt);
    }
    next();
});

const User = model('User ', userSchema);
export default User;