// src/pages/VideoPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function VideoPage() {
  const { courseId, videoId } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find(c => c.id === courseId);
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

  const video = course.videos?.find(v => v.id === videoId);
  if (!video) {
    return (
      <div className="container section">
        <h2>Video not found</h2>
        <button className="btn btn-primary" onClick={() => navigate(`/courses/${courseId}/videos`)}>
          Back to Videos
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
            <h1>{video.title}</h1>
            <nav aria-label="breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem" }}>
                <li><Link to="/courses">Courses</Link></li>
                <li> / </li>
                <li><Link to={`/courses/${courseId}`}>{course.title}</Link></li>
                <li> / </li>
                <li><Link to={`/courses/${courseId}/videos`}>Videos</Link></li>
                <li> / </li>
                <li>{video.title}</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="course-content">
              <div className="course-main">
                <div className="video-container">
                  <video
                    src={video.play}
                    title={video.title}
                    controls
                    controlsList="nodownload"
                    className="course-video-player"
                    style={{ width: "100%", borderRadius: "8px", background: "#000" }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="video-info" style={{ marginTop: "1.5rem" }}>
                  <h2>{video.title}</h2>
                  <div className="video-meta" style={{
                    display: "flex",
                    gap: "1rem",
                    color: "var(--gray)",
                    margin: "0.5rem 0 1.5rem"
                  }}>
                    {video.instructor && (
                      <span>👩‍🏫 {video.instructor}</span>
                    )}
                    {video.duration && (
                      <span>⏱️ {video.duration}</span>
                    )}
                    {video.date && (
                      <span>📅 {video.date}</span>
                    )}
                  </div>

                  <div className="video-description">
                    <h3>Description</h3>
                    <p>{video.description || "No description available."}</p>
                  </div>

                  {video.transcript && (
                    <div className="video-transcript" style={{ marginTop: "2rem" }}>
                      <h3>Transcript</h3>
                      <div className="transcript-content"
                        style={{
                          maxHeight: "300px",
                          overflowY: "auto",
                          padding: "1rem",
                          backgroundColor: "#f9fafb",
                          borderRadius: "0.375rem",
                          border: "1px solid var(--gray-light)"
                        }}>
                        {video.transcript}
                      </div>
                    </div>
                  )}

                  {video.attachments?.length > 0 && (
                    <div className="video-attachments" style={{ marginTop: "2rem" }}>
                      <h3>Attachments</h3>
                      <ul style={{ listStyle: "none", margin: "1rem 0" }}>
                        {video.attachments.map((attachment, index) => (
                          <li key={index} style={{ marginBottom: "0.5rem" }}>
                            <a
                              href={attachment.url}
                              className="attachment-link"
                              download
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              📄 {attachment.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="sidebar">
                <h3 className="sidebar-title">Course Navigation</h3>
                <ul className="sidebar-menu">
                  <li><Link to={`/courses/${courseId}`}>Course Overview</Link></li>
                  <li><Link to={`/courses/${courseId}/materials`}>Course Materials</Link></li>
                  <li><Link to={`/courses/${courseId}/videos`}>Video Lectures</Link></li>
                </ul>

                <h3 className="sidebar-title" style={{ marginTop: "2rem" }}>More Videos</h3>
                <ul className="sidebar-menu">
                  {course.videos?.filter(v => v.id !== videoId).slice(0, 5).map(v => (
                    <li key={v.id}>
                      <Link to={`/courses/${courseId}/videos/${v.id}`}>{v.title}</Link>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "2rem" }}>
                  <Link
                    to={`/courses/${courseId}/videos`}
                    className="btn btn-outline"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    All Videos
                  </Link>
                </div>
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

export default VideoPage;
