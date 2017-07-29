import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { BlockService } from '../../services/block.service';
import { IBlock } from '../../interfaces/block';
import { PanelService } from '../../services/panel.service';
import { IPanel } from '../../interfaces/panel';
import { MemorializedService } from '../../services/memorialized.service';
import { IMemorialized } from '../../interfaces/memorialized';


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
    PanelService,
    MemorializedService
  ],
})

export class BlockComponent implements OnInit {

  block:IBlock;
  blocks:IBlock[];
  errorMessage:string;
  panels:IPanel[];
  memorialized: IMemorialized[];

  constructor( 
    private _route: ActivatedRoute, 
    private _blockService: BlockService,
    private _panelService: PanelService,
    private _memorializedService: MemorializedService
  ) {}

  ngOnInit():void {
    let blockId = +this._route.snapshot.params['blockId'];

    this._blockService.getBlock(blockId)
      .subscribe(block => this.block = block,
        error => this.errorMessage = <any>error);

    // TODO: Get panel info and feed to collapsible in template
    this._panelService.getPanelInfo(blockId)
      .subscribe(panels=>this.panels=panels,
        error => this.errorMessage = <any>error);

    this._memorializedService.getMemorializedInfo(blockId)
      .subscribe(memorialized=>this.memorialized=memorialized,
        error => this.errorMessage = <any>error);;

  }
  
  
  show: boolean;
  toggleHidden(item): void {
    // a little counter-intuitive here, but in the template, the [hidden] attribute
    // is assigned the boolean result of the expression hide!==panel.panelId
    // that is, if it is true, it is hidden, if it is false, it is shown.
    this.show = item; 
    }


}
