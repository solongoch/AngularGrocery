import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [GroceryComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule {}
