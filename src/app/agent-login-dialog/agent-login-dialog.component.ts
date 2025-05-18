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
  storedUsername = 'agentAdmin'; // Set your stored username here
  storedPassword = 'password123'; // Set your stored password here
  isLoggedIn = false;

  constructor(private dialogRef: MatDialogRef<AgentLoginDialogComponent>) {}

  login() {
    if (this.username === this.storedUsername && this.password === this.storedPassword) {
      this.isLoggedIn = true;
      this.dialogRef.close({ username: this.username, isLoggedIn: this.isLoggedIn });
    } else {
      this.isLoggedIn = false;
      // Optionally, show an error message here
    }
  }

  close() {
    this.dialogRef.close();
  }
}