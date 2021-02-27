import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  lessonUrl: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.lessonUrl = this.activatedRoute.snapshot.params['lessonName'];

    this.activatedRoute.params.subscribe((params: Params) => {
      this.lessonUrl = params['lessonName'];
    });
  }

}
