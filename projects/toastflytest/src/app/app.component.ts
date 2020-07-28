import { Component, Testability } from '@angular/core';
import { ToastflyService } from 'toastfly'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toastflytest';
 constructor(private toast :  ToastflyService){

  }

 Test(){
    this.toast.positive()
}
}
