import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// CommonModule is now imported from SharedModule
import { SharedModule } from '../shared/shared.module';
// Components
import { MyParticipationComponent } from './participate.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { AddTextComponent } from './add-media/add-text/add-text.component';



@NgModule({
    declarations:[
        MyParticipationComponent,
        AddMediaComponent,
        AddTextComponent,
        // ExploreRandomComponent,
    ],

    imports:[
        FormsModule,
        // CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'my_quilt', component: MyParticipationComponent },
            { path: 'add_media', component: AddMediaComponent },
            { path: 'add_text', component: AddTextComponent }
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ParticipateModule {}
