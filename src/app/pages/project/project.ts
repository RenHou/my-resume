import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-project',
  imports: [NgClass],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projectList = [
    {
      name: 'FlowTutor — Intelligent Tutoring System',
      type: 'Web App (Final Year Project)',
      iconBg: '#E6F1FB',
      icon: 'FlowTutor_logo.png',
      description: 'A website that provides a dynamic learning process for students, improving problem-solving skills through interactive flowcharts. Built as a full-stack final year project with VPS deployment.',
      techStack: [
        { label: 'React', color: 'blue' },
        { label: 'Spring Boot', color: 'teal' },
        { label: 'MySQL', color: 'pink' },
        { label: 'VPS Deployment', color: 'amber' },
      ],
      deliverables: [
        'Full-stack web application',
        'VPS-deployed live system',
        'Source code on GitHub',
      ],
      githubUrl: '',
      status: 'In Progress'
    },
    {
      name: 'PawPal — Pet Donating Application',
      type: 'Mobile App',
      iconBg: '#EEEDFE',
      icon: 'pawpallogo.png',
      description: 'A Flutter mobile application for pet donation and adoption, integrated with the BillPlz Payment Gateway to allow real monetary donations.',
      techStack: [
        { label: 'Flutter', color: 'purple' },
        { label: 'PHP', color: 'amber' },
        { label: 'Dart', color: 'blue' },
        { label: 'MySQL', color: 'pink' },
        { label: 'BillPlz Integration', color: 'teal' },
      ],
      deliverables: [
        'Flutter app',
        'Source code on GitHub',
        'Setup instructions (README.md)',
      ],
      githubUrl: 'https://github.com/RenHou/STTGK3013MobileWebProgramming/tree/main/Final%20Assignment/pawpal',
      status: 'done'
    },
    {
      name: 'Yummy Fresh Sales — Data Analysis',
      type: 'Data Analytics',
      iconBg: '#E1F5EE',
      icon: 'yummyfreshDataAnalysis.png',
      description: 'Analyzed sales data from Yummy Fresh hawker stall to provide meaningful business insights. Built an interactive Power BI dashboard and performed descriptive analysis using Python to help the hawker improve business performance.',
      techStack: [
        { label: 'Python', color: 'teal' },
        { label: 'Jupyter Notebook', color: 'blue' },
        { label: 'Power BI', color: 'purple' },
        { label: 'Descriptive Analysis', color: 'amber' },
      ],
      deliverables: [
        'Sales data analysis report (PDF)',
        'Power BI dashboard (.pbix)',
        'Python notebook (.ipynb)',
      ],
      githubUrl: 'https://github.com/RenHou/Data-analysis-Yummy-Fresh-sales',
      status: 'done'
    },
    {
      name: 'Spaceshooter Game — Hand Gesture Control',
      type: 'Computer Vision',
      iconBg: '#FAECE7',
      icon: 'Spaceshooter.png',
      description: 'Redesigned the classic Spaceshooter game to be played using hand gestures. Built collaboratively as a team project using Python and computer vision techniques.',
      techStack: [
        { label: 'Python', color: 'teal' },
        { label: 'Computer Vision', color: 'blue' },
      ],
      deliverables: [
        'Playable hand-gesture game',
        'Source code on GitHub',
      ],
      githubUrl: 'https://github.com/RenHou/Spaceshooter-game---Hand-gesture',
      status: 'done'
    },
    {
      name: 'Image Classification — Fruit Type Prediction',
      type: 'Machine Learning',
      iconBg: '#E1F5EE',
      icon: 'classification.png',
      description: 'Trained a CNN model to predict the fruit type based on uploaded images. Demonstrates applied deep learning for image classification tasks.',
      techStack: [
        { label: 'Python', color: 'teal' },
        { label: 'CNN', color: 'purple' },
        { label: 'Machine Learning', color: 'blue' },
      ],
      deliverables: [
        'Trained CNN model',
        'Source code on GitHub',
      ],
      githubUrl: 'https://github.com/RenHou/Image-Classification',
      status: 'done'
    },
  ];
}