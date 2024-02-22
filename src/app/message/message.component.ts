import { Component } from '@angular/core';
// message.component.ts
@Component({
  selector: 'app-message',
  template: 
  `<div [hidden]="displayMessage">
    <p>This website uses cookies to provide better user experience.</p>
    <div class="close"><span class="btn" (click)="closeMessage()">❌</span></div>
  </div>`,
  styles: [
    `div {
      margin: 10px 0 10px 0;
      padding: 10px 20px;
      background-color: skyblue;
      text-align: center;
    }`, `p{
      font-size: 20px;
    }`,
    `.close{
      background: none;
      float: right;
      margin-top: -35px;
    }`
  ]
})
export class MessageComponent {
  displayMessage: boolean = false;
  closeMessage(){
    this.displayMessage = true
  }
}





