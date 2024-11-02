import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterFormComponent } from "./characters/components/character-form/character-form.component";
import { CharacterListComponent } from "./characters/components/character-list/character-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterFormComponent, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp2_realizado';
}
