import { Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { ContatoComponent } from './components/contato/contato.component';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {path:'', component: VitrineComponent},
    {path:'produtos', component: VitrineComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'redessociais', component: RedesSociaisComponent}
];
