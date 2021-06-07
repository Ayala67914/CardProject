
export default interface ICard {
    id: number;
    name: string;
    isSelected: boolean;
}
export default class MyCard implements ICard {
    id: number = 0;
    name: string = "";
    isSelected: boolean = false;
    constructor() { }
}

// export enum Display {
//     all =0 ,
//     selected = 1,
//     notSelected = 2
// }

