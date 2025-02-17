import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  a: number = 0;
  b: number = 0;
  result: number = 0;

  updateResult(value: number) {
    this.result = value;
  }
}
