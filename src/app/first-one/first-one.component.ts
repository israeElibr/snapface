
import { Component, OnInit, Input } from '@angular/core';
import { FirstOne } from '../models/first-one.model';
import { FirstOneService } from '../services/first-one.service';

@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.scss']
})
export class FirstOneComponent  {
  @Input() firstOne!: FirstOne;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  constructor(private FirstOneService: FirstOneService) {}

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'like';
  }

  onSnap() {
   if (this.buttonText === 'like') {
    this.FirstOneService.firstsById(this.firstOne.id);
    this.buttonText = 'dislike';
   } else {
   this.firstOne.snaps--;
   this.buttonText = 'like';
   }
  }

}

