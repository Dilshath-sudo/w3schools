import { Injectable } from '@angular/core';
import { MENU_LIST_DATA } from '../data/menu-list.data';
import { MenuItemVO } from '../vo/menu-item.vo';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  readonly MENU_LIST_DATA: Array<MenuItemVO> = MENU_LIST_DATA;

  constructor() { }

  getLessonFromUrl(url: string): MenuItemVO {
    let lesson: MenuItemVO;
    this.MENU_LIST_DATA.forEach((menuItem: MenuItemVO) => {
      if (menuItem.url === 'lesson/' + url) {
        lesson = menuItem;
      }
    });
    return lesson;
  }
}
