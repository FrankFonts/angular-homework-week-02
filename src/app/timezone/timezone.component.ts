import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss'],
})
export class TimezoneComponent implements OnInit {
  @Input() givenTimeZone: string = '';
  @Input() isActualTimeZone: boolean = false;

  timeInTimeZone: string = '';

  @Output() timeZoneChange = new EventEmitter<string>();

  selectAsCurrentTimeZone(timeZone: string) {
    this.timeZoneChange.emit(timeZone);
  }

  constructor() {}

  ngOnInit(): void {
    this.timeInTimeZone = this.calculateTimeInTimeZone(this.givenTimeZone);
  }

  calculateTimeInTimeZone(timeZone: string) {
    return new Date().toLocaleString('en-US', {
      timeZone: timeZone,
    });
  }

  refreshTime() {
    this.timeInTimeZone = this.calculateTimeInTimeZone(this.givenTimeZone);
  }
}
