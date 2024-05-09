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
    const pokemon:any = document.getElementById('pokemon')
    const pokemonLabel:any = document.getElementById('pokemonLabel')
    const search:any = document.getElementById('search')
    
    if(localStorage.getItem('userName')) {

        login.style.display = "none"
        search.src = "http://localhost:8100/tabs/search"

    } else {

      pokemon.style.display = "none"
      search.src = "http://localhost:8100/tabs/tab1"

    }

    if(window.location.href == "http://localhost:8100/tabs/pokemon") {

    pokemonLabel.style.color = "red"

  }


    

  }

  pokemon() {
    const login:any = document.getElementById('login')
    const pokemon:any = document.getElementById('pokemonLabel')
    const searchLabel:any = document.getElementById('searchLabel')

    

    pokemon.style.color = "red"
    searchLabel.style.color = "black"

    

  }


search() {
    const login:any = document.getElementById('login')
    const pokemonLabel:any = document.getElementById('pokemonLabel')
    const searchLabel:any = document.getElementById('searchLabel')



    searchLabel.style.color = "red"
    pokemonLabel.style.color = "black"

    

  }

  logout() {

    localStorage.clear()
    window.location.href = "http://localhost:8100/tabs/tab1"

  }

}
