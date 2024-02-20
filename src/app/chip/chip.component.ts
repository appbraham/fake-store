import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './chip.component.html',
})
export class ChipComponent {

  @Output()
  categoryEmitter:EventEmitter<string>;

  @Input()
  chipItem:string;

  constructor(){
    this.categoryEmitter = new EventEmitter<string>();
    this.chipItem = '';
  }

  showCategorySelected(){
    this.categoryEmitter.emit();
  }





}
