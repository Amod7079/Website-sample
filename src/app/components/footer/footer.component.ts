import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router) {}
  goToHome() {
    //navigate
    this.router
      .navigate(['/home'])
      .then((data) => {
        console.log(data);
        console.log('navigated');
      })
      .catch((error) => {
        console.log(error);
        console.log('navigation failed');
      });
  }

  goToProfile() {
    this.router.navigate(['/profile', 234, 'durgesh', 'lucknow']);
  }

  goToGoogle() {
    // this.router.navigateByUrl('https://www.google.com');
    window.location.href = 'https://www.google.com';
  }
}
