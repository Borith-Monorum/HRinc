import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDividerHarness} from '@angular/material/divider/testing';
import { ChangeDetectorRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-chip-jobfuntion',
  templateUrl: './chip-jobfuntion.component.html',
  styleUrls: ['./chip-jobfuntion.component.scss']
})
export class ChipJobfuntionComponent {
  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits:string[]=[];
  allFruits: string[] = ['Agriculture & Forestry', 'Call for Proposal/Bidding', 'Clearance', 'Operations Compliance', 'Vendor Management','Managerial Positions','Accounting / Finance','Administrative/Support','Architect/Financial Service',];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
