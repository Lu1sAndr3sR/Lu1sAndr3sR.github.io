import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skill: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let skill1 = {
      description: "Data Analysis"
    }

    let skill2 = {
      description: "Web Development"
    }

    let skill3 = {
      description: "Resilience"
    }

    let skill4 = {
      description: "Client Relations"
    }

    let skill5 = {
      description: "Communication"
    }

    let skill6 = {
      description: "Teamwork"
    }

    let skill7 = {
      description: "Creativity"
    }

    this.skill.push(skill1);
    this.skill.push(skill2);
    this.skill.push(skill3);
    this.skill.push(skill4);
    this.skill.push(skill5);
    this.skill.push(skill6);
    this.skill.push(skill7);
    console.log(this.skill);
  }
}