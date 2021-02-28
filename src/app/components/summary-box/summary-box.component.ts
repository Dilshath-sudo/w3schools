import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItemVO } from 'src/app/vo/menu-item.vo';

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.css']
})
export class SummaryBoxComponent implements OnInit {

  @Input() lesson: MenuItemVO;
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickReference(): void {
    alert('Refence Button Clicked: ' + this.lesson.lessonType);
    this.buttonClicked.emit();
  }

}
