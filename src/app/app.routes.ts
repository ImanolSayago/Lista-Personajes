import { Routes } from '@angular/router';
import { CharacterListComponent } from './characters/components/character-list/character-list.component';
import { CharacterFormComponent } from './characters/components/character-form/character-form.component';
import { CharacterCardComponent } from './characters/components/character-card/character-card.component';
import { CharacterDetailComponent } from './characters/components/character-detail/character-detail.component';

export const routes: Routes = [
    {path:'characters', component:CharacterListComponent},
    {path:'add-character', component:CharacterFormComponent},
    {path:'character/:id', component:CharacterDetailComponent},
    {path:'**', redirectTo:'characters'}
];
