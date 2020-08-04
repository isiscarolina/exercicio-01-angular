import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  nome:string = "Isis";
  origen:string= "sou Venezuelana";
  gostos: string= "a praia, o café , Rupaul´s Drag race,... mas também gosto de Star Wars, e filmes de Terror";
  urlImagem: string= "/assets/isis.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
