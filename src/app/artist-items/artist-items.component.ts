import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artist']
})
export class ArtistItemsComponent implements OnInit {
  query: string;
  artist: any;

  showArtist(item: { name: string; }) {
    this.query = item.name;
    // item.highlight = !item.highlight;
  }

  constructor(private http: HttpClient) {
    this.query = '';
  }
  
  ngOnInit(): void {
    this.http.get<Object>('/assets/data.json').subscribe(
      (      data: any) => {
        this.artist = data;
        console.log(data);
      })
  }

}
