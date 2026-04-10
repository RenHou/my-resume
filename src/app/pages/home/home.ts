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
  bio = 'Passionate developer with a love for building clean, scalable web applications. Experienced in Angular, TypeScript, and modern front-end architecture.';
  yearsExp = 1;
  projectCount = 5;
  certCount = 2;
  photoUrl = 'images.jpeg';  // Set your image path here

  downloadResume() {
    window.open('assets/resume.pdf', '_blank');
  }
}
