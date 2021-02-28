import { Component, OnInit } from '@angular/core';
import { MENU_LIST_DATA } from 'src/app/data/menu-list.data';
import { MenuItemVO } from 'src/app/vo/menu-item.vo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly MENU_LIST_DATA: Array<MenuItemVO> = MENU_LIST_DATA;
  clickCount = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  addCount(): void {
    this.clickCount = this.clickCount + 1;
  }

}
