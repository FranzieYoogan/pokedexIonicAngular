import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderPage } from '../header/header.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderPage, HttpClientModule],
})
export class Tab1Page implements OnInit {


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

    const firebaseConfig = {
      apiKey: "AIzaSyCzBC3TSggcCOqW423mkkcjl0ELi7crdJE",
      authDomain: "pokedex-39bba.firebaseapp.com",
      databaseURL: "https://pokedex-39bba-default-rtdb.firebaseio.com",
      projectId: "pokedex-39bba",
      storageBucket: "pokedex-39bba.appspot.com",
      messagingSenderId: "336480342902",
      appId: "1:336480342902:web:13526c8ad2c9b6c51ae057",
      measurementId: "G-PZ02CC0DH8"
    };

    const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    
   
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log('yow')

        
        alert.src = "/assets/alerts/ok.gif"
        alert.style.visibility = "visible"
        alert.style.transition = "2s"
        localStorage.setItem("userName", email.value);

        setTimeout(() => {

          alert.style.left = "3.5em"
         
        }, 300);

        setTimeout(() => {
      
          window.location.href = "/tabs/pokemon"
        }, 3000);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert.src = "/assets/alerts/error.gif"
        alert.style.visibility = "visible"
        alert.style.transition = "2s"

        setTimeout(() => {

          alert.style.left = "3.5em"
         
        }, 300);

        setTimeout(() => {
    
          window.location.href = "/tabs/tab1"
        }, 3000);

      });

         
      

  }



}