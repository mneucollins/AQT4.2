import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: [
    './add-media.component.scss',
    '../participate-base.scss'
  ]
})
export class AddMediaComponent implements OnInit {

  constructor ( private _router: Router){};
  
  ngOnInit() {
  }

  onAddText(): void {
    this._router.navigate(['/add_text']);
  }

}
