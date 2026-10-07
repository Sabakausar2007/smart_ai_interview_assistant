-- ====================================================================
-- SMART AI INTERVIEW ASSISTANT - Production Database Schema (MySQL/SQL)
-- Tagline: Practice Smarter. Interview Better. Get Hired.
-- Grounded in AI Interview Multimodal Assessment Standards
-- ====================================================================

CREATE DATABASE IF NOT EXISTS smart_ai_interview_db;
USE smart_ai_interview_db;

-- 1. Users & Roles Management
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('candidate', 'hr_interviewer', 'admin') DEFAULT 'candidate',
    profile_picture_url VARCHAR(255),
    target_role VARCHAR(100),
    experience_years DECIMAL(3,1) DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Resumes & AI Skill Mapping
CREATE TABLE IF NOT EXISTS resumes (
    resume_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    raw_text LONGTEXT,
    parsed_skills JSON, -- Extracted technical & soft skills
    experience_summary TEXT,
    match_score_percentage DECIMAL(5,2),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 3. Interview Sessions (HR, Technical, Resume-based, Mock, MCQ, Coding)
CREATE TABLE IF NOT EXISTS interview_sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_type ENUM('hr', 'technical', 'resume_based', 'mock', 'mcq_practice', 'coding') NOT NULL,
    target_job_title VARCHAR(150) NOT NULL,
    status ENUM('pending', 'in_progress', 'completed', 'flagged') DEFAULT 'pending',
    total_questions INT DEFAULT 5,
    overall_score DECIMAL(5,2) DEFAULT 0.00,
    confidence_score DECIMAL(5,2) DEFAULT 0.00,
    fluency_score DECIMAL(5,2) DEFAULT 0.00,
    star_method_adherence_score DECIMAL(5,2) DEFAULT 0.00,
    cheating_flags_count INT DEFAULT 0,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 4. Question Bank & LLM Prompts
CREATE TABLE IF NOT EXISTS question_bank (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('hr', 'technical', 'behavioral_star', 'coding', 'mcq') NOT NULL,
    difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'medium',
    domain VARCHAR(100) NOT NULL, -- e.g., 'Python', 'System Design', 'Leadership'
    question_text TEXT NOT NULL,
    ideal_answer_rubric TEXT,
    options_json JSON NULL, -- For MCQ practice
    correct_option_index INT NULL
);

-- 5. Individual Response Evaluation Logs
CREATE TABLE IF NOT EXISTS session_responses (
    response_id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT NOT NULL,
    question_id INT NOT NULL,
    question_order INT NOT NULL,
    candidate_audio_path VARCHAR(255),
    transcription_text TEXT,
    response_duration_seconds INT,
    
    -- AI Multimodal Metrics
    relevance_score DECIMAL(5,2), -- NLP semantic similarity to ideal rubric
    sentiment_label ENUM('positive', 'neutral', 'nervous', 'confident') DEFAULT 'neutral',
    grammar_clarity_score DECIMAL(5,2),
    filler_words_count INT DEFAULT 0,
    ai_feedback_summary TEXT,
    suggested_improvement TEXT,
    
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES interview_sessions(session_id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
);

-- 6. Integrity & Proctoring Audit Log (Cheating Detection)
CREATE TABLE IF NOT EXISTS proctoring_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT NOT NULL,
    event_type ENUM('tab_switch', 'multiple_monitors', 'gaze_deviation', 'voice_mismatch', 'ai_assistant_overlay') NOT NULL,
    severity ENUM('low', 'medium', 'high') DEFAULT 'medium',
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    details TEXT,
    FOREIGN KEY (session_id) REFERENCES interview_sessions(session_id) ON DELETE CASCADE
);

-- Index optimization for real-time dashboard lookups
CREATE INDEX idx_user_sessions ON interview_sessions(user_id, status);
CREATE INDEX idx_session_responses ON session_responses(session_id);
