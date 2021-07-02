import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuelType'
})
export class FuelTypePipe implements PipeTransform{
    transform(value : any) : string {
        switch(value){
        case 0 :
            return 'Petrol'
        case 1 : 
            return 'Gasoline'
        case 2 : 
            return 'Diesel'
        }

         return 'Unknown'
    }
}