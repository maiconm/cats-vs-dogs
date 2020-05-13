import { Component } from '@angular/core';

@Component({
  selector: 'cvd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public image = '../../assets/dog-profile.jpg';
  public image2 = '../../assets/cat-profile.jpg';
  public canLike = true;

  public likeHandler(): void {
    this.canLike = false;
  }
}
