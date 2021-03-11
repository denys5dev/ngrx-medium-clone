import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BackEndErrorsInterface } from '../../types/BackEndErrors.interface';

@Component({
  selector: 'mc-backend-error-massages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrorsProps: BackEndErrorsInterface;
  errorMessages: string[];
  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ');
        return `${name} ${messages}`;
      }
    );
  }
}
