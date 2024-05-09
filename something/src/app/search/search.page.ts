import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage, HttpClientModule]
})
export class SearchPage implements OnInit {

  constructor() { }

  dataSearch:any
  pokemonSprite2:any

  private http = inject(HttpClient)

  ngOnInit() {
    const pokemons2:any = document.getElementById('pokemons2')
    const type2:any = document.getElementById('type2')
    const pokemonSprite2:any = document.getElementById('pokemonSprite2')
    const inputSearch:any = document.getElementById('inputSearch')
    const containerItems22:any = document.getElementById('containerItems22')
    const containerItems2:any = document.getElementById('containerItems2')
    const abilities:any = document.getElementById('abilities')


    inputSearch.addEventListener('input', (event: { target: { value: any; }; }) => {

      if(event.target.value == this.dataSearch['forms'][0]['name']) {

        containerItems2.style.display = "block"
        containerItems22.style.display = "block"
        pokemonSprite2.src = this.pokemonSprite2['sprites']['front_default']
        pokemons2.innerHTML = this.dataSearch['forms'][0]['name']
        type2.innerHTML =`Type: ${this.dataSearch['types'][0]['type']['name'].toUpperCase()}`
        containerItems2.style.display = "block"
        abilities.innerHTML = `Ability: ${this.dataSearch['abilities'][0]['ability']['name'].toUpperCase()}`
        
      } else {


        containerItems2.style.display = "none"
        containerItems22.style.display = "none"
        pokemons2.innerHTML = ""
        type2.innerHTML =``
        abilities.innerHTML = ``
      }

    })

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

  searchSubmit() {

    const pokemons2:any = document.getElementById('pokemons2')
    const type2:any = document.getElementById('type2')
    const pokemonSprite2:any = document.getElementById('pokemonSprite2')
    const inputSearch:any = document.getElementById('inputSearch')
    const containerItems22:any = document.getElementById('containerItems22')
    const containerItems2:any = document.getElementById('containerItems2')
    const abilities:any = document.getElementById('abilities')

  
     this.http.get(`https://pokeapi.co/api/v2/pokemon/${inputSearch.value}`).subscribe(response => {

    console.log(this.dataSearch =  response)

    this.pokemonSprite2 = response

    pokemons2.innerHTML = this.dataSearch['forms'][0]['name']
    type2.innerHTML = ""
 
    pokemonSprite2.src = this.pokemonSprite2['sprites']['front_default']

 



        type2.innerHTML =`Type: ${this.dataSearch['types'][0]['type']['name'].toUpperCase()}`
        containerItems2.style.display = "block"
        containerItems22.style.display = "block"
        abilities.innerHTML = `Ability: ${this.dataSearch['abilities'][0]['ability']['name'].toUpperCase()}`

   });

  }

}
