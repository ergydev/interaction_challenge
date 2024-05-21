import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { NgFor} from '@angular/common';
import { Kitten } from '../kitten.model';

@Component({
  selector: 'app-adopted-kitten',
  standalone: true,
  imports: [NgFor],
  templateUrl: './adopted-kitten.component.html',
  styleUrl: './adopted-kitten.component.css'
})
export class AdoptedKittenComponent {
  @Input()
  kittens?: Kitten[];

  @Output()
  kittenAdopted = new EventEmitter<Kitten>();

  onClick(kitten: Kitten): void {
    this.kittenAdopted.emit(kitten);
  }
}
