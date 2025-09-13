// src/pages/CoursePage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  

  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="container section">
        <h2>Course not found</h2>
        <button className="btn btn-primary" onClick={() => navigate("/courses")}>
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="course-header">
          <div className="container">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="course-content">
              <div className="course-main">
                <h2>About This Course</h2>
                <p>
                  This comprehensive course is designed to provide you with a deep understanding of
                  the subject matter. Through a combination of video lectures, practical exercises,
                  and supplementary materials, you'll develop both theoretical knowledge and practical skills.
                </p>
                <h3>What You'll Learn</h3>
                <ul>
                  <li>Core concepts and fundamental principles</li>
                  <li>Practical application of theoretical knowledge</li>
                  <li>Industry best practices and standards</li>
                  <li>Problem-solving techniques and approaches</li>
                </ul>
                <h3>Course Structure</h3>
                <p>
                  The course is structured into modules, each focusing on specific aspects of the
                  subject. You'll have access to video lectures, reading materials, assignments,
                  and assessments to reinforce your learning.
                </p>
              </div>

              <div className="sidebar">
                <h3 className="sidebar-title">Course Resources</h3>
                <ul className="sidebar-menu">
                  <li>
                    <Link to={`/courses/${courseId}/materials`}>Course Materials</Link>
                  </li>
                  <li>
                    <Link to={`/courses/${courseId}/videos`}>Video Lectures</Link>
                  </li>
                  <li>
                    <a href="#">Discussion Forum</a>
                  </li>
                  <li>
                    <a href="#">Assignments</a>
                  </li>
                  <li>
                    <a href="#">Quizzes</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VoiceCommandButton />
    </>
  );
}

export default CoursePage;
