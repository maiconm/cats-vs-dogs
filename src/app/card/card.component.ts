import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('likeDislike', [
      state('notShowing', style({
        opacity: 0,
        fontSize: 80,
      })),
      state('showing', style({
        opacity: 1,
        fontSize: 150,      })),
      transition('notShowing => showing', [
        animate('.25s')
      ])
    ])
  ],
  selector: 'cvd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public imageUrl = '../../assets/dog-profile.jpg';
  public likeFlag = false;

  public like(): void {
    this.likeFlag = true;
  }

  public get animationTrigger(): string {
    return this.likeFlag ? 'showing' : 'notShowing';
  }

}
