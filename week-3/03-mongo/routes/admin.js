const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username : username,
        password : password
    })
    .then(() => {
        res.json({
            msg : 'Admin created successfully'
        })
    })
});

router.post('/courses', adminMiddleware,(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    Course.create({
        title : title,
        description : description,
        imageLink : imageLink,
        price : price
    }).then((value) => {
        console.log(value)
        res.json({
            msg : 'Course created successfully',
            courseId: value._id
        })
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then((value) => {
        res.json({
            courses : value
        })
    })
});

module.exports = router;