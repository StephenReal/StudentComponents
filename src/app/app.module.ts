import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EntryFormsComponent } from './entry-forms/entry-forms.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { ListButtonComponent } from './list-button/list-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormsComponent,
    AddButtonComponent,
    ListButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
