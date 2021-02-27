import { Injectable } from '@angular/core';
import { MENU_LIST_DATA } from '../data/menu-list.data';
import { MenuItemVO } from '../vo/menu-item.vo';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  readonly MENU_LIST_DATA: Array<MenuItemVO> = MENU_LIST_DATA;

  constructor() { }

  getLessonTitleFromUrl(url: string): string {
    let lessonTitle: string
    this.MENU_LIST_DATA.forEach((menuItem: MenuItemVO) => {
      if (menuItem.url === 'lesson/' + url) {
        lessonTitle = menuItem.lessonTitle;
      }
    });
    return lessonTitle;
  }
}
