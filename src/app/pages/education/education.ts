import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})

export class Education {
  educationList = [
    {
      school: 'Universiti Utara Malaysia, Kedah',
      period: 'Oct. 2023 — Present',
      degree: "Bachelor's Degree in Computer Science with Honours",
      resultLabel: 'Cumulative GPA',
      resultValue: '3.96',
      achievement: "Dean's List — Semester 1 - 5"
    },
    {
      school: 'Kedah Matriculation College, Kedah',
      period: 'Aug. 2022 — May 2023',
      degree: 'Matriculation — Computer Science',
      resultLabel: 'Cumulative GPA',
      resultValue: '4.00',
      achievement: ''
    },
    {
      school: 'Sekolah Menengah Kebangsaan Krian',
      period: 'Jan. 2017 — Mar. 2022',
      degree: 'Sijil Pelajaran Malaysia (SPM)',
      resultLabel: 'SPM Result',
      resultValue: '7A3B',
      achievement: ''
    }
  ];
}
