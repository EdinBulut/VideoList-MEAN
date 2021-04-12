# Video List (MEAN App)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Detailed instruction how to run this app

1. Find in terminal folder where you want to download this app and
run `git clone https://github.com/EdinBulut/VideoList-MEAN.git`

`.../SELECTED_FOLDER> git clone https://github.com/EdinBulut/VideoList-MEAN.git`


2. In SELECTED_FOLDER you will get project folder VideoList-MEAN. Navigate to project folder and
run `npm install` to get node_modules folder

`(.../SELECTED_FOLDER/VideoList-MEAN> npm install)`


3. Run `ng build --prod` to get dist folder

`(.../SELECTED_FOLDER/VideoList-MEAN> ng build --prod`


4. Run `node server` to connect with database and to start running server

`(.../SELECTED_FOLDER/VideoList-MEAN> node server`


5. Server is going to listen on localhost:3000 so you need to navigate in your browser to `http://localhost:3000/` and that is it.
App will show in front of your eyes if you have done these 5 steps correctly.




## About app

MEAN stack App where you can:
 - add new video, 
 - edit or delete existing video,
 - search for a specific video

When you made some of the above changes you'll get exported json file with all videos and with every new changes, json file will be updated.
Json file will be saved in JSON folder as videos.json.   
(`.../VideoList-MEAN/JSON/videos.json`)

When the app loads, you will get page which is divided in two parts:
  - part with details of selected video on left
  - part with list of videos on right

On left part, title and description of video are showed and you can watch selected video.
When you click on edit button which is on the right side of the title, you can change video details or delete video.

On right part, pagination is included. It shows 5 videos per page.
When you click on one of the videos from list, left part is immediatelly changed with details of new selected video.

Above the list there is button "+ New Video".
When you click it, form for adding new video will be showed instead of video details part.

On adding or editing video `Template Driven Form` is used.










## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
