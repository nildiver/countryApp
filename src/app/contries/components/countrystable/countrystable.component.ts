import { Component, Input } from '@angular/core';
import { Country} from '../../interfaces/countrys.interface';

@Component({
  selector: 'countrys-table',
  templateUrl: './countrystable.component.html',
  styleUrls: ['./countrystable.component.css']
})
export class CountrystableComponent {
@Input()
public countries:Country[]=[]

}
