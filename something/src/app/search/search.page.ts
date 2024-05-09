import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage]
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  inputFocus() {

    const searchPokemon:any = document.getElementById('searchPokemon')
    const inputSearch:any = document.getElementById('inputSearch')

    searchPokemon.src = "/assets/icon/pokemonRed.png"

    inputSearch.classList.add('placeholder')

  }

  inputFocusOut() {

    const searchPokemon:any = document.getElementById('searchPokemon')
    const inputSearch:any = document.getElementById('inputSearch')

    searchPokemon.src = "/assets/icon/pokemon.png"
    inputSearch.classList.remove('placeholder')
  }

}
