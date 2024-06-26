import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  ngOnInit(): void {

    const login:any = document.getElementById('login')
    const logout:any = document.getElementById('logout')
    const loginLabel:any = document.getElementById('loginLabel')
    const pokemon:any = document.getElementById('pokemon')
    const pokemonLabel:any = document.getElementById('pokemonLabel')
    const searchLabel:any = document.getElementById('searchLabel')
    const search:any = document.getElementById('search')
    const search2:any = document.getElementById('search2')
    const list1:any = document.getElementById('list1')
    
    if(localStorage.getItem('userName')) {

        login.style.display = "none"
        search.style.display = "block"
        search2.style.display = "none"

    } else {

      pokemon.style.display = "none"
      search2.style.display = "block"
      search.style.display = "none"

    }
    

    if(window.location.href == "/tabs/pokemon") {

    pokemonLabel.style.color = "red"
    searchLabel.style.color = "black"

  }

  if(window.location.href == "/tabs/tab1") {


  loginLabel.style.color = "red"

}

if(window.location.href == "search") {


searchLabel.style.color = "red"
pokemonLabel.style.color = "black"

}

if(window.location.href == "list1") {


searchLabel.style.color = "black"
pokemonLabel.style.color = "black"
list1.style.color = "red"
}


if(!localStorage.getItem('userName')) {

    logout.style.display = "none"
    search2.style.display = "block"
    list1.style.display = "none"
}

if(localStorage.getItem('userName')) {

  list1.style.display = "block"

}
  
  }

  signUp() {
    const loginLabel:any = document.getElementById('loginLabel')
    const signUpLabel:any = document.getElementById('signUpLabel')

    signUpLabel.style.color = "red"
    loginLabel.style.color = "black"
  
  }
  

  pokemon() {
    const login:any = document.getElementById('login')
    const pokemon:any = document.getElementById('pokemonLabel')
    const searchLabel:any = document.getElementById('searchLabel')
    const list1:any = document.getElementById('list1')

    list1.style.color = "black"
    

    pokemon.style.color = "red"
    searchLabel.style.color = "black"

    

  }



  loginEvent() {
    const loginLabel:any = document.getElementById('loginLabel')
    const searchLabel:any = document.getElementById('searchLabel')
    const list1:any = document.getElementById('list1')
    const signUpLabel:any = document.getElementById('signUpLabel')

    signUpLabel.style.color = "black"
    list1.style.color = "black"
    searchLabel.style.color = "black"
    loginLabel.style.color = "red"





  }



search() {
    const loginLabel:any = document.getElementById('loginLabel')
    const pokemonLabel:any = document.getElementById('pokemonLabel')
    const searchLabel:any = document.getElementById('searchLabel')
    const search:any = document.getElementById('search')
    const list1:any = document.getElementById('list1')

    list1.style.color = "black"
    searchLabel.style.color = "red"
    pokemonLabel.style.color = "black"
    loginLabel.style.color = "black"
    
  


  }

  list1() {
    const loginLabel:any = document.getElementById('loginLabel')
    const pokemonLabel:any = document.getElementById('pokemonLabel')
    const searchLabel:any = document.getElementById('searchLabel')
    const search:any = document.getElementById('search')
    const list1:any = document.getElementById('list1')

    searchLabel.style.color = "black"
    pokemonLabel.style.color = "black"
    loginLabel.style.color = "black"
    list1.style.color = "red"

  }





  logout() {

    localStorage.clear()
    window.location.href = "/tabs/tab1"

  }

  logoutMouseOver() {

    const logoutLabel:any = document.getElementById('logoutLabel')

    logoutLabel.style.color = "red"

  }

  logoutMouseOut() {

    const logoutLabel:any = document.getElementById('logoutLabel')

    logoutLabel.style.color = "black"

  }

}
