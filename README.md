# EquiLearn - Inclusive AI-Powered E-Learning Platform

EquiLearn is a web-based, AI-assisted e-learning platform designed to provide **accessible education for visually and hearing-impaired students**. The platform features real-time assistive technologies such as voice command navigation, screen reader support, real-time subtitles, and sign language interpretation to bridge the digital divide and promote inclusivity in education.


## Features

- Role-based access: Tutor, Student, Admin
- Voice commands for navigation and hands-free learning
- Screen reader support and Text-to-Speech (TTS) for visually impaired learners
- Real-time subtitles, video transcripts, and sign language interpretation for hearing-impaired users
- Easy course creation, live classes, and material uploads for tutors
- Admin dashboard for content moderation and user management
- Scalable and modular architecture based on universal design and WCAG accessibility guidelines


## Tech Stack

- **Frontend:** React.js (inclusive UI with screen reader and voice integration)
- **Backend:** FastAPI (high-performance REST APIs with AI/ML integrations)
- **Database:** MongoDB (NoSQL for flexible, personalized content)
- **Other Tools:** Web Speech API, Whisper AI, WebSockets, Mediapipe (gesture/sign language recognition)
- **Development:** Vite with React plugin, ESLint configured for React and modern JavaScript


## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn package manager

### Backend Setup

1. Create and activate a Python virtual environment:
   venv\Scripts\activate
2. Install backend dependencies:
   pip install -r requirements.txt
3. Run the backend server:
   uvicorn main:app --reload
### Frontend Setup

1. Navigate to the `client` directory:
cd client
2. Install frontend dependencies:
npm install
3. Run the development server:
npm run dev
The React frontend will usually be available at `http://localhost:5173` and the FastAPI backend at `http://localhost:8000`.


## API Endpoints

- `GET /api/courses` - Get all courses
- `GET /api/courses/{course_id}` - Get details of a specific course
- `GET /api/courses/{course_id}/materials` - Get course materials for a specific course
- `GET /api/courses/{course_id}/videos` - Get video lectures for a specific course
- `POST /api/process-voice-command` - (Placeholder) Endpoint to process voice commands


## Project Structure

- `main.py` — FastAPI backend application with course management endpoints
- `client/` — React frontend application using Vite and React Router
- `requirements.txt` — Python backend dependencies
- `package.json` — Frontend dependencies and scripts
- `eslint.config.js` — ESLint configuration for React project
- `vite.config.js` — Vite configuration file


## Challenges & Lessons

- Ensuring real-time, reliable accessibility features like voice commands and subtitles without compromising performance
- Integrating AI-powered tools such as Whisper AI for real-time transcription and Mediapipe for gesture recognition
- Balancing personalization of content while maintaining user privacy and accessibility standards
- Modular design for scalability across different institutions and learner needs

## Future Plans

- Enhance AI-driven personalization and adaptive learning features
- Expand gesture and sign language recognition capabilities
- Add multilingual support and extend course offerings
- Improve UI/UX based on user testing with differently-abled learners


## License

This project is licensed under the MIT License.

**EquiLearn** — Making education accessible, one voice command



