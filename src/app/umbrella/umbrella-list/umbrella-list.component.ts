import { Component, OnInit } from '@angular/core';
import {Umbrella} from '../../Shared/Models/Umbrella';

@Component({
  selector: 'app-umbrella-list',
  templateUrl: './umbrella-list.component.html',
  styleUrls: ['./umbrella-list.component.scss']
})
export class UmbrellaListComponent implements OnInit {
Umbrellas: Umbrella[];
  constructor() { }

  ngOnInit() {
  }

}
