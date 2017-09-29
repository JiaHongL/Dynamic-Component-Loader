import { Ad3Component } from './ad-3/ad-3.component';
import { Ad2Component } from './ad-2/ad-2.component';
import { Ad1Component } from './ad-1/ad-1.component';
import { Injectable, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable()
export class AdService {
  currentComponentName: string;

  currentComponentRef: ComponentRef<any>;
  private currentViewContainerRef: ViewContainerRef;
  private components = {
    ad1: Ad1Component,
    ad2: Ad2Component,
    ad3: Ad3Component
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  creatComponent(ViewContainerRef: ViewContainerRef, ComponentName: string, Inputs?: Array<object>) {
    this.createComponentFactory(ViewContainerRef, ComponentName, Inputs);
  }

  private createComponentFactory(ViewContainerRef: ViewContainerRef, ComponentName: string, Inputs?: Array<object>) {
    // 如果已經有component時,先讓component做OnDestroy的動作.
    if (this.currentComponentRef) { this.onDestroy(); };

    // 1.取得要動態產生component的directive
    this.currentViewContainerRef = ViewContainerRef;
    // 2.準備一個要產生的component
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[ComponentName]);
    // 3.清除directive裡的東西
    this.currentViewContainerRef.clear();
    // 4.創建component並取得ref
    this.currentComponentRef = this.currentViewContainerRef.createComponent(componentFactory);
    // 5.設定component的Input欄位(初始化賦值)
    if (Inputs) { this.setInputs(Inputs); };

    // 原本使用componentType.name , 但不能使用 , 因為會被webpack簡化,導致都會取到 n.
    // this.currentComponentName = this.currentComponentRef.componentType.name;
    this.currentComponentName = ComponentName;

  }

  private setInputs(Inputs: Array<object>) {
    Inputs.forEach((val, index) => {
      let name = val['InputName'], data = val['InputData'];
      this.currentComponentRef.instance[name] = data;
    })
  }

  // 更新賦值
  updataInput(InputName: string, InputData: object | string | number) {
    this.currentComponentRef.instance[InputName] = InputData;
  }

  // 回傳 output EventEmitter , 讓父Component做訂閱.
  getOutput(OutputName: string) {
    return this.currentComponentRef.instance[OutputName];
  }

  // 被創建Component的ondestroy
  onDestroy() {
    this.currentComponentRef.destroy();
    this.currentComponentName = '';
    // console.log('AdService.onDestroy()');
  }

  // 清除view 和 onDestroy()
  onClear() {
    this.currentViewContainerRef.clear();
    this.onDestroy();
    // console.log('AdService.onClear()');
  }

}
