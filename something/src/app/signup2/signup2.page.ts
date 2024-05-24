import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage]
})
export class Signup2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUp() {

    
  }

}
