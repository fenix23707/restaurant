import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu__list");

    // @ts-ignore
    hamburger.addEventListener("click", () => {
    // @ts-ignore
      hamburger.classList.toggle("active");
    // @ts-ignore
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".menu__list-link").forEach((n) =>
      n.addEventListener("click", () => {
        // @ts-ignore
        hamburger.classList.remove("active");
        // @ts-ignore
        navMenu.classList.remove("active");
      })
    );

  }

}
