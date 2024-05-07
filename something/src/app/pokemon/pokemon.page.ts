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
  z:any = 1

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

}
