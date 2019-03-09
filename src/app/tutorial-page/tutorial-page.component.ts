import { Component, OnInit, Input } from '@angular/core';
import { ApiYoutubeComponent } from '../api-youtube/api-youtube.component';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent implements OnInit {

  @Input() searchVideoTutoriel: string;

  constructor(private search: ApiYoutubeComponent) {
   }

  ngOnInit() {
  }

}
