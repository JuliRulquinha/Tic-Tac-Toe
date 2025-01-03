import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ttt-square',
  imports: [NgForOf],
  template: `<button>{{ value }}</button>`,
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() value!: string; 

  

  constructor(){
    
  }
  
}
