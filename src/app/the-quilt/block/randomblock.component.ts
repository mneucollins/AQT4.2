import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { BlockService } from '../../services/block.service';
import { IBlock } from '../../interfaces/block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: [
    'block.component.scss',
    '../the-quilt-base.scss'
  ],
  // providers: [BlockService]
})

export class BlockComponent implements OnInit {

  block:IBlock;
  blocks:IBlock[];
  errorMessage:string;

  constructor( private _router: Router, private _blockService: BlockService) {}

  ngOnInit():void {
    this._blockService.getRandomBlock()
      .subscribe(block => this.block = block,
          error => this.errorMessage = <any>error);    
  
    // this._blockService.getBlock(3663)
    //     .subscribe(blocks => this.block = blocks,
    //          error => this.errorMessage = <any>error);  
  

    // this._blockService.getBlocks()
    //   .subscribe(blocks => this.blocks = blocks,
    //        error => this.errorMessage = <any>error);    
  }
}