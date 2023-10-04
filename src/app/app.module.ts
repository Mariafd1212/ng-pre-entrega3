import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModoNocturnoComponent } from './components/modo-nocturno/modo-nocturno.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaComponent } from './components/lista/lista.component';
import { ToggleListDirective } from './directives/toggle-list.directive';
import { RoundedBlockDirective } from './directives/rounded-block.directive';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModoNocturnoComponent,
    FooterComponent,
    ListaComponent,
    ToggleListDirective,
    RoundedBlockDirective,
    CardsComponent,
    ReactiveFormsComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
