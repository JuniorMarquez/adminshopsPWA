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
	LoginComponent,
	ViewProductComponent,
	NewProductComponent,
	NewpostComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:AccountComponent},
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
	{path:'viewproduct', component:ViewProductComponent},
	{path:'newproduct', component:NewProductComponent},
	{path:'newpost', component:NewpostComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

