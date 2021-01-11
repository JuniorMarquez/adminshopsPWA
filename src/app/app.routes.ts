import {RouterModule,Routes} from '@angular/router';
import {
	TopbarComponent,
	SliderComponent,
	ProductsComponent,
	FooterComponent,
	BlogComponent,
	HomeComponent,
	OrdersComponent,
	AccountComponent,
	LoginComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:LoginComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'slider',component:SliderComponent},
	{path:'products',component:ProductsComponent , canActivate:[AuthGuard]},
	{path:'footer',component:FooterComponent},
	{path:'blog',component:BlogComponent, canActivate:[AuthGuard]},
	{path:'home',component:HomeComponent, canActivate:[AuthGuard]},
	{path:'orders',component:OrdersComponent, canActivate:[AuthGuard]},
	{path:'account',component:AccountComponent, canActivate:[AuthGuard]},
	{path:'login',component:LoginComponent},

	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

