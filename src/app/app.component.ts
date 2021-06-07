import { Component, OnInit } from '@angular/core';
// import { Card } from 'src/models/types';
import ICard from "src/models/types";
// import Display from "src/models/types";
import cards from './cards-mock.json';


enum Display {
  all = 0,
  selected = 1,
  notSelected = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cards';
  search = '';
  cardsList: ICard[] = [];
  cardsToShow: ICard[] = [];
  eDisplay: any;
  show: number = 0;
  countAllCard: number = 0;
  countCardSelected: number = 0;
  countCardNotSelected: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.cardsList = cards;
    this.cardsToShow = this.cardsList;
    this.eDisplay = Display;
    this.countAllCard=this.cardsList.length;
    this.countCardSelected = this.cardsList.filter(x => x.isSelected).length;
    this.countCardNotSelected = this.cardsList.filter(x => !x.isSelected).length;

  }
  Display($event: any): void {
    this.show = $event.index;
    this.Display2();
    // switch ($event.index) {
    //   case (this.eDisplay.all):
    //     this.cardsToShow = this.cardsList;
    //     break;
    //   case (this.eDisplay.selected):
    //     this.cardsToShow = this.cardsList.filter(x => x.isSelected);
    //     break;
    //   case (this.eDisplay.notSelected):
    //     this.cardsToShow = this.cardsList.filter(x => !x.isSelected);
    //     break;
    // }

  }
  Display2(): void {
    switch (this.show) {
      case (this.eDisplay.all):
        this.cardsToShow = this.cardsList;
        break;
      case (this.eDisplay.selected):
        this.cardsToShow = this.cardsList.filter(x => x.isSelected);
        break;
      case (this.eDisplay.notSelected):
        this.cardsToShow = this.cardsList.filter(x => !x.isSelected);

        break;
    }
    this.countCardSelected = this.cardsList.filter(x => x.isSelected).length;
    this.countCardNotSelected = this.cardsList.filter(x => !x.isSelected).length;


  }

}