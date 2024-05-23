import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {

  constructor() { }

  ngOnInit() {

    const anchor:any = document.getElementById('anchor')

    if(localStorage.getItem('userName')) {

      anchor.href = "/tabs/pokemon"

    } else {

      anchor.href = "/tabs/tab1"

    }


  }

  eventMouse() {

    const navIcon:any = document.getElementById('navIcon')

    navIcon.style.transform = "rotate(15deg) scale(1.2)"

  }

  eventMouseOut() {

    const navIcon:any = document.getElementById('navIcon')

    navIcon.style.transform = "rotate(0deg)"

  }

}
