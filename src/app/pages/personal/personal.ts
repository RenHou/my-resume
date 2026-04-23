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
  location = 'Bandar Baharu, Kedah, Malaysia';
  nationality = 'Malaysian';
  about = 'High-achieving Computer Science undergraduate (3.96 CGPA) with extensive hands-on experience in full-stack engineering and intelligent system design. Proficient in architecting scalable applications using Spring Boot, Flutter, and React, with a focus on implementing complex logic and secure payment gateways. Google AI Essentials certified with a commitment to clean code and data-driven problem solving.';

  contactList = [
    { label: 'Email', value: 'tanhouren371@gmail.com', icon: 'email.png', url: 'mailto:tanhouren371@gmail.com' },
    { label: 'Phone', value: '+601113227627', icon: 'phone.svg', url: 'tel:+601113227627' },
  ];

  socialList = [
    { label: 'LinkedIn', value: 'hou-ren-tan', icon: 'linkedIn.png', url: 'https://www.linkedin.com/in/hou-ren-tan-5022152a7/' },
    { label: 'GitHub', value: 'RenHou', icon: 'github.jpg', url: 'https://github.com/RenHou' },
  ];
}