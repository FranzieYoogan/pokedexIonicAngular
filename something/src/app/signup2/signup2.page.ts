import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage, HttpClientModule]
})
export class Signup2Page implements OnInit {

  constructor() { }

  private http = inject(HttpClient)
  dataSignup:any
  dataSignup2:any

  ngOnInit() {
    const email:any = document.getElementById('email2')
    const password: any = document.getElementById('password2')
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


  signUp2() {

    const email2:any = document.getElementById('email2')
    const password2: any = document.getElementById('password2')
    const okAlert:any = document.getElementById('okAlert')
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
    createUserWithEmailAndPassword(auth, email2.value, password2.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        alert.src = "/assets/alerts/ok.gif"
        alert.style.visibility = "visible"
        alert.style.transition = "2s"

        setTimeout(() => {

             alert.style.left = "35em"
         
        }, 300);

        setTimeout(() => {
    
          window.location.href = "tabs/tab1"
        }, 2000);


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        alert.src = "/assets/alerts/error.gif"
        alert.style.visibility = "visible"
        alert.style.transition = "2s"

        setTimeout(() => {

           alert.style.left = "35em"
         
        }, 300);

        setTimeout(() => {
    
          window.location.reload()
    
        }, 2000);

      });

    
   

    

  } 
}

  


