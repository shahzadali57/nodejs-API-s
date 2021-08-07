const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
    {
        title:String,
        description:String,
        created_on:{type:Date,default:Date.now}
    }
)

const postModel = mongoose.model("post",postSchema);
module.exports = postModel;