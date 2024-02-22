import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
// search.component.ts
export class SearchComponent {
  searchValue: string = '';

  // changeSearchValue(eventData: any){
  //   console.log(eventData)
  // }

  changeSearchValue(eventData: Event) {
    // console.log((<any>eventData.target).value)
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value
  }
}
