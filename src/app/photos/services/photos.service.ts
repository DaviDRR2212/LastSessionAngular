import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: any[] = [];
  photosModificaciones:Subject<Observable<any[]>> = new Subject<Observable<any[]>>();

  constructor(private httpSrv:HttpClient) {
    /* this.httpSrv.get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe(photos => {
        this.photos = photos;
        this.obtenerphotos();
      }); */
  }

  //api
  obtenerphotos() {
    //return of([...this.photos]);
    //this.photosModificaciones.next(of([...this.photos]));    
    return this.httpSrv.get<any[]>('https://jsonplaceholder.typicode.com/photos');
  }

  

  

}
