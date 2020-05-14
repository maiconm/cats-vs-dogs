import { Component } from '@angular/core';
import { CatAndDogsHttpService } from './services/cat-and-dogs-http.service';
import { Cat } from './interfaces/cat';
import { Dog } from './interfaces/dog';

@Component({
  selector: 'cvd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cat: Cat;
  public dog: Dog;
  public canLike: boolean;

  constructor(private cdHttp: CatAndDogsHttpService) {
    this.getCatAndDog();
  }

  public likeHandler(): void {
    this.canLike = false;
    this.getCatAndDog();
  }

  private getCatAndDog(): void {
    this.cdHttp.catAndDogRequest().subscribe(([cat, dog]) => {
      this.cat = cat;
      this.dog = dog;
      this.canLike = true;
    });
  }
}
