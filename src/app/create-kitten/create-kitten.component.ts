import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Kitten } from '../kitten.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})
export class CreateKittenComponent {
  newKitten: Kitten = {
    name: '',
    breed: '',
    birthdate: new Date(),
    picture: ''
  }



  kittens: Kitten[] = [];

  @Output() kittendAdded = new EventEmitter<Kitten>();


  onSubmit(form: NgForm): void {
    let newKitten: Kitten = {
      name: form.value.name,
      breed: form.value.breed,
      birthdate: form.value.birthdate,
      picture: form.value.picture
    }
    this.kittendAdded.emit(newKitten);
    form.reset();
  }
}
