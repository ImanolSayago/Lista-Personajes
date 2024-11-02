import { Component, inject, OnInit } from '@angular/core';
import { Character } from '../../../interface/character';
import { JsonPipe } from '@angular/common';
import { CharacterService } from '../../../character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit{
  character!:Character;
  serviciopj= inject(CharacterService);
  rutas= inject(ActivatedRoute);

  ngOnInit(): void {
    this.rutas.paramMap.pipe(
      switchMap(params => {
        return this.serviciopj.getCharacterById(params.get('id')?? '')
      })
    ).subscribe(character => {
      this.character = character;
    })
  }


}
