import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readable: Boolean = false;
  title = 'Test';
  get computeMin(){
    return true;
  }
  handleclick($event: any){
    this.readable=!this.readable;
    console.log('Event Value',$event.value);
if($event.value){
  console.log('Event Value',$event.value);
this.readable=true;
}
  }
  value="Hello";
  myName(value){
this.value=value;
console.log('Value',value);
  }
}
