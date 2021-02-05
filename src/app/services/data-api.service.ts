import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { PostInterface } from '../models/post-interface';
import { TixInterface } from '../models/tix-interface';
import { BookInterface } from '../models/book-interface';
import { CardInterface } from '../models/card-interface';
import { InfoInterface } from '../models/info-interface';
import { ContactInterface } from '../models/contact-interface';
import { ValidationInterface } from '../models/validation-interface';
import { UserWService } from "./user-w.service";
import { OrderInterface } from '../models/order-interface';
import { CategoryInterface } from '../models/category-interface';
	

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	categories: Observable<any>;
	category:Observable<any>;
	tixs: Observable<any>;
	posts: Observable<any>;
	tix: Observable<any>;
	post: Observable<any>;
	cards: Observable<any>;
	card: Observable<any>;
	contact: Observable<any>;
	info: Observable<any>;
	books: Observable<any>;
	book: Observable<any>;
	validations: Observable<any>;
	validation: Observable<any>;
	orders: Observable<any>;
	order: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}
    public selectedTix:TixInterface;
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		Authorization: this.authService.getToken()
  		});
  	getOrderPending(){	
		const url_api='https://db.buckapi.com:3027/api/orders?filter[where][status]=new';
		return (this.orders = this.http.get(url_api));
	}
	getOrders(){	
		const url_api = 'https://db.buckapi.com:3027/api/orders';
		return this.http.get(url_api);
	}
	getAllCategories(){
		const url_api = 'https://db.buckapi.com:3027/api/categories?filter[where][status]=activated';
		return this.http.get(url_api);
	}
  	getBookPending(){	
		const url_api='https://db.buckapi.com:3027/api/book?filter[where][status]=pending';
		return (this.books = this.http.get(url_api));
	}
	getBookConf(){	
		const url_api='https://db.buckapi.com:3027/api/book?filter[where][status]=Confirmada';
		return (this.books = this.http.get(url_api));
	}
	getValidationPending(){
		const url_api='https://db.buckapi.com:3027/api/validations?filter[where][status]=pending';
		return (this.books = this.http.get(url_api));
	}
	getAllTixs(){
		const url_api = 'https://db.buckapi.com:3027/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}
	getAllPosts(){
		const url_api = 'https://db.buckapi.com:3027/api/posts?filter[where][status]=activated';
		return this.http.get(url_api);
	}
	getAllTixsNew(){
		const url_api = 'https://db.buckapi.com:3027/api/tixes?filter[where][and][0][status]=activated&filter[where][and][1][colection]=new';
		return this.http.get(url_api);
	}
	getAllTixsReturn(){
		const url_api = 'https://db.buckapi.com:3027/api/tixes?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));
	}
	getTixsFilter(cat:string){
		let cate = cat;
		const url_api = "https://db.buckapi.com:3027/api/tixes?filter[where][category]="+cate;
		return (this.tixs = this.http.get(url_api));
	}
	getTixById(id:string){
		let indice = id;
		const url_api=`https://db.buckapi.com:3027/api/tixes/${indice}`;
		this.tix = this.http.get(url_api);
		return (this.tix);
	}
	getCardById(id:string){
		let indice = id;
		const url_api=`https://db.buckapi.com:3027/api/card/${indice}`;
		this.card = this.http.get(url_api);
		return (this.card);
	}
	getBookById(id:string){
		let indice = id;
		const url_api=`https://db.buckapi.com:3027/api/book/${indice}`;
		this.book = this.http.get(url_api);
		return (this.book);
	}
	getInfo(){
		const url_api=`https://db.buckapi.com:3027/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}
	getPending(){
		const url_api='https://db.buckapi.com:3027/api/tixes?filter[where][status]=pending';
		return (this.tixs = this.http.get(url_api));
	}
	getUsersPending(){
		const url_api='https://db.buckapi.com:3027/api/card?filter[where][status]=pending';
		return (this.cards = this.http.get(url_api));
	}
	getActivePartners(){
		const url_api='https://db.buckapi.com:3027/api/card?filter[where][and][0][status]=active&filter[where][and][1][type]=partnerType';
		return (this.cards = this.http.get(url_api));
	}
	getPendingPartners(){
		const url_api='https://db.buckapi.com:3027/api/card?filter[where][and][0][status]=pending&filter[where][and][1][type]=partnerType';
		return (this.cards = this.http.get(url_api));
	}
	getActiveAffiliates(){
		const url_api='https://db.buckapi.com:3027/api/card?filter[where][and][0][status]=active&filter[where][and][1][type]=affiliateType';
		return (this.cards = this.http.get(url_api));
	}
	getPendingAffiliates(){
		const url_api='https://db.buckapi.com:3027/api/card?filter[where][and][0][status]=pending&filter[where][and][1][type]=affiliateType';
		return (this.cards = this.http.get(url_api));
	}
	saveTixFree(tix :TixInterface){
		const url_api='https://db.buckapi.com:3027/api/tixes';
		return this.http
		.post<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}
	savePostFree(post :PostInterface){
		const url_api='https://db.buckapi.com:3027/api/posts';
		return this.http
		.post<PostInterface>(url_api, post)
		.pipe(map(data => data));
	}
	saveTix(tix :TixInterface){
		let token = this.authService.getToken();
		const url_api='https://db.buckapi.com:3027/api/tixes?access_token${token}';
		return this.http
		.post<TixInterface>(url_api, tix,{headers: this.headers})
		.pipe(map(data => data));
	}
	updateTix(tix :TixInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3027/api/tixes/${id}`;
		return this.http
		.put<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}
	updateBook(book :BookInterface, id: string){
		let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3027/api/book/${id}/?access_token$={token}`;
		return this.http
		.put<BookInterface>(url_api, book,{headers: this.headers})
		.pipe(map(data => data));
	}
	updateValidation(validation :ValidationInterface, id: string){
		let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3027/api/validations/${id}/?access_token$={token}`;
		return this.http
		.put<ValidationInterface>(url_api, validation,{headers: this.headers})
		.pipe(map(data => data));
	}
	deleteTix(id: string){
		const token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3027/api/tixes/${id}/?access_token$={token}`;
		return this.http
		.delete<TixInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	getCards(id:string){
		let indice = id;
		const url_api = "https://db.buckapi.com:3027/api/card?filter[where][userd]=a"+indice;
		return this.http.get(url_api);
	}
	saveCard(card: CardInterface){
		const url_api='https://db.buckapi.com:3027/api/card';
		return this.http
		.post<CardInterface>(url_api, card)
		.pipe(map(data => data));
	}
	saveBook(book: BookInterface){
		const url_api='https://db.buckapi.com:3027/api/book';
		return this.http
		.post<BookInterface>(url_api, book)
		.pipe(map(data => data));
	}
	saveValidation(validation: ValidationInterface){
		const url_api='https://db.buckapi.com:3027/api/validations';
		return this.http
		.post<ValidationInterface>(url_api, validation)
		.pipe(map(data => data));
	}
	senMailNewBookAppToUser(book){
		const url_api='https://db.andesproadventures.com:3005/newBookAppToUser';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}

}