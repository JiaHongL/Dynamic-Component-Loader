import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ad-1',
  templateUrl: './ad-1.component.html',
  styleUrls: ['./ad-1.component.scss']
})
export class Ad1Component implements OnInit, OnDestroy {
  _title: string;

  @Input()
  set Title(v: string) {
    this._title = v;
  }

  get Title() {
    return this._title;
  }

  @Output() CloseEvent = new EventEmitter();

  constructor() {}
  
  colse() {
    this.CloseEvent.emit();
  }

  ngOnInit() {
    console.log('Ad1Component Created :' + new Date());
  }

  ngOnDestroy() {
    console.log('Ad1Component OnDestroy :' + new Date());
  }

}
