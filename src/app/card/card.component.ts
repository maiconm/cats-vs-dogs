import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input()
  public imageUrl: string;
  @Input()
  public canLike = true;
  @Output()
  public liked = new EventEmitter<boolean>();
  public likeFlag = false;

  public like(): void {
    if (this.canLike) {
      this.likeFlag = true;
      this.liked.emit(true);
    }
  }

  public get animationTrigger(): string {
    return this.likeFlag ? 'showing' : 'notShowing';
  }
}
