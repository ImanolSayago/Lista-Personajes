import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../../interface/character';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

@Input({required:true}) character!: Character;
@Output() navegarEvent = new EventEmitter<number>();
@Output() eliminarEvent= new EventEmitter<number>();

navegarOn()
{
  this.navegarEvent.emit(this.character.id);
}

deleteOn()
{
  this.eliminarEvent.emit(this.character.id);
}
  
}
