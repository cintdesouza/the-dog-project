import { Component, DoCheck, OnChanges, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "dog-project";

  public dogList = [{ id: 1, dog: "Lhasa Apso" }];

  public dogsToAdd = [
    { id: 2, dog: "Pinscher" },
    { id: 3, dog: "Cocker Spaniel" },
    { id: 4, dog: "Lulu da Pomerânia" },
    { id: 5, dog: "Pit Bull" },
    { id: 6, dog: "Dálmata" },
    { id: 7, dog: "Labrador" },
    { id: 8, dog: "Boxer" },
    { id: 9, dog: "Akita" },
    { id: 10, dog: "Husky Siberiano" },
    { id: 11, dog: "Shih Tzu" },
    { id: 12, dog: "Dobermann" },
    { id: 13, dog: "São Bernardo" },
    { id: 14, dog: "Maltês" },
    { id: 15, dog: "Golden Retriever" },
    { id: 16, dog: "Yorkshire" },
    { id: 17, dog: "Pastor Alemão" },
    { id: 18, dog: "Samoieda" },
    { id: 19, dog: "Rottweiler" },
    { id: 20, dog: "Vira-latas Caramelo" },
  ];

  public time = 1;

  public randomNumber = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.time++;
    }, 1000);

    setInterval(() => {
      this.mathRandom();
      this.addDog()
    }, 100000);
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
}
