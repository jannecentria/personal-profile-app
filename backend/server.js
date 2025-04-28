// Update for final backend version
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let courses = [];
let currentId = 1;

// GET all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// POST a new course
app.post('/courses', (req, res) => {
    const { name, grade } = req.body;
    const newCourse = { id: currentId++, name, grade };
    courses.push(newCourse);
    res.json(newCourse);
});

// PUT update a course
app.put('/courses/:id', (req, res) => {
    const { id } = req.params;
    const { name, grade } = req.body;
    const course = courses.find(c => c.id == id);
    if (course) {
        course.name = name;
        course.grade = grade;
        res.json(course);
    } else {
        res.status(404).send('Course not found');
    }
});

// DELETE a course
app.delete('/courses/:id', (req, res) => {
    const { id } = req.params;
    courses = courses.filter(c => c.id != id);
    res.sendStatus(204);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
