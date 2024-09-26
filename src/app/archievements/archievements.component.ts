import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archievements.component.html',
  styleUrl: './archievements.component.css'
})
export class ArchievementsComponent {

  archievements: Array<any> = []

  constructor() {}

  ngOnInit(): void {
    let archievement1 = {
      description: "Certified Angular Developer"
    }

    let archievement2 = {
      description: "Speaker en el Congreso de Innovación Tecnológica"
    }

    let archievement3 = {
      description: "Data Science Specialization"
    }

    let archievement4 = {
      description: "Certified Kubernetes Administrator"
    }

    let archievement5 = {
      description: "Linux Administrator"
    }

    this.archievements.push(archievement1);
    this.archievements.push(archievement2);
    this.archievements.push(archievement3);
    this.archievements.push(archievement4);
    this.archievements.push(archievement5);
    console.log(this.archievements);
  }
}