import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() currentSlide: number;

  slides = [
    {
      image: 'url(../../assets/images/lounge-thumbnail.jpg)',
      url: 'http://www.lounge.josephmjoyce.me',
      description: `Finds low-key venues that are open late.
      • Uses the Google Maps API.
      • Written in the Angular 7 framework.
      • Languages: Javascript, Typescript, HTML5, CSS3, SASS.
      • User enters their desired location and submits it as a request.
      • Uses Angular’s http module to make RESTful service requests to the Google Maps API.
      • Uses Google Maps’ animations to animate the markers for the locations.
      • Uses Google Maps’ querying to yield location result from Google’s database to be displayed to the user.`,
      githubLink: 'https://github.com/joej326/maps-project'
    },
    {
      image: 'url(../../assets/images/star-wars-thumbnail.jpg)',
      url: 'http://www.starwars.josephmjoyce.me',
      description: `Star Wars Character App
      •  Languages: HTML5, CSS3, SASS, Javascript, Typescript.
      •  Built in Angular.
      •  Makes RESTful API calls to the Star Wars API.
      •  Displays list of characters retrieved from the API.
      •  User can add their own character using Angular Forms.
      •  User can delete characters from the list.`,
      githubLink: 'https://github.com/joej326/max-angular-course2'
    },
    {
      image: 'url(../../assets/images/davis-thumbnail.jpg)',
      url: 'http://www.davis.josephmjoyce.me',
      description: `Clone of UC Davis’ Website in 2018.

      • HTML5 + CSS3 (SASS)
      • NO FUNCTIONALITY.
      • The purpose of this project was to clone the design of this website.
      • Uses a video element in the HTML
      • Makes use of dropdowns.
      • Uses various CSS3 animations upon mouse interaction.
      `,
      githubLink: 'https://github.com/joej326/UCdavis-clone'
    },
    {
      image: 'url(../../assets/images/peets-thumbnail.jpg)',
      url: 'http://www.coffee.josephmjoyce.me',
      description: `Clone of Peet’s Coffee Website in 2018.

      • HTML5 + CSS3 (SASS)
      • NO FUNCTIONALITY.
      • The purpose of this project was to clone the design of this website.
      • Uses various CSS3 animations upon mouse interaction.
      • Slideshow makes use of React.js componentization.
      `,
      githubLink: 'https://github.com/joej326/peets-clone'
    },
    {
      image: 'url(../../assets/images/first-game-thumbnail.jpg)',
      url: 'http://www.game.josephmjoyce.me',
      description: `The Unhealthy Eater
      • Simple game I built with 100% vanilla javascript.
      • NO 3rd party code/packages/libraries. (no jQuery etc.)

      Controls:
      • Use arrow keys to avoid the apple slices and collect the junk food.`,
      githubLink: 'https://github.com/joej326/first-game'
    },
    {
      image: 'url(../../assets/images/longboards-thumnail.jpg)',
      url: 'http://www.longboards.josephmjoyce.me',
      description: `Longboard Website Clone.
      •  Languages: HTML5, CSS3, SASS, Javascript.
      •  Built in AngularJS.
      •  Node.js backend that makes queries to a database.
      •  Certain longboards are displayed based on user selection.
      •  Makes RESTful API service calls to the Node.js backend.
      •  Express used on the backend.`,
      githubLink: 'https://github.com/joej326/personal_project'
    },
    {
      image: 'url(../../assets/images/exec-thumbnail.jpg)',
      url: 'http://www.exec.josephmjoyce.me',
      description: `Executive App
      •  Group Project consisting of three people.
      •  Languages: HTML5, CSS3, SASS, Javascript.
      •  Built in React.js.
      •  Makes RESTful API calls to the backend (backend not written by me).
      •  I created the task list where tasks can be created and dropped to any list.
      •  I also created dynamic graphs using 3rd party package charts.js. `,
      githubLink: null
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeSlide(direction: number) {
    if (this.currentSlide === 0 && direction === -1) {
      this.currentSlide = this.slides.length - 1;
    } else if (this.currentSlide === this.slides.length - 1 && direction === 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += direction;
    }
  }

}
