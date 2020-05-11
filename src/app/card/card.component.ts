import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cvd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public imageUrl = '../../assets/dog-profile.jpg';
  public likeFlag = false;

  ngOnInit(): void {
  }

  public like(): void {
    this.likeFlag = true;
  }

}
