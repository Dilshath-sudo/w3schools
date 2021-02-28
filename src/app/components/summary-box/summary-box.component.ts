import { Component, Input, OnInit } from '@angular/core';
import { MenuItemVO } from 'src/app/vo/menu-item.vo';

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.css']
})
export class SummaryBoxComponent implements OnInit {

  @Input() lesson: MenuItemVO;

  constructor() { }

  ngOnInit(): void {
  }

}
