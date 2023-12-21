import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, DogCardComponent, FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dog-project';

  public dogList = [{ id: 1, dog: 'Lhasa Apso', img: '../assets/lhasa1.jpg' }];

  public dogsToAdd = [
    { id: 2, dog: 'Pinscher', img: '../assets/pinscher1.jpg' },
    { id: 3, dog: 'Cocker Spaniel', img: '../assets/spaniel1.jpg' },
    { id: 4, dog: 'Lulu da Pomerânia', img: '../assets/pom1.jpg' },
    { id: 5, dog: 'Pit Bull', img: '../assets/pb1.jpg' },
    { id: 6, dog: 'Dálmata', img: '../assets/dalm1.jpg' },
    { id: 7, dog: 'Labrador', img: '../assets/lab1.jpg' },
    { id: 8, dog: 'Dachshund', img: './assets/dhund.jpg' },
    { id: 9, dog: 'Akita', img: './assets/akita1.jpg' },
    { id: 10, dog: 'Husky Siberiano', img: './assets/husky1.jpg' },
    { id: 11, dog: 'Shih Tzu', img: './assets/stz1.jpg' },
    { id: 12, dog: 'Dobermann', img: './assets/dobermann1.jpg' },
    { id: 13, dog: 'São Bernardo', img: './assets/sbn1.jpg' },
    { id: 14, dog: 'Maltês', img: './assets/mlts1.jpg' },
    { id: 15, dog: 'Golden Retriever', img: '../assets/golden1.jpg' },
    { id: 16, dog: 'Yorkshire', img: '../assets/yks1.jpg' },
    { id: 17, dog: 'Pastor Alemão', img: '../assets/gs1.jpg' },
    { id: 18, dog: 'Samoieda', img: '../assets/smy1.jpg' },
    { id: 19, dog: 'Rottweiler', img: '../assets/rtt1.jpg' },
    { id: 20, dog: 'Vira-latas Caramelo', img: '../assets/vrl1.jpg' },
  ];

  public time = 1;

  public randomNumber = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.mathRandom();
      this.addDog()
    }, 10000);
  }

  public mathRandom() {
    return (this.randomNumber = Math.round(Math.random() * 20));
  }

  public addDog() {
    this.dogsToAdd.forEach((dog) => {
      if (dog.id == this.randomNumber) {
        this.dogList.push(dog);
      }
    });
  }

  constructor() {
    const timeObs$ = interval(1000)
    timeObs$.subscribe(num => {this.time = num})
  }
}
