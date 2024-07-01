import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@demo/auth';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shells';
  auth = inject(AuthService);

  constructor() {
    this.auth.userName = 'Jane Doe';
  }
}

