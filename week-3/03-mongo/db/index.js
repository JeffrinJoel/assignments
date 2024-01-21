const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://admin:dota2@ac-yn0tg8p-shard-00-00.8lfbsb9.mongodb.net:27017,ac-yn0tg8p-shard-00-01.8lfbsb9.mongodb.net:27017,ac-yn0tg8p-shard-00-02.8lfbsb9.mongodb.net:27017/?replicaSet=atlas-falj2a-shard-0&ssl=true&authSource=admin');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}