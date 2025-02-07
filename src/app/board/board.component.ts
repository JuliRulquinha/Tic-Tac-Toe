import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { SquareComponent } from "../square/square.component";
//import { NgForOf, NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'ttt-board',
  imports: [SquareComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoardComponent implements OnInit{

  squares!: string[];
  xIsNext: boolean = false;
  winner!: string;
  isActive: boolean = true;
  isDraw: boolean = false;
 

  constructor(){

  }

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = !this.xIsNext;
    this.isActive = true;
    this.isDraw = false;

  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove( idx: number){
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();

    if(this.winner !== ''){
      this.isActive = false;
      this.xIsNext = !this.xIsNext;
    }else if(this.squares.every((s)=> s !== null)){
      this.isDraw = true;
    }


  }

  calculateWinner(){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(
        this.squares[a]&&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return this.winner;
  }
  
}


