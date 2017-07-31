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
import { PanelmakerService } from '../../services/panelmaker.service';
import { IPanelmaker } from '../../interfaces/panelmaker';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: [
    '../../explore/explore-base.scss',
    '../the-quilt-base.scss',
    'block.component.scss',
  ],  
  providers: [
    BlockService,
    PanelService,
    MemorializedService,
    PanelmakerService
  ],
})

export class BlockComponent implements OnInit {

  block:IBlock;
  blocks:IBlock[];
  errorMessage:string;
  panels:IPanel[];
  memorialized: IMemorialized[];
  panelmakers: IPanelmaker[];

  constructor( 
    private _route: ActivatedRoute, 
    private _blockService: BlockService,
    private _panelService: PanelService,
    private _memorializedService: MemorializedService,
    private _panelmakerService: PanelmakerService
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

    this._panelmakerService.getPanelmakerInfo(blockId)
      .subscribe(panelmakers=>this.panelmakers=panelmakers,
        error => this.errorMessage = <any>error);;


  }
  
  
  show: boolean;
  toggleHidden(item): void {
    // a little counter-intuitive here, but in the template, the [hidden] attribute
    // is assigned the boolean result of the expression show!==panel.panelId
    // that is, if it is true, it is hidden, if it is false, it is shown.
    this.show = item;
    //this should be called upon to open up the panel information for a found panel
  }
 
  nameLbl: string;
  buildNameLabel(panelId): string{
    this.nameLbl = "";
    //note this should probably be replaced with an array filter, but brute force works for now
    this.memorialized.forEach((panelObj, index)=>{
      console.log(panelObj.panelId);
      if(panelObj.panelId == panelId) {
        if (this.nameLbl.length>0){this.nameLbl+=", "}
        this.nameLbl+=panelObj.memorializedFirst;
        if (panelObj.memorializedLast.length>0) {
          this.nameLbl+=" "+panelObj.memorializedLast;
        }
      }
    })
    if (this.nameLbl.length>30) {
      this.nameLbl= this.nameLbl.substr(0,30)+ "...";
    }
    console.log (this.nameLbl);
    return this.nameLbl;
  }
}