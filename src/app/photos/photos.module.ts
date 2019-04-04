import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImageDirective } from './directives/image.directive';
@NgModule({
  declarations: [PhotosListComponent, ImageDirective],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    HttpClientModule,
    ScrollingModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [PhotosListComponent],
})
export class PhotosModule { 

}
