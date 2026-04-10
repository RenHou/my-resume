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
      name: 'PawPal',
      type: 'Mobile App',
      iconBg: '#EEEDFE',
      icon: 'pawpallogo.png',
      description: 'A Flutter mobile application for pet owners. Built as a final assignment for the Mobile & Web Programming course.',
      techStack: [
        { label: 'Flutter', color: 'purple' },
        { label: 'PHP', color: 'amber' },
        { label: 'Dart', color: 'blue' },
        { label: 'MySQL', color: 'pink' },
        { label: 'Mobile', color: 'teal' },
      ],
      deliverables: [
        'Flutter app',
        'Source code on GitHub',
        'Setup instructions (README.md)',],
      githubUrl: 'https://github.com/RenHou/STTGK3013MobileWebProgramming/tree/main/Final%20Assignment/pawpal',
      status: 'done'
    },

  ];
}
