const mongoose = require("mongoose");
const imageSchema = mongoose.Schema({
    searchText: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        default: "default-user",
    },
    imageUrl: {
        type: String,
        default: "default-user",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }

})
const imageModel = mongoose.model('ai-images', imageSchema);
module.exports = imageModel;