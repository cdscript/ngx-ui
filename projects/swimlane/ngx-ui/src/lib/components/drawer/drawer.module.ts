import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '../overlay/overlay.module';
import { InjectionService } from '../../services/injection.service';
import { DrawerComponent } from './drawer.component';
import { DrawerService } from './drawer.service';

@NgModule({
  declarations: [DrawerComponent],
  exports: [DrawerComponent],
  providers: [DrawerService, InjectionService],
  imports: [CommonModule, OverlayModule],
  entryComponents: [DrawerComponent]
})
export class DrawerModule {}
