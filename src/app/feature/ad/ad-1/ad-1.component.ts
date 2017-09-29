import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';


@Component({
  selector: 'app-ad-1',
  templateUrl: './ad-1.component.html',
  styleUrls: ['./ad-1.component.scss']
})
export class Ad1Component implements OnInit, OnDestroy {
  _bannerList: [{ url: string }];
  _period: number;
  TimerSubscription: Subscription;
  backgroundImg: string = 'assets/images/banner1.png';
  _title: string;

  @Input()
  set Title(v: string) {
    this._title = v;
  }

  get Title() {
    return this._title;
  }

  @Input()
  set BannerList(v: [{ url: string }]) {
    this._bannerList = v;
  }

  get BannerList() {
    return this._bannerList;
  }

  @Input()
  set Period(v: number) {
    this._period = v;
  }

  get Period() {
    return this._period;
  }


  @Output() CloseEvent = new EventEmitter();

  constructor() {
  }

  colse() {
    this.CloseEvent.emit();
  }

  setBanner(BannerList, Period) {
    if (this.TimerSubscription) { this.TimerSubscription.unsubscribe(); }
    let count = BannerList.length - 1;
    let i = 0;
    this.TimerSubscription = Observable.timer(0, Period).subscribe((v) => {
      this.backgroundImg = BannerList[i].url;
      i++;
      if (i > count) { i = 0 };
    })
  }

  ngOnInit() {
    this.setBanner(this.BannerList, this.Period);
    // console.log('Ad1Component Created :' + new Date());
  }



  ngOnDestroy() {
    this.TimerSubscription.unsubscribe();
    // console.log('Ad1Component OnDestroy :' + new Date());
  }

}
