import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  lessonUrl: string;
  lessonTitle: string;

  constructor(private activatedRoute: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.lessonUrl = this.activatedRoute.snapshot.params['lessonUrl'];
    this.lessonTitle = this.lessonService.getLessonTitleFromUrl(this.lessonUrl);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.lessonUrl = params['lessonUrl'];
      this.lessonTitle = this.lessonService.getLessonTitleFromUrl(this.lessonUrl);
    });
  }

}
