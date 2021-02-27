import { Component, OnInit } from '@angular/core';
import { MenuItemVO } from 'src/app/vo/menu-item.vo';
import { MENU_LIST_DATA } from 'src/app/data/menu-list.data';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  readonly MENU_LIST_DATA: Array<MenuItemVO> = MENU_LIST_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
