import { Component, OnInit } from '@angular/core';
import { FirstOne } from '../models/first-one.model';
import { FirstOneService } from '../services/first-one.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Objects!: FirstOne[];

  constructor( private firstOneServices: FirstOneService) { }

  ngOnInit(): void {
    this.Objects= this.firstOneServices.getAllFaceSnaps();
  }

}
