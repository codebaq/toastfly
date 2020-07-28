import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastflyService {

  constructor() { }

  positive(msg : string){
    var toast = document.getElementById('toast')
    toast.style.backgroundColor = 'green'
    toast.innerHTML = msg
    toast.className = "show"
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");     
    },  3000
    )
  }

  negative(msg : string){
    var toast = document.getElementById('toast')
    toast.style.backgroundColor = 'red'
    toast.innerHTML = msg
    toast.className = "show"
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");     
    },  3000
    )
  }
}
