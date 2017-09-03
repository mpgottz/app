import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServiceProvider {

	constructor(
	    private http: Http
	) {}

	//https://jsonplaceholder.typicode.com/comments?postId=1
	//https://randomuser.me/api/
	//https://jsonplaceholder.typicode.com/posts

	getData() {
	  return this.http.get('https://randomuser.me/api/?results=5')
	  .map(res => res.json())
	  .toPromise()
	  .catch(error =>{
	      console.error(error);
	    })
	}
}