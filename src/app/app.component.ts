import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'praedictaTest';
  selectedDir: string = "ltr";
  directionChoice: string = "rtl";


  changeDir() {
    this.selectedDir = this.selectedDir == 'rtl' ? 'ltr' : 'rtl'

  }
}
