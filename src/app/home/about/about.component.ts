import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../home.component.scss',
    './about.component.scss'
  ]
})
export class AboutComponent implements OnInit {

    constructor ( private _location: Location ){};

  ngOnInit() {
  }

  onBack(): void {
    this._location.back();
  }


}
