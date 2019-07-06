import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './app-client.component.html',
  styleUrls: ['./app-client.component.css']
})
export class AppClientComponent implements OnInit {

  userName='';

  constructor() { }

  ngOnInit() {
  }

  isUsernameEmpty(){
    if (this.userName.length > 0) {
      return true;
    }
    return false;
  }

  eraseUsername(){
    this.userName = '';
  }
}
