import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from './feedToggler.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
