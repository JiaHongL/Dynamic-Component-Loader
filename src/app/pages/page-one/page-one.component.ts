import { AdService } from './../../feature/ad/ad.service';
import { AdDirective } from './../../feature/ad/ad.directive';
import { Component, OnInit, ViewChild, OnDestroy, AfterContentInit } from '@angular/core';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit, OnDestroy, AfterContentInit {
  randomText: string;
  randomTitle: string;
  CloseSubscription: Subscription;
  JoinSubscription: Subscription;
  @ViewChild(AdDirective) componentHost: AdDirective;

  constructor(
    private NgxLoremIpsumService: NgxLoremIpsumService,
    private AdService: AdService,
    private router: Router
  ) {
    this.randomTitle = this.NgxLoremIpsumService.get(1);
    this.randomText = this.NgxLoremIpsumService.getRandom(15, 40, 3);
  }

  ngAfterContentInit() {
    const viewContainerRef = this.componentHost.viewContainerRef;
    let type = this.getRandom(1, 3);
    let params = [];
    switch (type) {
      case 1:
        params = [{
          'InputName': 'Title',
          'InputData': '速度:4s'
        }, {
          'InputName': 'BannerList',
          'InputData': [{
            url: 'assets/images/banner1.png'
          }, {
            url: 'assets/images/banner2.png'
          }, {
            url: 'assets/images/banner3.png'
          },{
            url: 'assets/images/banner4.png'
          }]
        }, {
          'InputName': 'Period',
          'InputData': 4000
        }]
        this.AdService.creatComponent(viewContainerRef, 'ad1', params);
        break;
      case 2:
        params = [{
          'InputName': 'Url',
          'InputData': 'https://www.youtube.com/embed/nYm3hZqFbqE'
        }, {
          'InputName': 'IsAutoplay',
          'InputData': true
        }]
        this.AdService.creatComponent(viewContainerRef, 'ad2', params);
        break;

      case 3:
        this.AdService.creatComponent(viewContainerRef, 'ad3');
        let join$ = this.AdService.getOutput('JoinEvent');
        this.JoinSubscription = join$.subscribe((event) => { this.router.navigate(['/join']); });
        break;

      default:
        params = [{
          'InputName': 'Title',
          'InputData': '文字Ad'
        }]
        this.AdService.creatComponent(viewContainerRef, 'ad1', params);
        break;
    }
    
    // 關閉Ad
    let close$ = this.AdService.getOutput('CloseEvent');
    this.CloseSubscription = close$.subscribe((event) => {
      this.AdService.onClear();
      this.allSubscriptionUnsubscribe();
    });
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  allSubscriptionUnsubscribe() {
    if (this.CloseSubscription) { this.CloseSubscription.unsubscribe(); }
    if (this.JoinSubscription) { this.JoinSubscription.unsubscribe(); }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allSubscriptionUnsubscribe();
    this.AdService.onDestroy();
  }

}
