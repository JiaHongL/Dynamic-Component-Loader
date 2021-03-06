import { Router } from '@angular/router';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';
import { AdService } from './../../feature/ad/ad.service';
import { AdDirective } from './../../feature/ad/ad.directive';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit, AfterContentInit, OnDestroy {
  CloseSubscription: Subscription;
  JoinSubscription: Subscription;
  randomText: string;
  randomTitle: string;
  AdTitle: string;
  @ViewChild(AdDirective) componentHost: AdDirective;

  constructor(
    private NgxLoremIpsumService: NgxLoremIpsumService,
    public AdService: AdService,
    private router: Router
  ) {
    this.randomTitle = this.NgxLoremIpsumService.get(1);
    this.randomText = this.NgxLoremIpsumService.getRandom(15, 40, 3);
  }

  createAD(type: number) {
    this.allSubscriptionUnsubscribe();
    const viewContainerRef = this.componentHost.viewContainerRef;
    let params = [];
    switch (type) {
      case 1:
        this.AdTitle = '可修改文字';
        params = [{
          'InputName': 'Title',
          'InputData': this.AdTitle
        }, {
          'InputName': 'BannerList',
          'InputData': [{
            url: 'assets/images/banner1.png'
          }, {
            url: 'assets/images/banner2.png'
          }, {
            url: 'assets/images/banner3.png'
          }, {
            url: 'assets/images/banner4.png'
          }]
        }, {
          'InputName': 'Period',
          'InputData': 3000
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
    this.CloseSubscription = close$.subscribe((event) => { this.AdService.onClear(); });
  }

  updateAction(v: string | number) {
    this.AdService.updataInput('Title', v);
  }

  allSubscriptionUnsubscribe() {
    if (this.CloseSubscription) { this.CloseSubscription.unsubscribe(); }
    if (this.JoinSubscription) { this.JoinSubscription.unsubscribe(); }
  }

  ngAfterContentInit() {
    this.createAD(1);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allSubscriptionUnsubscribe();
    this.AdService.onDestroy();
  }

}
