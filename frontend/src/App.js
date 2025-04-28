import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fullName = "Janne Raappana - Group NTIS22K"; // ✏️ Write your real name + group here

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const response = await axios.get('http://localhost:5000/courses');
    setCourses(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId === null) {
      await axios.post('http://localhost:5000/courses', { name, grade });
    } else {
      await axios.put(`http://localhost:5000/courses/${editingId}`, { name, grade });
      setEditingId(null);
    }
    setName('');
    setGrade('');
    fetchCourses();
  };

  const handleEdit = (course) => {
    setName(course.name);
    setGrade(course.grade);
    setEditingId(course.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/courses/${id}`);
    fetchCourses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{fullName}</h1>

      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.grade}
            <button onClick={() => handleEdit(course)}>Edit</button>
            <button onClick={() => handleDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>{editingId ? "Edit Course" : "Add New Course"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Course Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          placeholder="Grade"
          value={grade}
          onChange={e => setGrade(e.target.value)}
          required
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default App;
