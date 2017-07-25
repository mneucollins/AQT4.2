import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-viewrandom',
  templateUrl: './viewrandom.component.html',
  styleUrls: [
    '../explore-base.scss',
    './viewrandom.component.scss']
})
export class ViewRandomComponent implements OnInit {
    constructor ( private _router: Router){};
    ngOnInit() {
      
  }

}
