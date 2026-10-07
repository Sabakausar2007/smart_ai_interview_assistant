import { Component, Input } from '@angular/core';

export type RobotState = 'idle' | 'listening' | 'thinking' | 'speaking';

@Component({
  selector: 'app-ai-robot',
  template: `
    <div class="robot-container">
      <div class="robot-halo"></div>
      <div class="robot-head" [ngClass]="'state-' + currentState">
        <div class="eyes-wrapper">
          <div class="eye left-eye"></div>
          <div class="eye right-eye"></div>
        </div>
        <div class="mouth"></div>
      </div>
      
      <div class="status-pill">
        <span class="status-dot" [ngClass]="'dot-' + currentState"></span>
        <span>AI status: {{ currentState | uppercase }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./ai-robot.component.css']
})
export class AIRobotComponent {
  @Input() currentState: RobotState = 'idle';
}
