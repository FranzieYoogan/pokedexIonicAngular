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
    
    if(localStorage.getItem('userName')) {

        login.style.display = "none"


    } else {

      pokemon.style.display = "none"

    }


  }

  logout() {

    localStorage.clear()
    window.location.href = "http://localhost:8100/tabs/tab1"

  }

}
