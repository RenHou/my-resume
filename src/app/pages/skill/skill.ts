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
      title: 'Productivity Tools',
      icon: 'productivityTools.png',
      iconBg: '#E6F1FB',
      fullWidth: true,
      skills: [
        { name: 'Microsoft Word', level: 'good' },
        { name: 'Canva', level: 'good' },
        { name: 'Google Forms', level: 'good' },
        { name: 'Excel', level: 'good' },
        { name: 'GitHub', level: 'good' },
        { name: 'Visual Studio Code', level: 'good' },
      ]
    },
    {
      title: 'Web & Programming',
      icon: 'programming.png',
      iconBg: '#EEEDFE',
      fullWidth: true,
      skills: [
        { name: 'Java', level: 'good' },
        { name: 'JavaScript', level: 'good' },
        { name: 'Dart', level: 'good' },
        { name: 'HTML & CSS', level: 'basic' },
        { name: 'PHP', level: 'basic' },
        { name: 'SQL', level: 'basic' },
        { name: 'Visual Basic', level: 'basic' },
        { name: 'MySQL CRUD', level: 'basic' },
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: 'framework.webp',
      iconBg: '#FAECE7',
      fullWidth: true,
      skills: [
        { name: 'Spring Boot', level: 'experience' },
        { name: 'React', level: 'experience' },
        { name: 'Angular', level: 'experience' },
        { name: 'Flutter', level: 'experience' },
        { name: 'Billplz Payment Gateway', level: 'experience' },
        { name: 'Playwright (Testing)', level: 'experience' },
      ]
    },
    {
      title: 'Data & Analytics',
      icon: 'dataAnalysis.png',
      iconBg: '#E1F5EE',
      fullWidth: true,
      skills: [
        { name: 'Python — Data Analysis (Clustering & Classification)', level: 'basic' },
        { name: 'Power BI — Information Visualization (Dashboard)', level: 'basic' },
        { name: 'Jupyter Notebook', level: 'basic' },
      ]
    },
  ];
}