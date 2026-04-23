import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  name = 'Tan Hou Ren';
  jobTitle = 'Software Developer';
  bio = 'High-achieving Computer Science undergraduate (3.96 CGPA) with hands-on experience in full-stack engineering and intelligent system design. Proficient in Spring Boot, Flutter, and React. Google AI Essentials certified.';
  yearsExp = 1;
  projectCount = 5;
  certCount = 3;
  photoUrl = 'images.jpeg';

  downloadResume() {
    window.open('assets/resume.pdf', '_blank');
  }
}