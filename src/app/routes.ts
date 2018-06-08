import { HomeAboutComponent } from './cliente/home-about/home-about.component';
import { AdminComponent } from './admin/admin.component';
import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';



export const appRoutesCore: Routes = [
    { path: 'admin', component: AdminComponent },
    {
        path: '',
        component: ClienteComponent,
        children: [
            {
              path: '',
              component: HomeAboutComponent,
            }
      },
]
