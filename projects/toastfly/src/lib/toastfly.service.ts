import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastflyService {

  constructor() { }

  positive(){
    var toast = document.getElementById('toast-success')
    toast.className = "show"
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");     
    },  3000
    )
  }
}
