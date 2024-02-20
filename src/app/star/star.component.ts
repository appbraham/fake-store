import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
})
export class StarComponent {

  @Input()
  value: number = 0;

  maxStars: number[] = [0,1,2,3,4];






}
