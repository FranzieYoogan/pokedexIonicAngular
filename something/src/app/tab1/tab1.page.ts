import { Component, OnInit, inject } from '@angular/core';
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
export class Tab1Page implements OnInit {
  constructor() {}

  private http = inject(HttpClient)

    data: any


  ngOnInit(): void {
    
    const email:any = document.getElementById('email')
    const password: any = document.getElementById('password')
    const running:any = document.getElementById('running')
    const running2:any = document.getElementById('running2')
   


    email.addEventListener('input', (event: { target: any; }) => {

      if(event.target.value != "") {
        
          running.style.transform = "scaleX(-1)"

          setTimeout(() => {

            running.style.visibility = "visible"
            running.style.transition = "1s"
            running.style.left = "80%"
            
          }, 300);
        
          
        
      } else {
        running.style.transform = "scaleX(1)"
        setTimeout(() => {
          running.style.transition = "1s"
          running.style.left = "3%"
        }, 500);
  
        setTimeout(() => {
          running.style.visibility = "hidden"
        }, 700);
       

      }


    })

    password.addEventListener('input', (event2: { target: any; }) => {

      if(event2.target.value != "") {
        running2.style.transform = "scaleX(-1)"

        setTimeout(() => {
          running2.style.visibility = "visible"
          running2.style.transition = "1s"
          running2.style.left = "80%"
        }, 300);
     
        
      } else {

        running2.style.transform = "scaleX(1)"
        setTimeout(() => {
          running2.style.transition = "1s"
          running2.style.left = "3%"
        }, 500);
  
        setTimeout(() => {
          running2.style.visibility = "hidden"
        }, 700);

      }


    })


  }




  getData:any

  login() {

    const email:any = document.getElementById('email')
    const password:any = document.getElementById('password')
    const alert:any = document.getElementById('alert')
    
   

      this.http.get(' https://api.jsonsilo.com/public/8e464e5c-8481-4695-af0f-ae795993f0c5').subscribe(response => {

      this.data = response
      this.getData = this.data['users']

      console.log(this.getData)


      for(var z = 0; z<=this.getData.length; z++  ) {

        if(email.value == this.getData[z].userEmail && password.value == this.getData[z].userPassword) {
  
          alert.src = "/assets/alerts/ok.gif"
          alert.style.visibility = "visible"
          alert.style.transition = "2s"
          localStorage.setItem("userName", this.getData[z].userName);

          setTimeout(() => {

            alert.style.left = "3.5em"
           
          }, 300);

          setTimeout(() => {
      
            window.location.href = "/tabs/pokemon"
          }, 3000);
    
  
        } 
        
        if(email.value != this.getData[z].userEmail && password.value != this.getData[z].userPassword){
  
          alert.src = "/assets/alerts/error.gif"
          alert.style.visibility = "visible"
          alert.style.transition = "2s"

          setTimeout(() => {

            alert.style.left = "3.5em"
           
          }, 300);

          setTimeout(() => {
      
            window.location.href = "/tabs/tab1"
          }, 3000);
  
        }
  
      


    }

    });
      
    
   

   

  

  }



}
