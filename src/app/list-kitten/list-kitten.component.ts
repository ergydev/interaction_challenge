import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../kitten.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css'
})
export class ListKittenComponent {
  @Input()
  kittens?: Kitten[];

  @Output()
  kittenAdopted = new EventEmitter<Kitten>();

  onClick(kitten: Kitten): void {
    this.kittenAdopted.emit(kitten);
  }
}
