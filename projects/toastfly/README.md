# ToastFly

## Instalacion

npm install toastfly

## Configuracion

* importamos ToastFlyModule en nuestro app NgModel

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastflyModule } from 'toastfly'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastflyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


## Uso 

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

 positiveTest(){
    this.toast.positive('bienvenido')
}
  negativeTest(){
  this.toast.negative('error')
}
}

## Desarrollo
ToastFly es un producto desarrollado por CodeBaq
## License 
MIT