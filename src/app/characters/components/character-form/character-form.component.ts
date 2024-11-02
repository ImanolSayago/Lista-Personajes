import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../../interface/character';
import { CharacterService } from '../../../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {

  //creo el personaje vacio para cargarle datos//
  character : Character= { 
  name:"",
  alias:"",
  description:""
  }

  charService= inject(CharacterService);
  rutas= inject(Router);
  agregarCharacter()
  {
    this.charService.postCharacter(this.character).subscribe(
      {
        next:()=>
        {
          console.log("Agregado con exito");
          this.rutas.navigate(['characters']);
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }
 
}
