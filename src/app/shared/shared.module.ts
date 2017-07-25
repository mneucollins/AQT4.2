import { NgModule } from '@angular/core';
import { GlobalNav6Component } from './globalnav6.component';
import { GlobalNav4Component } from './globalnav4.component';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from "../pipes/safehtml.pipe";
import { BlockService } from "../services/block.service";


@NgModule ({
    declarations: [ 
        GlobalNav6Component,
        GlobalNav4Component,
        SafeHtmlPipe,
    ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        GlobalNav6Component,
        GlobalNav4Component,
        SafeHtmlPipe,
    ],
    providers:
    [
        BlockService
    ]

})

export class SharedModule {}