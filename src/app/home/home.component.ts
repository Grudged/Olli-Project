import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AgentLoginDialogComponent } from '../agent-login-dialog/agent-login-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public isLoggedIn: boolean = false;

  constructor(private dialog: MatDialog) {}

  openAgentLogin() {
    const dialogRef = this.dialog.open(AgentLoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.username == 'agentAdmin' && result.isLoggedIn == true) { // Adjust this check based on your dialog's return value
        this.isLoggedIn = true;
      }
    });
  }
}