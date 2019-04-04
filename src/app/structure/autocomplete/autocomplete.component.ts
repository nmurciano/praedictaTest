import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { userModel } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() options: userModel[];
  @Output() addName = new EventEmitter<userModel>();

  InputForm = new FormControl();
  filteredOptions: Observable<userModel[]>;
  showAddButton: boolean = false;

  constructor() { }

  ngOnInit() {

    this.filteredOptions = this.InputForm.valueChanges
      .pipe(
        startWith<string | userModel>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

  }

  displayFn(user?: userModel): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(entrie: string | number): userModel[] {
    const filterValue = typeof entrie === 'string' ? entrie.toLowerCase() : "";
    let filteredArray = this.options.filter(option => option.id == entrie || option.name.toLowerCase().indexOf(filterValue) === 0);

    this.showAddButton = filteredArray.length === 0;

    return filteredArray;
  }

  addValue() {




    if (!this.options.some(entry => entry === this.InputForm.value)) {

      let newId = this.options[this.options.length - 1].id + 1;
      let newValue: userModel = { id: newId, name: this.InputForm.value };
      //const index = this.options.push(newValue) - 1;
      //this.InputForm.setValue(this.options[index]);

      this.addName.emit(newValue);
      this.showAddButton = false;
    }
  }
}
