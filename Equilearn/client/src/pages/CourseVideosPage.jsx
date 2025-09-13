// src/pages/CourseVideosPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function CourseVideosPage() {
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
            <h1>{course.title} - Video Lectures</h1>
            <nav aria-label="breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem" }}>
                <li><Link to="/courses">Courses</Link></li>
                <li> / </li>
                <li><Link to={`/courses/${courseId}`}>{course.title}</Link></li>
                <li> / </li>
                <li>Video Lectures</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="course-content">
              <div className="course-main">
                <h2>Video Lectures</h2>
                <p>
                  Watch instructional videos to deepen your understanding of the course material.
                </p>

                <div className="video-lectures-list" style={{ marginTop: "2rem", display: "grid", gap: "2rem" }}>
                  {course.videos && course.videos.length > 0 ? (
                    course.videos.map((video) => {
                      const matchedImage = course.images?.find(i => i.title === video.title);
                      return (
                        <div
                          key={video.id}
                          className="video-card"
                          style={{
                            display: "flex",
                            gap: "1.5rem",
                            padding: "1.5rem",
                            backgroundColor: "white",
                            borderRadius: "0.5rem",
                            boxShadow: "var(--shadow)",
                          }}
                        >
                          <div
                            className="video-thumbnail"
                            style={{
                              flexShrink: 0,
                              width: "200px",
                              height: "113px",
                              backgroundColor: "#e5e7eb",
                              borderRadius: "0.25rem",
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={matchedImage?.pic || `/api/placeholder/200/113?text=${encodeURIComponent("Video: " + video.title)}`}
                              alt={video.title}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <div
                              className="play-icon"
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: "rgba(0,0,0,0.7)",
                                borderRadius: "50%",
                                width: "48px",
                                height: "48px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </div>
                          </div>
                          <div className="video-content">
                            <h3 style={{ marginBottom: "0.5rem" }}>{video.title}</h3>
                            <p style={{ color: "var(--gray)", marginBottom: "1rem" }}>
                              {video.description || "Watch this lecture to learn more about this topic."}
                            </p>
                            <div
                              className="video-meta"
                              style={{ display: "flex", gap: "1rem", fontSize: "0.875rem", color: "var(--gray)" }}
                            >
                              {video.duration && (
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }}
                                  >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                  </svg>
                                  {video.duration}
                                </span>
                              )}
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                              <Link to={`/courses/${courseId}/videos/${video.id}`} className="btn btn-primary">
                                Watch Video
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "3rem",
                        backgroundColor: "white",
                        borderRadius: "0.5rem",
                        boxShadow: "var(--shadow)",
                      }}
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--gray)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ margin: "0 auto 1rem" }}
                      >
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                      <h3>No Videos Available</h3>
                      <p style={{ color: "var(--gray)" }}>
                        Video lectures for this course will be uploaded soon.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="sidebar">
                <h3 className="sidebar-title">Course Navigation</h3>
                <ul className="sidebar-menu">
                  <li>
                    <Link to={`/courses/${courseId}`}>Course Overview</Link>
                  </li>
                  <li>
                    <Link to={`/courses/${courseId}/materials`}>Course Materials</Link>
                  </li>
                  <li>
                    <Link to={`/courses/${courseId}/videos`} className="active">
                      Video Lectures
                    </Link>
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

export default CourseVideosPage;
