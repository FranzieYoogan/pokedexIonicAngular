import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage, HttpClientModule]
})
export class PokemonPage implements OnInit {

  constructor() { }

  private http =  inject(HttpClient)

  data:any
  pokemonSprite:any
  id:any = 94

  ngOnInit(): any {
    const pokemons:any = document.getElementById('pokemons')
    const pokemonSprite:any = document.getElementById('pokemonSprite')
    
    
      this.http.get(`https://pokeapi.co/api/v2/pokemon/94`).subscribe(response => {

      console.log(this.data =  response)

      this.pokemonSprite = response

      pokemons.innerHTML = this.data['forms'][0]['name']

      pokemonSprite.src = this.pokemonSprite['sprites']['front_default']
 
     });
 
 
    

  }

  next() {

    const pokemons:any = document.getElementById('pokemons')
    const pokemonSprite:any = document.getElementById('pokemonSprite')
    const containerItems:any = document.getElementById('containerItems')
    const type:any = document.getElementById('type')
    this.id += 1
    
  
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).subscribe(response => {

    console.log(this.data =  response)

    this.pokemonSprite = response

    pokemons.innerHTML = this.data['forms'][0]['name']
    type.innerHTML = ""
    containerItems.style.display = "none"
    pokemonSprite.src = this.pokemonSprite['sprites']['front_default']


   });


  }

  previous() {
    
    const pokemons:any = document.getElementById('pokemons')
    const pokemonSprite:any = document.getElementById('pokemonSprite')
    const type:any = document.getElementById('type')
    const containerItems:any = document.getElementById('containerItems')
    this.id -= 1
    
  
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).subscribe(response => {

    console.log(this.data =  response)

    this.pokemonSprite = response

    pokemons.innerHTML = this.data['forms'][0]['name']
    type.innerHTML = ""
    containerItems.style.display = "none"
    pokemonSprite.src = this.pokemonSprite['sprites']['front_default']


   });

  }

  showStats() {

    const pokemons:any = document.getElementById('pokemons')
    const type:any = document.getElementById('type')
    const pokemonValue = pokemons.innerHTML
    const containerItems:any = document.getElementById('containerItems')
    

   this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`).subscribe(response => {

    console.log(this.data =  response)

    this.pokemonSprite = response

    type.innerHTML =`Type: ${this.data['types'][0]['type']['name'].toUpperCase()}`
    containerItems.style.display = "block"



   });


  }

}
