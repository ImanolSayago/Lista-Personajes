import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './interface/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }
  http= inject(HttpClient);
  urlbase = 'http://localhost:3000/characters'

  getCharacters():Observable<Character[]>
  {
    return this.http.get<Character[]>(this.urlbase);
  }

  getCharacterById(id: string):Observable<Character>{
    return this.http.get<Character>(`${this.urlbase}/${id}`);
  }

  postCharacter(personaje: Character):Observable<Character>{
    return this.http.post<Character>(this.urlbase,personaje);
    
  }

  deleteCharacter(id: number):Observable<Character>
  {
    return this.http.delete<Character>(`${this.urlbase}/${id}`);
  }

}
