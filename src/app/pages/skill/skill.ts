import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [NgClass],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  skillCategories = [
    {
      title: 'Languages',
      icon: 'language.png',
      iconBg: '#EEEDFE',
      fullWidth: true,
      skills: [
        { name: 'Bahasa Melayu', level: 'good' },
        { name: 'English', level: 'good' },
        { name: 'Mandarin', level: 'good' },
      ]
    },
    {
      title: 'Productivity tools',
      icon: 'productivityTools.png',
      iconBg: '#E6F1FB',
      fullWidth: true,
      skills: [
        { name: 'Microsoft Word', level: 'good' },
        { name: 'Canva', level: 'good' },
        { name: 'Google Forms', level: 'good' },
      ]
    },
    {
      title: 'Web & programming',
      icon: 'programming.png',
      iconBg: '#EEEDFE',
      fullWidth: true,
      skills: [
        { name: 'Java', level: 'good' },
        { name: 'HTML & CSS', level: 'basic' },
        { name: 'Visual Basic', level: 'basic' },
        { name: 'PHP', level: 'basic' },
        { name: 'MySQL CRUD', level: 'basic' },
      ]
    },
    {
      title: 'Frameworks & tools',
      icon: 'framework.webp',
      iconBg: '#FAECE7',
      fullWidth: true,
      skills: [
        { name: 'Flutter', level: 'experience' },
        { name: 'Spring Boot', level: 'experience' },
        { name: 'React', level: 'experience' },
        { name: 'Billplz Payment Gateway', level: 'experience' },
      ]
    },
    {
      title: 'Data & analytics',
      icon: 'dataAnalysis.png',
      iconBg: '#E1F5EE',
      fullWidth: true,
      skills: [
        { name: 'Python — Data Analysis (Clustering & Classification)', level: 'basic' },
        { name: 'Power BI — Infomation Visualization (Dashboard)', level: 'basic' },
      ]
    },
  ];
}

