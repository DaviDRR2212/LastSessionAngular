import { Directive, ElementRef, Host, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  @Input()
  fontSize:number;

  color: any[] = ['blue','red','green','yellow', 'purple', 'cyan', 'orange'];
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
      
  }

  @HostListener('mouseover')
  mouseover(){
    //console.log('hola');
    /* let part = this.elementRef.nativeElement.querySelector('.appImage');
    this.renderer.setElementStyle(part, 'border-width', '10px'); */
    let ran = Math.floor(Math.random() * this.color.length);
    /* console.log(ran);
    console.log( this.color[ran]); */
    this.elementRef.nativeElement.style.color = this.color[ran];
    this.elementRef.nativeElement.style.fontSize = this.fontSize + 'em';
  }

  @HostListener('mouseout')
  mouseout(){
    console.log('hola');
    /* let part = this.elementRef.nativeElement.querySelector('.appImage');
    this.renderer.setElementStyle(part, 'border-width', '10px'); */
    this.elementRef.nativeElement.style.color = 'black';
    this.elementRef.nativeElement.style.fontSize = '1em';
  }

}
