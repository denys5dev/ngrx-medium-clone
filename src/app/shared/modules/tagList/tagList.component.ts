import { Component, OnInit, Input } from '@angular/core';
import { PopularTagType } from '../../types/PopularTagType';

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.scss'],
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: PopularTagType[];
  constructor() {}

  ngOnInit() {}
}
