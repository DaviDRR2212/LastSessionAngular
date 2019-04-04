import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  
  photos:any[];
/*   subscripcion:Subscription;
 */  photos$:Observable<any[]>;

  constructor(private photosSrv:PhotosService){
    this.photos$ = this.photosSrv.obtenerphotos();
  }

  ngOnInit(){
    /* this.subscripcion = this.photosSrv.photosModificaciones.subscribe(data =>
    {
        this.photos$ = data;
    });  */     
  }

  ngOnDestroy() {
    //this.subscripcion.unsubscribe();
    console.log('Se esta destuyendo el componente Lista-Usuarios');
/*     this.subscripcion.unsubscribe();
 */  }
}
