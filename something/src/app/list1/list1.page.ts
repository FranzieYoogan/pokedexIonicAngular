import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.page.html',
  styleUrls: ['./list1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage]
})
export class List1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
