import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ManagerComponent,
    CreateAccountComponent,
    StatisticsReportComponent,
    ParceltrackingComponent,
    ParcelReceiptComponent,
    CreateOutboundOrderComponent,
    ConfirmInboundOrderComponent,
    CreateShipmentComponent,
    ConfirmReceiptComponent,
    RejectShipmentComponent,
    ShipmentStatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
