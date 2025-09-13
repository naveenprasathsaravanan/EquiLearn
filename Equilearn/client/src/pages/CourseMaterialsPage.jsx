// src/pages/CourseMaterialsPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function CourseMaterialsPage() {
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
            <h1>{course.title} - Materials</h1>
            <nav aria-label="breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem" }}>
                <li><Link to="/courses">Courses</Link></li>
                <li>/</li>
                <li><Link to={`/courses/${courseId}`}>{course.title}</Link></li>
                <li>/</li>
                <li>Materials</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="course-content">
              <div className="course-main">
                <h2>Course Materials</h2>
                <p>Access all lecture notes, assignments, and additional resources for this course.</p>
                <div className="material-list">
                  {course.materials.map((material) => (
                    <div
                      key={material.id}
                      className="material-card"
                      style={{ marginBottom: "1.5rem" }} 
                    >
                      <div className="material-card-content">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: "10px" }}
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <h3>{material.title}</h3>
                        <Link
                          to={`/courses/${courseId}/materials/${material.id}`}
                          className="btn btn-primary"
                        >
                          View Material
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar">
                <h3 className="sidebar-title">Course Navigation</h3>
                <ul className="sidebar-menu">
                  <li>
                    <Link to={`/courses/${courseId}`}>Course Overview</Link>
                  </li>
                  <li>
                    <Link to={`/courses/${courseId}/materials`} className="active">
                      Course Materials
                    </Link>
                  </li>
                  <li>
                    <Link to={`/courses/${courseId}/videos`}>Video Lectures</Link>
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

export default CourseMaterialsPage;
