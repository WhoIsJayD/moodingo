import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    },
    bio: String,
    location: String,
    website: String,
    isAdmin: Boolean,
    posts: [{type: Schema.ObjectId, ref: "Post"}],
    about: {},
    photo: String,
    following: [{type: Schema.ObjectId, ref: "User"}],
    followers: [{type: Schema.ObjectId, ref: "User"}],
    likes: [{type: Schema.ObjectId, ref: "Post"}],
    comments: [{type: Schema.ObjectId, ref: "Comment"}]
}, {
    timestamps: true
});
export default mongoose.model("User", userSchema);