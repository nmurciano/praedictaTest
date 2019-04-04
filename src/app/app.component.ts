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
    if (this.selectedDir == 'rtl') {
      this.selectedDir = "ltr";
      this.directionChoice = "rtl";
    }
    else {
      this.selectedDir = "rtl";
      this.directionChoice = "ltr";
    }
    //return (this.selectedDir=='rtl' ? this.selectedDir="ltr" : this.selectedDir="rtl");
  }
}
