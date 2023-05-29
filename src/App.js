import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import AdminDashboard from './components/admin/AdminDashboard';
import QuestionForm from "./components/admin/QuestionForm"
import StudentDashboard from './components/student/StudentDashboard';
import ExamQuestion from './components/student/ExamQuestion';
import AdminLogin from './pages/admin/AdminLogin';
import AdminHome from './pages/admin/AdminHome';
import StudentLogin from './pages/student/StudentLogin';
import StudentHome from './pages/student/StudentHome';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<AdminLogin/>} />
        <Route path="/admin/home" element={<AdminHome/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/question" element={<QuestionForm/>} />
        <Route path="/student/login" element={<StudentLogin/>} />
        <Route path="/student/home" element={<StudentHome/>} />
        <Route path="/student/dashboard" element={<StudentDashboard/>} />
        <Route path="/student/exam" element={<ExamQuestion/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
