import { Video } from '../../models/video';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnChanges {

  @Input() videos: Video[] = [];
  @Input() searchedText: string;
  @Input() selectedVideo: Video;
  @Input() config: any;
  @Output() emitVideo = new EventEmitter();

  id: string;
  // searchedText: string;

   // pagination
  //  directionLinks = true;
  //  autoHide = false;
  //  responsive = true;
  //  itemsPerPage = 5;
  //  showHidePerPage = true;
  // maxSize = 7;

  ngOnChanges(): void {
    if (this.selectedVideo) {
      this.id = this.selectedVideo._id;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.config = {
      id: 'first',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.videos.length
    };
  }

  onSelect(video: Video): void {
    this.emitVideo.emit(video);
  }

  pageChange(event): void {
    this.config.currentPage = event;
  }

}
