import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AsambleaComponent} from './asamblea/asamblea.component';
import {ConcejoComponent} from './concejo/concejo.component';
import {JalComponent} from './jal/jal.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AsambleaComponent, ConcejoComponent, JalComponent, HomeComponent],
  imports: [
    CommonModule
  ], exports: [
    AsambleaComponent, ConcejoComponent, JalComponent
  ]
})
export class ComponentsModule { }
