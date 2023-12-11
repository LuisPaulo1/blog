import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = 'https://picsum.photos/1200/300';
  contentTitle: string = 'Content Title';
  contentDescription: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
}