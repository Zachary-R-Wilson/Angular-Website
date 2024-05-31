import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-album-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-cover.component.html',
  styleUrl: './album-cover.component.css',
})
export class AlbumCoverComponent {
  @Input() album = {
    title:"",
    artist:"",
    img:""
  };
};
