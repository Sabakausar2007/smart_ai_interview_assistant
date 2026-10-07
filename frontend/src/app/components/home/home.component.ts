import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-hero">
      <div class="hero-content">
        <div class="badge">🚀 NEXT-GEN AI SAAS PLATFORM</div>
        <h1 class="hero-title">SMART AI INTERVIEW ASSISTANT 🤖</h1>
        <p class="hero-tagline">Practice Smarter. Interview Better. Get Hired.</p>
        <p class="hero-description">
          Master your technical and HR interviews with our real-time animated AI Robot interviewer.
          Get instant STAR scorecards, speech clarity feedback, and cheating-free proctored practice sessions.
        </p>
        <div class="hero-actions">
          <button class="btn-primary-neon" routerLink="/interview-room">Start AI Interview</button>
          <button class="btn-outline-neon" routerLink="/resume-analyzer">Analyze Resume</button>
        </div>
      </div>
      
      <div class="hero-robot-wrapper glass-card">
        <app-ai-robot [currentState]="robotState"></app-ai-robot>
        <div class="robot-controls">
          <button (click)="robotState = 'idle'">Idle</button>
          <button (click)="robotState = 'listening'">Listen</button>
          <button (click)="robotState = 'thinking'">Think</button>
          <button (click)="robotState = 'speaking'">Speak</button>
        </div>
      </div>
    </div>

    <!-- Feature Grid -->
    <div class="features-section">
      <h2 class="section-title">EVERYTHING YOU NEED TO ACE YOUR NEXT ROLE</h2>
      <div class="features-grid">
        <div class="glass-card feature-card">
          <div class="card-icon">🧠</div>
          <h3>Multimodal AI Evaluator</h3>
          <p>Combines NLP response analysis, voice tone modulation, and STAR framework adherence scoring.</p>
        </div>
        
        <div class="glass-card feature-card">
          <div class="card-icon">📄</div>
          <h3>Resume AI Matcher</h3>
          <p>Parses your CV against target job descriptions, recommending role-tailored interview rounds.</p>
        </div>

        <div class="glass-card feature-card">
          <div class="card-icon">💻</div>
          <h3>Coding & MCQ Practice</h3>
          <p>Syntax-free logic assessments, live browser-based IDE, and domain-specific question banks.</p>
        </div>

        <div class="glass-card feature-card">
          <div class="card-icon">📊</div>
          <h3>Performance Analytics</h3>
          <p>Deep skill breakdowns, candidate confidence indices, and historical progress tracking.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-hero {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 40px;
      padding: 60px 40px;
      align-items: center;
    }
    .badge {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 20px;
      background: rgba(0, 240, 255, 0.1);
      border: 1px solid #00f0ff;
      color: #00f0ff;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .hero-title {
      font-size: 3rem;
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 12px;
      background: linear-gradient(135deg, #ffffff, #00f0ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-tagline {
      font-size: 1.5rem;
      font-weight: 700;
      color: #7000ff;
      margin-bottom: 20px;
    }
    .hero-description {
      font-size: 1.1rem;
      color: #8b949e;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .hero-actions {
      display: flex;
      gap: 16px;
    }
    .hero-robot-wrapper {
      padding: 30px;
      text-align: center;
    }
    .robot-controls {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 20px;
    }
    .robot-controls button {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
    }
    .robot-controls button:hover {
      background: #00f0ff;
      color: #000;
    }
    .features-section {
      padding: 40px;
      text-align: center;
    }
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 40px;
      color: #00f0ff;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
    }
    .feature-card {
      padding: 30px;
      text-align: left;
    }
    .card-icon {
      font-size: 2.5rem;
      margin-bottom: 16px;
    }
  `]
})
export class HomeComponent {
  robotState: 'idle' | 'listening' | 'thinking' | 'speaking' = 'speaking';
}
