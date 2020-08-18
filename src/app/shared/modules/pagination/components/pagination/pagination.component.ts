import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') urlProps: string;
  pagesCount: number;
  pages: number[];

  constructor(private _utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this._utilsService.range(1, this.pagesCount);
  }
}