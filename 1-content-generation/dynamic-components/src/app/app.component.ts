import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myBanner;

  // ViewChild(Marker, {}) marker

  constructor(
    private cfr: ComponentFactoryResolver,
    private view: ViewContainerRef
  ) {
    // const bannerFactory = this.cfr.resolveComponentFactory(BannerComponent);
    // const banner = this.view.createComponent(bannerFactory);
    // this.marker.view.createComponent(bannerFactory);

    this.myBanner = BannerComponent;

    setTimeout(_ => {
      this.loadBanner();
    }, 3000);
  }


  async loadBanner() {
    const {Banner3Component} = await import('./banner3/banner3.component');
    this.myBanner = Banner3Component;
  }
}
