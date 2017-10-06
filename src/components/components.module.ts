import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfileFormComponent } from './profile-form/profile-form';
import { DashboardComponent } from './dashboard/dashboard';
import { DealsComponent } from './deals/deals';
import { NewDealComponent } from './new-deal/new-deal';
@NgModule({
	declarations: [
		ProfileFormComponent,
		DashboardComponent,
		DealsComponent,
    NewDealComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		ProfileFormComponent,
		DashboardComponent,
		DealsComponent,
    NewDealComponent
	]
})
export class ComponentsModule {}
