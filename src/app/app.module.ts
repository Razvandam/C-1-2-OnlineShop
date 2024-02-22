import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { BlueTextDirectiveDirective } from './blue-text-directive/blue-text-directive.directive';
import { ProductsComponent } from './products/products.component';
// app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    MessageComponent,
    SearchComponent,
    BlueTextDirectiveDirective,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
