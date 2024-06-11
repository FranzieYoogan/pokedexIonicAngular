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

  userName:any
  ngOnInit() {

    const anchor:any = document.getElementById('anchor')


    if(localStorage.getItem('userName')) {

      this.userName = localStorage.getItem('userName')


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

  userImg() {
    
    const userImg:any = document.getElementById('userImg')

    userImg.style.transform = "rotate(15deg) scale(1.3)"
   

  }

  userImgOut() {

    const userImg:any = document.getElementById('userImg')

    userImg.style.transform = "rotate(0deg) "


  }

}
