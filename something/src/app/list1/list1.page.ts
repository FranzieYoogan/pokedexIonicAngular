import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.page.html',
  styleUrls: ['./list1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage, HttpClientModule]
})
export class List1Page implements OnInit {

  constructor() { }

  private http = inject(HttpClient)

  list1:any
  listt1:any

  list2:any
  listt2:any
  listtt2:any
  ngOnInit() {

    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=105&offset=0`).subscribe(response => {
      console.log(response);

        this.list1 = response
        this.listt1 = this.list1['results']

    });


  

}



showPokemonn(item: any) {

  const containerItemm:any = document.getElementById('containerItemm')
  const pokemonList1Img:any = document.getElementById('pokemonList1Img')
  const pokemonTitlee:any = document.getElementById('pokemonTitlee')

  containerItemm.style.display = "block"

  this.http.get(`https://pokeapi.co/api/v2/pokemon/${item}`).subscribe(response => {
   

      this.list2 = response
      this.listt2 = this.list2['sprites']['front_default']
      this.listtt2 = this.list2['forms'][0]['name']
      console.log(this.listt2);
      pokemonList1Img.src = this.listt2
      pokemonTitlee.innerHTML = this.listtt2

  });



}

close() {

  const containerItemm:any = document.getElementById('containerItemm')

  containerItemm.style.display = "none"

}

}
