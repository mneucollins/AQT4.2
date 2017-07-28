import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { BlockService } from '../../services/block.service';
import { IBlock } from '../../interfaces/block';
import { PanelService } from '../../services/panel.service';
import { IPanel } from '../../interfaces/panel';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: [
    'block.component.scss',
    '../the-quilt-base.scss',
    '../../explore/explore-base.scss'
  ],
  providers: [
    BlockService,
    PanelService
  ]
})

export class BlockComponent implements OnInit {

  block:IBlock;
  blocks:IBlock[];
  errorMessage:string;

  constructor( 
    private _route: ActivatedRoute, 
    private _blockService: BlockService,
    private _panelService: PanelService) {}

  ngOnInit():void {
    let blockId = +this._route.snapshot.params['blockId'];

    this._blockService.getBlock(blockId)
      .subscribe(block => this.block = block,
        error => this.errorMessage = <any>error);

    // TODO: Get panel info and feed to collapsible in template
    this._panelService.getPanelInfo(blockId)

  }
}