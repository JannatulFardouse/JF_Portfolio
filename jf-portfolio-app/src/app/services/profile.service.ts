// profile.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = {
    name: 'Jannatul Fardouse',
    title: 'Software Developer | Full Stack | C++ Specialist',
    location: 'Chemnitz, Germany',
    email: 'jannatul.fardouse.cse@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jannatul-fardouse-a9896819a/',
    github: 'https://github.com/JannatulFardouse',
    summary: `Passionate developer with strong C++, Angular, and .NET skills. Currently a Working Student at Digitronic GmbH. Seeking a full-time developer role in Germany or Austria.`,
    skills: ['Angular 17', 'C#', 'C++', 'ASP.NET Core', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript ES6'],
    experiences: [
      {
        company: 'Digitronic Computer System GmbH',
        position: 'Software Developer (Workstudent)',
        period: 'Jan 2024 – Present',
        responsibilities: [
          'Developed Communication System Software (Web + Mobile)',
          'Tech: Angular 17, ASP.NET Core, SQL Server',
          'Also contributed to German Police Management Software'
        ]
      },
      {
        company: 'TU Chemnitz – Philosophy Dept',
        position: 'Student Assistant (Frontend Developer)',
        period: 'Aug 2022 – Apr 2024',
        responsibilities: [
          'Built and translated TU Chemnitz’s philosophy website frontend',
          'Used HTML, CSS, JS, MySQL, and Google Translate API',
          'WCAG 2.0.1 accessibility-compliant'
        ]
      },
      {
        company: 'TU Chemnitz – C++ Lab',
        position: 'Teaching Assistant',
        period: 'Mar 2022 – Jul 2022',
        responsibilities: [
          'Supervised and supported students in solving C++ lab problems',
          'Provided technical assistance during practical sessions'
        ]
      },
      {
        company: 'TU Chemnitz – Mood Matrix Project',
        position: 'Student Assistant (Data & Docker)',
        period: 'Aug 2021 – Dec 2021',
        responsibilities: [
          'Handled preprocessing of physiological and behavioral datasets',
          'Worked with Docker containers and data pipelines'
        ]
      },
      {
        company: 'TU Chemnitz – Research Intern',
        position: 'Log Data Analyst',
        period: 'Nov 2019 – Mar 2020',
        responsibilities: [
          'Performed visualizations and clustering on smart home log data',
          'Used Python, Seaborn, Pandas, Matplotlib'
        ]
      },
      {
        company: 'London Grace International School, Dhaka',
        position: 'Teacher',
        period: 'May 2018 – Sep 2019',
        responsibilities: [
          'Taught Math, Science, and English in an international school environment',
          'Built strong classroom communication and leadership skills'
        ]
      }
    ],
    projects: [
      {
        title: 'TU Chemnitz Website Development',
        url: 'https://www.tu-chemnitz.de/phil/institute.php.en'
      },
      {
        title: 'ATM in C++',
        url: 'https://github.com/JannatulFardouse/ATM/blob/main/atm.cpp'
      },
      {
        title: 'Work Together Project',
        url: 'https://github.com/JannatulFardouse/AMDWorkTogetherProject'
      },
      {
        title: 'Panda Commerce',
        url: 'https://github.com/JannatulFardouse/panda-commerce'
      },
      {
        title: 'Hot Gadgets',
        url: 'https://github.com/JannatulFardouse/hot-gadgets'
      }
    ],
    education: [
      {
        degree: 'M.Sc. in Automotive Software Engineering',
        university: 'Technische Universität Chemnitz, Germany',
        status: 'Ongoing'
      },
      {
        degree: 'B.Sc. in Computer Science & Engineering',
        university: 'Eastern University, Bangladesh',
        grade: 'CGPA: 1.47 out of 4 (German Grade Scale)'
      }
    ],
    certifications: [
      { title: 'Complete C++ for Beginners', source: 'Udemy' },
      { title: 'Full Stack Web Development', source: 'Programming Hero' },
      { title: 'JavaScript Basics', source: 'w3schools' }
    ],
    languages: ['English (Fluent)', 'German (B1)'],
    softSkills: ['Teamwork', 'Problem Solving', 'Leadership', 'Communication']
  };

  getProfile() {
    return this.profile;
  }
}