import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-certification',
  imports: [NgClass],
  templateUrl: './certification.html',
  styleUrl: './certification.css',
})
export class Certification {
  certList = [
    {
      name: 'Google AI Essentials',
      issuer: 'Google · via Coursera',
      iconBg: '#FFFFFF',
      icon: 'google.jpeg',
      type: 'url',
      link: 'https://www.coursera.org/account/accomplishments/specialization/D1F8XCZBS32T',
      description: 'Covers the fundamentals of AI and how to use Google\'s AI-powered tools responsibly and effectively in everyday work.',
      tags: [
        { label: 'Artificial Intelligence', color: 'blue' },
        { label: 'Specialization', color: 'green' },
      ]
    },
    {
      name: 'CCNA: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      iconBg: '#FFFFFF',
      icon: 'cisco.png',
      type: 'pdf',
      link: 'CCNA-_Introduction_to_Networks_certificate.pdf',
      description: 'Covers the fundamentals of networking, including network protocols, IP addressing, routing, and switching concepts.',
      tags: [
        { label: 'Networking', color: 'teal' },
        { label: 'Cisco', color: 'blue' },
      ]
    },
    {
      name: 'Introduction to Practical React',
      issuer: 'eLatih · Malaysia',
      iconBg: '#FFFFFF',
      icon: 'elatih.png',
      type: 'pdf',
      link: 'Introduction to React.pdf',
      description: 'Introduction to building practical web applications using React, covering core concepts like components, state management, and hooks.',
      tags: [
        { label: 'React', color: 'purple' },
        { label: 'Web Development', color: 'amber' },
      ]
    },
  ];
}