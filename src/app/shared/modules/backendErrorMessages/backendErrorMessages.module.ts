import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './backendErrorMessages.component';
import { TestPipe } from '../../pipes/test.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [BackendErrorMessagesComponent, TestPipe],
  exports: [BackendErrorMessagesComponent]
})
export class BackendErrorMessagesModule { }
