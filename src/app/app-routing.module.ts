import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";


const routes: Routes =[
{path: 'firstone', component: ListComponent},
{ path: '', component: LandingPageComponent }

];


@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
}

)
export class AppRoutingModule{}
