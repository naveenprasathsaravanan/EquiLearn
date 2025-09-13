import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import CourseMaterialsPage from './pages/CourseMaterialsPage';
import MaterialPage from './pages/MaterialPage';
import CourseVideosPage from './pages/CourseVideosPage';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:courseId" element={<CoursePage />} />
      <Route path="/courses/:courseId/materials" element={<CourseMaterialsPage />} />
      <Route path="/courses/:courseId/materials/:materialId" element={<MaterialPage />} />
      <Route path="/courses/:courseId/videos" element={<CourseVideosPage />} />
      <Route path="/courses/:courseId/videos/:videoId" element={<VideoPage />} />
    </Routes>
  );
}

export default App;
