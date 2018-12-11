import { Component, OnInit, Input } from '@angular/core';
import { ApiYoutubeComponent } from '../api-youtube/api-youtube.component';

@Component({
  selector: 'app-page-tutoriel',
  templateUrl: './page-tutoriel.component.html',
  styleUrls: ['./page-tutoriel.component.scss']
})
export class PageTutorielComponent implements OnInit {

  @Input() searchVideoTutoriel: string;

  constructor(private search: ApiYoutubeComponent) {
   }

  ngOnInit() {
  }

}
