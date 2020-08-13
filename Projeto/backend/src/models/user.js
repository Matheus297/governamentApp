const mongoose= require('mongoose');
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    name: String,
    age: Number,
    cargo: String,
    aliance: String,
    facebook_url: String,
    twitter_url: String,
    instagram_url: String,
    description: String,
    
})


module.exports = model('Profile', ProfileSchema);