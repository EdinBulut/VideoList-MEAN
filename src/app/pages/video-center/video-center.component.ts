import { Video } from '../../models/video';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.scss']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [];
  refreshedVideos: Video[] = [];
  selectedVideo: Video;
  hidenewVideo = true;
  searchedText: string;
  config: any;

  @ViewChild('addVideoForm', { static: false }) addVideoForm: NgForm;
  // @ViewChild('target', { static: false }) target: ElementRef;

  constructor(private videoService: VideoService) { }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(
        data => {
          this.videos = data.sort((v1, v2) => (v1.title > v2.title ? 1 : -1));
          this.videos.forEach(v => v.url = v.url.split('/watch?v=').join('/embed/').split('&')[0]);

          this.refreshedVideos = this.videos;
          this.searchedText = JSON.parse(sessionStorage.getItem('searched')) || '';
          this.videos = this.videos.filter(v => v.title.toLowerCase().indexOf(this.searchedText.toLowerCase()) > -1);
          // this.selectedVideo = this.videos[0];
        },
        err => console.log(err)
      );
  }

  ngOnInit(): void {
    this.getVideos();
    this.config = {
      id: 'first',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.videos.length
    };
  }

  onSelectVideo(vid: Video): void {
    this.selectedVideo = vid;
    this.hidenewVideo = true;
    window.scroll({top: 0, left: 0, behavior: 'smooth'});

    // this.videos = this.refreshedVideos;
    // console.log(this.target);
    // this.target.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  addVideo(value: Video): void {
    // console.log(value);
    if (this.addVideoForm.valid) {
      this.videoService.addVideo(value)
        .subscribe(
          newVideo => {
            newVideo.url = newVideo.url.split('/watch?v=').join('/embed/').split('&')[0];
            this.videos.push(newVideo);
            this.selectedVideo = newVideo;
            this.config = {
              id: 'first',
              itemsPerPage: 5,
              currentPage: 1,
              totalItems: this.videos.length
            };
          },
          err => console.log(err)
        );
      this.hidenewVideo = true;
      this.ngOnInit();
    }
    else {
      Object.keys(this.addVideoForm.controls).forEach(key => {
        this.addVideoForm.controls[key].markAllAsTouched();
      });
     }
  }

  onUpdateVideoEvent(video: Video): void {
    this.videoService.updateVideo(video)
      .subscribe(updatedVideo => {
        updatedVideo.url = updatedVideo.url;
        // updatedVideo.url = updatedVideo.url.split('/watch?v=').join('/embed/').split('&')[0];
        video = updatedVideo;
      },
        err => console.log(err.message));
    this.getVideos();
    this.selectedVideo = video;
  }


  onDeleteVideoEvent(vid: Video): void {
    if (confirm('Are you sure you want to delete this video\n from your video list?')) {
      this.videoService.deleteVideo(vid).subscribe(
        deletedVideo => {
          this.videos = this.videos.filter(v => v._id !== deletedVideo._id);
        }
      );
      this.selectedVideo = null;
      this.ngOnInit();
    }
  }

  newVideo(): void {
    this.hidenewVideo = false;
  }

  searchVideo(): void {
    sessionStorage.setItem('searched', JSON.stringify(this.searchedText));
    this.videos = this.refreshedVideos;
    this.videos = this.videos.filter(v => v.title.toLowerCase().indexOf(this.searchedText.toLowerCase()) > -1);

    this.config = {
      id: 'first',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.videos.length
    };
  }

}
