import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { SecondComponent} from './vistas/second/second.component';


const routes: Routes = [
  {path:'', redirectTo:'principal' , pathMatch:'full'},
  {path:'principal', component: PrincipalComponent},
  {path:'second', component: SecondComponent}
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [PrincipalComponent,SecondComponent]
