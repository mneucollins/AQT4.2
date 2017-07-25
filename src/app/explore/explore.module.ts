import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

// import { CommonModule } from '@angular/common';
// Common Module is now imported into SharedModule which is imported here
import { SharedModule } from '../shared/shared.module';

import { ExploreComponent } from './explore.component';
import { ExploreQuiltComponent } from './explore-quilt/explorequilt.component';
import { ThreadsComponent } from '../threads/threads.component';
import { ViewRandomComponent } from './viewrandom/viewrandom.component';
import { BlockComponent } from '../the-quilt/block/block.component';

import { BlockViewComponent } from '../the-quilt/block-view/block-view.component';

// import { ViewBlockComponent } from './viewblock.component';

import { TakeTourComponent } from './take-tour/taketour.component';
import { ViewTourComponent } from './viewtour/viewtour.component';
import { FindANameComponent } from './find-name/findaname.component';
import { FindMoreOptionsComponent } from './find-name/findmoreoptions.component';
import { FindResultsComponent } from './find-name/find-results/find-results.component';




@NgModule({
    declarations:[
        ExploreComponent,
        ExploreQuiltComponent,
        // ThreadsComponent, declared in threads module
        BlockComponent,
        ViewRandomComponent,
        // ViewBlockComponent,
        TakeTourComponent,
        ViewTourComponent,
        FindANameComponent,
        FindMoreOptionsComponent,
        FindResultsComponent
        // ExploreRandomComponent,
    ],

    imports:[
        FormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'explore', component: ExploreComponent },
            { path: 'explore_the_quilt', component: ExploreQuiltComponent },
            { path: 'threads', component: ThreadsComponent },
            // { path: 'view_random', component: ViewRandomComponent },
            // { path: 'view_random', component: BlockComponent },
            { path: 'block/:blockId', component: BlockComponent },
            { path: 'take_a_tour', component: TakeTourComponent },
            { path: 'view_tour/:tourId', component: ViewTourComponent },
            { path: 'find_a_name', component: FindANameComponent },
            { path: 'find_more_options', component: FindMoreOptionsComponent },
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ExploreModule {}
