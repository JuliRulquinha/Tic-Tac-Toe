import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  standalone: true,
  selector: 'ttt-square',
  imports: [CommonModule],
  template: `<button>{{ value }}</button>`,
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() value!: string; 

  

  constructor(){
    
  }
  
}
