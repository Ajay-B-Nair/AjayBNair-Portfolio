import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, CardModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  profile = {
    name: 'Ajay B Nair',
    title: 'Software Engineer',
    description: 'Welcome to my portfolio! I\'m a software engineer who loves turning ideas into elegant, functional solutions. Explore my journey through code, projects, and technical insights.',
    imageUrl: 'assets/images/profile.jpg'
  };

  navigationItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blog', route: '/blog' },
    { label: 'Ask Questions', id: 'contact' }
  ];

  navigateToSection(section: any) {
    if (section.route) {
      // Router handles navigation to blog
      return;
    }
    // Smooth scroll for other sections
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}