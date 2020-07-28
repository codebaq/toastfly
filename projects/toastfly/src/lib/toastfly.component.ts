import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toastfly',
  template: `

  <div id="toast-success">Some text some message..</div>
  `,
  styleUrls: ['./toastfly.component.css'],
})
export class ToastflyComponent implements OnInit {


  ngOnInit(): void {
  }
 
  positive() {
    
  } 
}
