import { Component, inject, OnInit } from '@angular/core';
import { Character } from '../../../interface/character';
import { CharacterService } from '../../../character.service';
import { Router } from '@angular/router';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit{

  ngOnInit(): void {
    this.charService.getCharacters().subscribe(
      {
        next:(characterslist)=>
        {
          this.listaCharacters=characterslist
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }
  rutas = inject(Router);
  charService = inject(CharacterService);
  listaCharacters: Character[]= []

  deletePersonaje(id:number)
  {
    this.charService.deleteCharacter(id).subscribe(
      {
        next:()=>
        {
          console.log("Personaje borrado");
          this.refrescarlista();
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      })
  }

  refrescarlista()
  {
    this.charService.getCharacters().subscribe(
      {
        next:(characters)=>
        {
          this.listaCharacters=characters;
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }

  irForm()
  {
    this.rutas.navigate(['add-character']);
  }

  navegar(id:number)
  {
    this.rutas.navigate([`character/${id}`]);
  }

}
