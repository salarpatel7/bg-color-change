import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bg-color-change';

 
  colors:string[]=['red','green','blue']
  defaultColor:string='initial';
  currentColorIndex:number=0;
  bgColor:string=this.defaultColor;

  changeColor(){
    if(this.currentColorIndex>=this.colors.length){
      this.bgColor=this.defaultColor;
      this.currentColorIndex=0
    }else {
      this.bgColor=this.colors[this.currentColorIndex]
      this.currentColorIndex++
    }
  }
}
