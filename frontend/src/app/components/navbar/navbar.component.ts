import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar glass-card">
      <div class="nav-brand">
        <span class="brand-icon">🤖</span>
        <span class="brand-title">SMART AI INTERVIEW ASSISTANT</span>
      </div>
      
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/resume-analyzer" routerLinkActive="active">Resume Analyzer</a>
        <a routerLink="/interview-room" routerLinkActive="active">AI Interview Room</a>
        <a routerLink="/question-bank" routerLinkActive="active">Question Bank</a>
        <a routerLink="/admin" routerLinkActive="active">Admin Panel</a>
      </div>
      
      <div class="nav-auth">
        <button class="btn-outline-neon">Log In</button>
        <button class="btn-primary-neon">Sign Up</button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 32px;
      margin: 16px 24px;
      border-radius: 20px;
    }
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.25rem;
      font-weight: 800;
      background: linear-gradient(90deg, #00f0ff, #7000ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .nav-links {
      display: flex;
      gap: 24px;
    }
    .nav-links a {
      color: #8b949e;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: color 0.3s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: #00f0ff;
    }
    .nav-auth {
      display: flex;
      gap: 12px;
    }
  `]
})
export class NavbarComponent {}
