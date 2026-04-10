import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.css',
})

export class Work {
  workList = [
    {
      company: 'ICare Pharmacy',
      period: 'Apr. 2022 — Aug. 2022',
      role: 'Staff',
      type: 'Part Time',
      duration: '4 Months',
      duties: [
        'Provided exceptional customer service by carefully attending to customer allergies to medicine.',
        'Assisted in receiving and storing merchandise according to established operations.',
      ]
    },
    {
      company: 'Billion Shopping Centre',
      period: 'Jun. 2023 — Aug. 2023',
      role: 'Staff',
      type: 'Part Time',
      duration: '3 Months',
      duties: [
        'Efficiently and accurately handled customer service by weighing merchandise and providing price tags to customers.',
        'Collaborated with colleagues to accurately pack merchandise within limited time.',
      ]
    }
  ];
}
