
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './route-components/categories/categories.component';
import { GameComponent } from './route-components/game/game.component';

const routes: Routes = [
  // { path: 'categories', component: CategoriesComponent },
  { path: 'round1', component: GameComponent },
  { path: 'round2', component: GameComponent },
  { path: 'round3', component: GameComponent },
  { path: 'finalRound', component: GameComponent },
  { path: '', redirectTo: 'round1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
