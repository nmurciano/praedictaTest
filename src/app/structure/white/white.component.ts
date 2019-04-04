import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.scss']
})
export class WhiteComponent implements OnInit {

  options: userModel[] = [
    { id: 1, name: 'Mary' },
    { id: 2, name: 'Shelley' },
    { id: 3, name: 'Igor' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addName(value) {
    this.options.push(value);

  }

}
