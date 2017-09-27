import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ad-2',
  templateUrl: './ad-2.component.html',
  styleUrls: ['./ad-2.component.scss']
})
export class Ad2Component implements  OnInit, OnDestroy {
  _url;
  _IsAutoplay: boolean;

  @Input()
  set Url(v) {
    this._url = v;
  }
  get Url() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this._url);
  }

  @Input()
  set IsAutoplay(v: boolean) {
    this._IsAutoplay = v;
    if (this._IsAutoplay) { this._url += '?autoplay=1'; }
  }
  get IsAutoplay() {
    return this._IsAutoplay;
  }

  @Output() CloseEvent = new EventEmitter();

  constructor(public sanitizer: DomSanitizer) {}

  colse() {
    this.CloseEvent.emit();
  }

  ngOnInit() {
    console.log('Ad2Component Created :' + new Date());
  }

  ngOnDestroy() {
    console.log('Ad2Component OnDestroy :' + new Date());
  }

}
