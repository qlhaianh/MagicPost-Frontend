import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ManagerComponent } from './components/manager/manager.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { StatisticsReportComponent } from './components/statistics-report/statistics-report.component';
import { ParceltrackingComponent } from './components/parceltracking/parceltracking.component';
import { ParcelReceiptComponent } from './components/parcel-receipt/parcel-receipt.component';
import { CreateOutboundOrderComponent } from './components/create-outbound-order/create-outbound-order.component';
import { ConfirmInboundOrderComponent } from './components/confirm-inbound-order/confirm-inbound-order.component';
import { CreateShipmentComponent } from './components/create-shipment/create-shipment.component';
import { ConfirmReceiptComponent } from './components/confirm-receipt/confirm-receipt.component';
import { RejectShipmentComponent } from './components/reject-shipment/reject-shipment.component';
import { ShipmentStatisticsComponent } from './components/shipment-statistics/shipment-statistics.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'manager',
    component: ManagerComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'statistics-report',
    component: StatisticsReportComponent,
  },
  {
  path: 'parceltracking',
  component: ParceltrackingComponent,
  },
  {
  path: 'parcel-receipt',
  component: ParcelReceiptComponent,
  },
  {
  path: 'create-outbound-order',
  component: CreateOutboundOrderComponent,
  },
  {
  path: 'confirm-inbound-order',
  component: ConfirmInboundOrderComponent,
  },
  {
  path: 'create-shipment',
  component: CreateShipmentComponent,
  },
  {
  path: 'confirm-receipt',
  component: ConfirmReceiptComponent,
  },
  {
    path: 'reject-shipment',
    component: RejectShipmentComponent,
  },
 {
      path: 'shipment-statistics',
      component: ShipmentStatisticsComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
