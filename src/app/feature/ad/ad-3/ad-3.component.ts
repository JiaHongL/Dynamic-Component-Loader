import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ad-3',
  templateUrl: './ad-3.component.html',
  styleUrls: ['./ad-3.component.scss']
})
export class Ad3Component implements OnInit ,OnDestroy {
  @Output() CloseEvent = new EventEmitter();
  @Output() JoinEvent = new EventEmitter();
  
  constructor() { 
    // setInterval(()=>{
    //   this.JoinEvent.emit();
    // },1000);
  }
  colse() {
    this.CloseEvent.emit();
  }
  join(){
    this.JoinEvent.emit();
  }
  ngOnInit() {
    console.log('Ad3Component Created :' + new Date());
  }

  ngOnDestroy() {
    console.log('Ad3Component OnDestroy :' + new Date());
  }
}
