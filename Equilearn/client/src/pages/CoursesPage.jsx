// src/pages/CoursesPage.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";


function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <h1>Available Courses</h1>
            <p className="mb-4">
              Browse our selection of courses designed to enhance your skills and knowledge.
            </p>
            <div className="course-grid">
              {coursesData.map((course) => (
                <div key={course.id} className="course-card">
                  <img
                    src={course.course_image}
                    alt={course.title}
                    className="course-card-img"
                  />
                  <div className="course-card-content">
                    <h3 className="course-card-title">{course.title}</h3>
                    <p className="course-card-description">{course.description}</p>
                    <Link to={`/courses/${course.id}`} className="btn btn-primary">
                      View Course
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VoiceCommandButton />
    </>
  );
}

export default CoursesPage;
