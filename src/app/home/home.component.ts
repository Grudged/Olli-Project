import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AgentLoginDialogComponent } from '../agent-login-dialog/agent-login-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  openAgentLogin() {
    this.dialog.open(AgentLoginDialogComponent);
  }
}