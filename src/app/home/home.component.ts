import { Component, OnInit } from '@angular/core';
declare var AOS: any;
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        console.log("reveals[i] >>>", reveals[i])
        // var elementVisible = 150;
        var elementVisible = 10;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    function appear() {
      var reveals = document.querySelectorAll(".appear");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        console.log("reveals[i] >>>", reveals[i])
        // var elementVisible = 150;
        var elementVisible = 10;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", appear);
  }

  ngOnInit() {
    AOS.init({
      offset: 200, //default 120
      delay: 50, //default 0
      once: true //default false
    });

 
  }

}
