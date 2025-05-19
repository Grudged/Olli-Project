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
    <form class="login-form">
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
      <div class="button-group">
        <button type="button" (click)="login()">Login</button>
        <button type="button" (click)="close()">Cancel</button>
      </div>
    </form>
  `,
  styles: [`
    .login-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 24px;
      background: #b9ab8dcc;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      max-width: 320px;
      margin: 0 auto;
      /* Remove margin-bottom: 0 auto; */
      height: 100%;
      box-sizing: border-box;
      justify-content: center;
    }
    .login-form label {
      display: flex;
      flex-direction: column;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .login-form input {
      margin-top: 4px;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    .button-group {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      margin-top: 0;
    }
    button {
      padding: 6px 16px;
      border: none;
      border-radius: 4px;
      background: #1976d2;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }
    button[type="button"]:last-child {
      background: #bdbdbd;
      color: #333;
    }
    button:hover {
      background: #1565c0;
    }
    button[type="button"]:last-child:hover {
      background: #9e9e9e;
    }
    h2 {
      text-align: center;
      margin-bottom: 16px;
    }
  `]
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
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', this.username);
      this.dialogRef.close({ username: this.username, isLoggedIn: this.isLoggedIn });
    } else {
      this.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      // Optionally, show an error message here
    }
  }

  close() {
    this.dialogRef.close();
  }
}