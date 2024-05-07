import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderPage } from '../header/header.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderPage, HttpClientModule],
})
export class Tab1Page {
  constructor() {}

  private http = inject(HttpClient)

    data: any
  login() {

    const email:any = document.getElementById('email')
    const password:any = document.getElementById('password')
    const alert:any = document.getElementById('alert')

   

      this.http.get('http://localhost:3000/users').subscribe(response => {

      console.log(response)
      this.data = response

    });
      
    
    if(this.data) {

      for(var z = 0; z<=this.data.length; z++  ) {

        if(email.value == this.data[z].userEmail && password.value == this.data[z].userPassword) {
  
          alert.innerHTML = "LOGGED"
          localStorage.setItem("userName", this.data[z].userName);
          window.location.href = "http://localhost:8100/tabs/pokemon"
  
        } 
        
        if(email.value != this.data[z].userEmail && password.value != this.data[z].userPassword){
  
          alert.innerHTML = "FAILED"
  
        }
  
      }


    }

  

  }



}
