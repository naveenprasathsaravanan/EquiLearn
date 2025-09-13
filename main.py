from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import json

app = FastAPI(title="Equilearn API", version="1.0.0")

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample courses data
courses_data = [
    {
        "id": "1",
        "title": "Introduction to Quantum Physics",
        "description": "Explore the fundamentals of quantum mechanics, including wave-particle duality and uncertainty principle.",
        "materials": [
            {
                "id": "1",
                "title": "Quantum Physics Basics",
                "type": "PDF",
                "date": "2025-06-15",
                "content": "Key Features of Quantum Mechanics...",
                "downloadUrl": "/q1_notes.pdf"
            }
        ],
        "videos": [
            {
                "id": "1",
                "title": "Quantum Physics Basics",
                "play": "/lecture.mp4",
                "transcript": "Quantum Physics Simplified...",
                "description": "Understanding the basics of Quantum physics"
            }
        ]
    },
    {
        "id": "2",
        "title": "Web Development Bootcamp",
        "description": "Full stack development with HTML, CSS, JS, React and Node.js.",
        "materials": [
            {
                "id": "1",
                "title": "Introduction to HTML",
                "type": "PDF",
                "date": "2025-06-16",
                "content": "Beginner's Guide to HTML...",
                "downloadUrl": "/html.pdf"
            }
        ],
        "videos": [
            {
                "id": "1",
                "title": "Introduction to HTML",
                "play": "/html.mp4",
                "transcript": "The document provides a beginner-friendly introduction...",
                "description": "Understanding the basics of HTML"
            }
        ]
    }
]

@app.get("/")
async def root():
    return {"message": "Equilearn API is running!", "status": "success"}

@app.get("/api/courses")
async def get_courses():
    return {"courses": courses_data, "status": "success"}

@app.get("/api/courses/{course_id}")
async def get_course(course_id: str):
    course = next((c for c in courses_data if c["id"] == course_id), None)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return {"course": course, "status": "success"}

@app.get("/api/courses/{course_id}/materials")
async def get_course_materials(course_id: str):
    course = next((c for c in courses_data if c["id"] == course_id), None)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return {"materials": course.get("materials", []), "status": "success"}

@app.get("/api/courses/{course_id}/videos")
async def get_course_videos(course_id: str):
    course = next((c for c in courses_data if c["id"] == course_id), None)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return {"videos": course.get("videos", []), "status": "success"}

@app.post("/api/process-voice-command")
async def process_voice_command():
    """
    Process voice commands from the frontend
    This endpoint handles voice command processing
    """
    return {
        "message": "Voice command processing endpoint",
        "status": "success",
        "commands": ["home", "courses", "quantum", "web", "help"]
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "API is running"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
