import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    path:"",
    component:HomeComponent

  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"details/:id",
    component:DetailsComponent,
  },
  {
    path:"delete/:id",
    component:DeleteComponent
  },
  {
    path:"create",
    component:CreateComponent
  }];
