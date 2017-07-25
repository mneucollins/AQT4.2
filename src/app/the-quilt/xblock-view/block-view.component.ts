import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlock } from '../../interfaces/block';


@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {
  pageTitle ="Quilt Block";
  block: IBlock;
  

  constructor( private  _route: ActivatedRoute) { }

  ngOnInit() {
    let blockId = +this._route.snapshot.params['blockId'];
    alert (blockId);
    this.pageTitle += `:${blockId}`
  }

}
