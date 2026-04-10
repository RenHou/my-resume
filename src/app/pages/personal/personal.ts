import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  imports: [],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class Personal {
    name = 'Tan Hou Ren';
  initials = 'TH';
  jobTitle = 'Software Developer';
  age = 22;
  location = 'Kedah, Malaysia';
  nationality = 'Malaysian';
  about = 'Passionate software developer with experience building modern web applications. I enjoy solving complex problems with clean, maintainable code and am always looking to learn new technologies.';

  contactList = [
    { label: 'Email', value: 'tanhouren@email.com', icon: 'email.png', url: 'mailto:tanhouren@email.com' },
    { label: 'Phone', value: '+60 12-345 6789', icon: 'phone.svg', url: 'tel:+60123456789' },
  ];

  socialList = [
    { label: 'LinkedIn', value: 'hou ren tan', icon: 'linkedIn.png', url: 'https://www.linkedin.com/in/hou-ren-tan-5022152a7/' },
    { label: 'GitHub', value: 'renhou', icon: 'github.jpg', url: 'https://github.com/renhou' },
  ];

}
