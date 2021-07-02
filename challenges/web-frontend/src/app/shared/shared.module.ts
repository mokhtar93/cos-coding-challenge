import { NgModule } from '@angular/core';
import { CountDownPipe } from './pipes/countdown.pipe';
import {FuelTypePipe} from './pipes/fuel-type.pipe';
import {TransmissionTypePipe} from './pipes/transmission-type.pipe'

@NgModule({
  declarations: [ FuelTypePipe , TransmissionTypePipe, CountDownPipe],
  imports: [
  
  ],
  providers: [
    FuelTypePipe,
    TransmissionTypePipe,
    CountDownPipe
],
exports: [
    FuelTypePipe,
    TransmissionTypePipe,
    CountDownPipe
  ]
})
export class SharedModule { }
