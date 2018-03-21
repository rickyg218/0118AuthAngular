import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()
export class AlbumService {
  base_URL="http://localhost:3000/api/album"
  options= {withCredentials:true}
  constructor(private http:Http) { }
  
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  //Primera forma de enviar datos a nuestro Back-End
  addNewAlbum(album){
    return this.http.post(`${this.base_URL}/new`, album, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }
  getMyAlbum(){
    return this.http.get(`${this.base_URL}/`, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }


}
