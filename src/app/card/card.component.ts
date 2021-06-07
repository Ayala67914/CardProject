import { Component, OnInit, Input } from '@angular/core';
import  ICard from '../../models/types';
import  MyCard from '../../models/types';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: ICard;

  constructor() {
    this.card = new MyCard();
  }
  ngOnInit() {
    //  this.cardsList = cards;
  }
  
}