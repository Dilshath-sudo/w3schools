import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';
import { MenuItemVO } from 'src/app/vo/menu-item.vo';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  lesson: MenuItemVO;
  lessonUrl: string;
  lessonTitle: string;

  constructor(private activatedRoute: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.lessonUrl = this.activatedRoute.snapshot.params['lessonUrl'];
    this.lesson = this.lessonService.getLessonFromUrl(this.lessonUrl);
    this.lessonTitle = this.lesson.lessonTitle;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.lessonUrl = params['lessonUrl'];
      this.lesson = this.lessonService.getLessonFromUrl(this.lessonUrl);
      this.lessonTitle = this.lesson.lessonTitle;
    });
  }

}
