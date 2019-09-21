import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
