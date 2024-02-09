import { Component, ElementRef, OnInit,ViewChild,afterNextRender } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng_17_ex';
  x:any=1
  users:any=[{id:1,name:'bala'},{id:2,name:'siva'}]
  
  // @ViewChild('content') contentRef!:ElementRef ;

constructor(){
  afterNextRender(():any=> {
    console.log(document.getElementById("myElement")?.innerHTML);
  
    window.localStorage.setItem('key', 'value');
    console.log(navigator.userAgent);
    console.log(location.href);
  
    setTimeout(() => {
      console.log("Inside setTimeout, after 2000 milliseconds");
    }, 6000);
  });
}
  

    }
