import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Video } from '../../models/video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit, OnChanges {

  @Input() selectedVideo: Video;
  editableVideo: Video;

  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();

  @ViewChild('updateVideoForm', { static: false }) updateVideoForm: NgForm;
  // @ViewChild('title', { static: false }) title: ElementRef;

  editingVideo = false;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.editingVideo = false;
  }

  editVideo(): void {
    this.editingVideo = !this.editingVideo;
    this.editableVideo = {_id: this.selectedVideo._id, title: this.selectedVideo.title,
      url: this.selectedVideo.url, description: this.selectedVideo.description};
  }

  updateVideo(value: Video): void {
    // this.editableVideo.title = this.title.nativeElement.value;
    if (this.updateVideoForm.valid) {
      value.url = value.url.split('/watch?v=').join('/embed/').split('&')[0];
      value._id = this.selectedVideo._id;
      this.updateVideoEvent.emit(value);
      this.editingVideo = !this.editingVideo;
     }
     else {
      Object.keys(this.updateVideoForm.controls).forEach(key => {
        this.updateVideoForm.controls[key].markAllAsTouched();
      });
     }
  }

  deleteVideo(): void {
    this.deleteVideoEvent.emit(this.selectedVideo);
  }

}
