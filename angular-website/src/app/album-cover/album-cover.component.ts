import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-cover',
  standalone: true,
  imports: [],
  templateUrl: './album-cover.component.html',
  styleUrl: './album-cover.component.css'
})
export class AlbumCoverComponent {
  @Input() album = {
    title:"",
    artist:"",
    img:""
  };
};
