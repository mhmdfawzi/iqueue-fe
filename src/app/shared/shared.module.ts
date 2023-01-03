// Modules >>
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Components >>
import { LogFormComponent } from './log-form/log-form.component';
import { BaseFormComponent } from './models/components/base-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],

  declarations: [
    LogFormComponent,
    BaseFormComponent
  ],

  exports: [
    // Modules >>
    CommonModule,
    FormsModule,

    // Components >>
    LogFormComponent
  ],
})
export class SharedModule {}
