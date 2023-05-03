import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = 'https://nishiweb.com.br/animecomics/images/upload/507.jpg'
  contentTitle:string = 'MINHA NOTICIA'
  contentDescription:string = 'Ola mundo!'
  constructor() { }

  ngOnInit(): void {
  }

}
