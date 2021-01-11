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
	{path:'',component:HomeComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'slider',component:SliderComponent},
	// {path:'products',component:ProductsComponent , canActivate:[AuthGuard]},
	{path:'products',component:ProductsComponent },
	{path:'footer',component:FooterComponent},
	{path:'blog',component:BlogComponent},
	{path:'home',component:HomeComponent},
	{path:'orders',component:OrdersComponent},
	{path:'account',component:AccountComponent},
	{path:'login',component:LoginComponent},

	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

