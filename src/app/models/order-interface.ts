export interface OrderInterface{
	id?:string;	
	car?:Array<string>;
	currency?:string;
	direccion?:string;	 
	email?:string;
	metodo?:string;
	pago?:string;
	personaContacto?:string;
	status?:string;
	telefono?:string;
	total?:number;
}