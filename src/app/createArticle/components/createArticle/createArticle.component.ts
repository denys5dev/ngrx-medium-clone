import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: 'foo',
    description: 'foo',
    body: 'foo',
    tagList: ['foo', 'test'],
  };
  constructor() {}

  ngOnInit() {}

  onSubmit(res: any) {
    console.log(res);
  }
}
