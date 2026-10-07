import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h1 class="page-title">Candidate Performance Dashboard 📊</h1>
      
      <!-- Metrics Overview Cards -->
      <div class="metrics-grid">
        <div class="glass-card metric-card">
          <span class="metric-label">Overall Match Rating</span>
          <span class="metric-value">88.5%</span>
          <span class="metric-sub text-success">Top 5% Candidate</span>
        </div>

        <div class="glass-card metric-card">
          <span class="metric-label">Confidence Index</span>
          <span class="metric-value">92/100</span>
          <span class="metric-sub text-cyan">Fluent & Clear Speech</span>
        </div>

        <div class="glass-card metric-card">
          <span class="metric-label">STAR Framework Score</span>
          <span class="metric-value">84%</span>
          <span class="metric-sub text-purple">High Structure Adherence</span>
        </div>

        <div class="glass-card metric-card">
          <span class="metric-label">Integrity & Proctor Status</span>
          <span class="metric-value text-success">Verified</span>
          <span class="metric-sub">0 Malpractice Flags</span>
        </div>
      </div>

      <!-- Skills Breakdown & History Table -->
      <div class="dashboard-details">
        <div class="glass-card chart-card">
          <h3>Skill Competency Breakdown</h3>
          <div class="skill-bar">
            <div class="skill-info"><span>Python & Backend Architecture</span><span>94%</span></div>
            <div class="bar-bg"><div class="bar-fill" style="width: 94%;"></div></div>
          </div>
          <div class="skill-bar">
            <div class="skill-info"><span>Angular & TypeScript</span><span>88%</span></div>
            <div class="bar-bg"><div class="bar-fill" style="width: 88%;"></div></div>
          </div>
          <div class="skill-bar">
            <div class="skill-info"><span>STAR Method Behavioral Answers</span><span>82%</span></div>
            <div class="bar-bg"><div class="bar-fill" style="width: 82%;"></div></div>
          </div>
        </div>

        <div class="glass-card history-card">
          <h3>Recent Interview History</h3>
          <table class="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Interview Round</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-10-06</td>
                <td>Senior Full Stack Technical</td>
                <td><span class="score-pill">88/100</span></td>
                <td><span class="status-passed">Passed</span></td>
              </tr>
              <tr>
                <td>2026-10-02</td>
                <td>HR Behavioral Round</td>
                <td><span class="score-pill">82/100</span></td>
                <td><span class="status-passed">Passed</span></td>
              </tr>
              <tr>
                <td>2026-09-28</td>
                <td>Coding Practice (LogicBox)</td>
                <td><span class="score-pill">95/100</span></td>
                <td><span class="status-excellent">Excellent</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container { padding: 40px; }
    .page-title { font-size: 2.2rem; color: #fff; margin-bottom: 30px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 40px; }
    .metric-card { padding: 24px; display: flex; flex-direction: column; }
    .metric-label { font-size: 0.85rem; color: #8b949e; text-transform: uppercase; margin-bottom: 8px; }
    .metric-value { font-size: 2rem; font-weight: 800; color: #00f0ff; margin-bottom: 4px; }
    .metric-sub { font-size: 0.8rem; }
    .text-success { color: #00ff88; }
    .text-purple { color: #7000ff; }
    .dashboard-details { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .chart-card, .history-card { padding: 28px; }
    .skill-bar { margin-top: 16px; }
    .skill-info { display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 6px; }
    .bar-bg { background: rgba(255, 255, 255, 0.1); height: 8px; border-radius: 4px; overflow: hidden; }
    .bar-fill { background: linear-gradient(90deg, #00f0ff, #7000ff); height: 100%; border-radius: 4px; }
    .history-table { width: 100%; border-collapse: collapse; margin-top: 16px; text-align: left; }
    .history-table th, .history-table td { padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); font-size: 0.9rem; }
    .score-pill { background: rgba(0, 240, 255, 0.15); color: #00f0ff; padding: 4px 10px; border-radius: 12px; font-weight: 700; }
    .status-passed { color: #00ff88; font-weight: 600; }
    .status-excellent { color: #ff007f; font-weight: 600; }
  `]
})
export class DashboardComponent {}
