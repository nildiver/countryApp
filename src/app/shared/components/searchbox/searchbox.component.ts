import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent {
  @Input()
  public placeholder:string = '';
 @Output()
 public  onvalue= new EventEmitter<string>();

 emitValue(Value:string):void{
  this.onvalue.emit(Value);
 }
}
