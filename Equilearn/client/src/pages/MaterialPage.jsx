import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function MaterialPage() {
  const { courseId, materialId } = useParams();
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

  const material = course.materials.find((m) => m.id === materialId);

  if (!material) {
    return (
      <div className="container section">
        <h2>Material not found</h2>
        <button className="btn btn-primary" onClick={() => navigate(`/courses/${courseId}/materials`)}>
          Back to Materials
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
            <h1>{material.title}</h1>
            <nav aria-label="breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem" }}>
                <li><Link to="/courses">Courses</Link></li>
                <li> / </li>
                <li><Link to={`/courses/${courseId}`}>{course.title}</Link></li>
                <li> / </li>
                <li><Link to={`/courses/${courseId}/materials`}>Materials</Link></li>
                <li> / </li>
                <li>{material.title}</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="course-content">
              <div className="material-content">
                <h2>{material.title}</h2>
                <div className="material-metadata">
                  <p><strong>Type: </strong>{material.type || "Document"}</p>
                  {material.date && <p><strong>Date: </strong>{material.date}</p>}
                </div>

                <hr style={{ margin: "1.5rem 0" }} />

                <div className="material-body">
                  {material.link ? (
                    <div dangerouslySetInnerHTML={{ __html: material.content }} />
                  ) : (
                    <p>This material content is not available for preview.</p>
                  )}
                </div>

                {material.downloadUrl && (
                  <div className="material-actions" style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <a href={material.downloadUrl} className="btn btn-primary" download>
                      Download Material
                    </a>
                    <a href={material.downloadUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >
                      View PDF
                    </a>
                  </div>
                )}
              </div>

              <div className="sidebar">
                <h3 className="sidebar-title">Course Navigation</h3>
                <ul className="sidebar-menu">
                  <li><Link to={`/courses/${courseId}`}>Course Overview</Link></li>
                  <li><Link to={`/courses/${courseId}/materials`}>Course Materials</Link></li>
                  <li><Link to={`/courses/${courseId}/videos`}>Video Lectures</Link></li>
                </ul>

                <h3 className="sidebar-title" style={{ marginTop: "2rem" }}>Related Materials</h3>
                <ul className="sidebar-menu">
                  {course.materials
                    .filter((m) => m.id !== materialId)
                    .slice(0, 3)
                    .map((m) => (
                      <li key={m.id}>
                        <Link to={`/courses/${courseId}/materials/${m.id}`}>
                          {m.title}
                        </Link>
                      </li>
                    ))}
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

export default MaterialPage;
