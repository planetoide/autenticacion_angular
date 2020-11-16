import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [ 
	{ path: '', component: LoginComponent },
	{ path: 'users', component: UsuariosComponent, canActivate: [AuthGuardService] },
  { path: 'customer', component: ClientesComponent, canActivate: [AuthGuardService] }

];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
