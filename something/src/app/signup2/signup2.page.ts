import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';
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

    this.http.get('http://localhost:3000/users').subscribe(responseSignUp => {

      
    this.dataSignup = responseSignUp

    console.log(this.dataSignup)

  })


  }


  signUp2() {

    const email2:any = document.getElementById('email2')
    const userName:any = document.getElementById('userName')
    const password2: any = document.getElementById('password2')
    const okAlert:any = document.getElementById('okAlert')
    const errorAlert:any = document.getElementById('errorAlert')
    const signUp2:any = document.getElementById('signUp2')
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regText = /^[a-zA-Z]+$/

    const body = {

        "userName": userName.value.toLowerCase(),
        "userEmail": email2.value.toLowerCase(),
        "userPassword": password2.value
      
     

    }

    for(let z = 0; z <= this.dataSignup.length; z++) {

    
    if(reg.test((email2.value)) == true && regText.test(userName.value) == true && email2.value != this.dataSignup[z].userEmail && email2.value != "" && password2.value != "") {

      okAlert.style.display = "block"

    


    this.http.post('http://localhost:3000/users', body).subscribe(responseSignUp2 => {
      
      console.log("Data Updated", responseSignUp2)

    });

    setTimeout(() => {

      window.location.reload()
    }, 2000);

  } else {

    errorAlert.style.display = "block"

    setTimeout(() => {

      window.location.reload()

    }, 2000);

  }

}

  }

}
