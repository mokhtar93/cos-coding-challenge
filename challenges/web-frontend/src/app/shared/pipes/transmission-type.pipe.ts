import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transmissionType'
})
export class TransmissionTypePipe implements PipeTransform{
    transform(value : any) : string {
        switch(value){
        case -1 :
            return 'Manual'
        case 0 : 
            return 'Automatic'
        case 1 : 
            return 'steptronic'
        }
        return 'Unknown'
    }
}