import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from '../../shared/basicelements/basicelements.component';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { TypographyComponent } from '../../shared/typography/typography.component';
import { NucleoiconsComponent } from '../../shared/nucleoicons/nucleoicons.component';
import { HomeComponent } from './home.component';
import { NotificationComponent } from '../../shared/notification/notification.component';
import { NgbdModalComponent } from '../../shared/modal/modal.component';
import { NgbdModalContent } from '../../shared/modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        HomeComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ HomeComponent ]
})
export class HomeModule { }
