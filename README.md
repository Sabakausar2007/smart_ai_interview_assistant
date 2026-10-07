# SMART AI INTERVIEW ASSISTANT 🤖
> **Tagline**: Practice Smarter. Interview Better. Get Hired.

An enterprise-grade, full-stack AI SaaS platform for virtual interview preparation, candidate evaluation, resume parsing, and multimodal performance analytics.

---

## 🌟 Key Features

### 1. 🤖 Interactive Animated AI Robot Interviewer
- **4-State Visual State Machine**: Idle, Listening, Thinking, Speaking.
- **Dynamic Holographic Halo & Aura Glows**: Real-time status indicators driven by live audio/speech stream telemetry.

### 2. 🧠 Multimodal AI Scoring Engine
- **STAR Framework Evaluation**: Automatically evaluates candidate responses for Situation, Task, Action, and Result coverage.
- **Grammar & Filler Word Detection**: Counts filler phrases ("um", "uh", "like") and estimates communication fluency.
- **NLP Response Relevance**: Measures semantic match against ideal response rubrics.

### 3. 🔍 Resume Analyzer & JD Matcher
- Extracts technical skills (Python, Angular, FastAPI, SQL, Docker, ML) and compares them with job description criteria.
- Generates personalized candidate match scores and recommends tailored mock interview paths.

### 4. 🛡️ Anti-Malpractice & Integrity Monitoring
- Logs window tab switching, secondary display usage, gaze deviations, and AI assistant overlay detections.

### 5. 📊 Analytics Dashboard
- Comprehensive skill competency radar, confidence index, interview history, and proctoring audit logs.

---

## 🛠️ Technology Stack

- **Frontend**: Angular 18+, HTML5, CSS3 (Glassmorphism Dark Theme), TypeScript
- **Backend**: Python 3.12+, FastAPI, Object-Oriented Domain Controllers, Pydantic
- **Database**: MySQL 8.0+ / Relational SQL Schema
- **AI Integrations**: LLM API wrappers for dynamic question generation and multimodal feedback

---

## 🚀 Getting Started

### 1. Database Setup
Import the SQL schema into your MySQL server:
```bash
mysql -u root -p < database/schema.sql
```

### 2. Backend Setup (FastAPI)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
API Documentation will be available at: `http://localhost:8000/docs`

### 3. Frontend Setup (Angular)
```bash
cd frontend
npm install
ng serve
```
Open your browser at: `http://localhost:4200`
