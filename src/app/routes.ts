import { PostagensComponent } from './cliente/postagens/postagens.component';
import { PortifolioComponent } from './cliente/portifolio/portifolio.component';
import { HomeAboutComponent } from './cliente/home-about/home-about.component';
import { AdminComponent } from './admin/admin.component';
import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PageContatoComponent } from './cliente/page-contato/page-contato.component';



export const appRoutesCore: Routes = [
    {
        path: 'admin',    component: AdminComponent,
        children: [
        ]
    },
    {
        path: '',    component: ClienteComponent,
        children: [
            { path: '', component: HomeAboutComponent},
            { path: 'portfolio', component: PortifolioComponent},
            { path: 'postagens', component: PostagensComponent},
            { path: 'contatos', component: PageContatoComponent},
            { path: '**', component: HomeAboutComponent }
        ]
    }
]

