import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agent-login-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Agent Login</h2>
    <form>
      <label>
        Username:
        <input type="text" [(ngModel)]="username" name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" [(ngModel)]="password" name="password" />
      </label>
      <br />
      <button type="button" (click)="login()">Login</button>
      <button type="button" (click)="close()">Cancel</button>
    </form>
  `
})
export class AgentLoginDialogComponent {
  username = '';
  password = '';

  constructor(private dialogRef: MatDialogRef<AgentLoginDialogComponent>) {}

  login() {
    // Add your login logic here
    this.dialogRef.close({ username: this.username, password: this.password });
  }

  close() {
    this.dialogRef.close();
  }
}