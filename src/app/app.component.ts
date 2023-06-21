import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyload';
  constructor(private ViewContainer:ViewContainerRef,private cfr:ComponentFactoryResolver){
}
async loadadmin()
 {
this.ViewContainer.clear();
const {AdminlistComponent}=await import('./adminlist/adminlist.component')
this.ViewContainer.createComponent(
this.cfr.resolveComponentFactory(AdminlistComponent)
)
}
async loaduser()
 {
  this.ViewContainer.clear();
  const {UserlisComponent}=await import('./userlis/userlis.component')
  this.ViewContainer.createComponent(
  this.cfr.resolveComponentFactory(UserlisComponent)
  )
  }
  }

