import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  id: string | null = '0';
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id');
    });
    this.setValuesToComponente(this.id);
  }
  
  setValuesToComponente(id: string | null): void {
    const result = dataFake.filter(item => item.id === id)[0];
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}