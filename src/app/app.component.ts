import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { Kitten } from './kitten.model';
import { AdoptedKittenComponent } from './adopted-kitten/adopted-kitten.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateKittenComponent, ListKittenComponent, AdoptedKittenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Story Kitten';

  kittens: Kitten[] = [];

  onKittendAdded(newKitten: Kitten){
    this.kittens.push(newKitten)
  }

  adoptedKittens: Kitten[] = [];

  onKittenAdopted(adoptedKitten: Kitten){
    this.kittens = this.kittens.filter(kitten => kitten !== adoptedKitten);
    this.adoptedKittens.push(adoptedKitten);
  }
}
