import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeAuthService } from './../youtube-auth.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-api-youtube-video',
  templateUrl: './api-youtube-video.component.html',
  styleUrls: ['./api-youtube-video.component.scss']
})
export class ApiYoutubeVideoComponent implements OnInit {

  apiKey = "AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc";
  videoId = this.route.snapshot.paramMap.get('id');
  dangerousVideoUrl = 'http://www.youtube.com/embed/' + this.videoId;
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  isLogged = false;
  public videos = [];
  getingRating;
  subscription = false;
  idSubscription;

  args = {
    clientId: '238523767005-90jndv6p8oot3la91kv9u7kg9b3kaj2i.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly',
    apiKey: "AIzaSyBQfBCA8tKpCL9uQsZNEjYFAGIcrMIh-ak"
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer, private youtubeAuth: YoutubeAuthService, private router: Router, private ngZone: NgZone) {
    if (this.youtubeAuth.getProfile() != false) {
      this.isLogged = true;
    }
  }

  ngOnInit() {
    this.getVideo();
    this.getRate(this.videoId);

  }

  public getVideo() {
    this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + this.videoId + "&key=" + this.apiKey)
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
        this.getSubscription(this.videos[0].snippet.channelId);
      });
  }

  public getSubscription(idChannel) {

    this.youtubeAuth.getApiService().subscribe(() => {

      let that = this;
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {

          // On initialise gapi.client
          gapi.client.init(that.args);
          if (gapi.client != undefined) {
            var data = {
              path: "https://www.googleapis.com/youtube/v3/subscriptions",
              method: "GET",
              params: {
                part: "snippet,contentDetails",
                mine: true,
                forChannelId: idChannel
              }
            }
            gapi.client.request(data).then((response) => {
              that.ngZone.run(() => {
                if (response.result.items.length == 0) {
                  that.subscription = false;
                } else {
                  that.subscription = true;
                  that.idSubscription = response.result.items[0].id;
                }
              })
            },
              (reason) => {
                return reason;
              });
          }

        },
        onerror: function () {
          // Handle loading error.
          alert('gapi.client failed to load!');
        },
        timeout: 5000, // 5 seconds.
        ontimeout: function () {
          // Handle timeout.
          alert('gapi.client could not load in a timely manner!');
        }
      });
    });

  }

  getRate(idVideo: string) {
    this.youtubeAuth.getApiService().subscribe(() => {

      let that = this;
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {
          // On initialise gapi.client
          gapi.client.init(that.args);
          if (gapi.client != undefined) {
            var data = {
              path: "/youtube/v3/videos/getRating",
              method: "GET",
              params: {
                id: idVideo
              }
            }
            gapi.client.request(data).then((response) => {
              that.ngZone.run(() => {
                that.getingRating = response["result"]["items"];
                if (that.getingRating != undefined) {
                }
              })
            },
              (reason) => {
                return reason;
              });
          }

        },
        onerror: function () {
          // Handle loading error.
          alert('gapi.client failed to load!');
        },
        timeout: 5000, // 5 seconds.
        ontimeout: function () {
          // Handle timeout.
          alert('gapi.client could not load in a timely manner!');
        }
      });
    });
  }

  postRate(idVideo: string, type: string) {
    this.youtubeAuth.getApiService().subscribe(() => {

      let that = this;
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {
          // On initialise gapi.client
          gapi.client.init(that.args);
          if (gapi.client != undefined) {
            var data = {
              path: "/youtube/v3/videos/rate",
              method: "POST",
              params: {
                id: idVideo,
                rating: type
              }
            }
            gapi.client.request(data).then((response) => {
              if (response.status == 204) {
                alertify.notify(type + " envoyé !", "success", 10);
              }

            },
              (reason) => {
                return reason;
              });
          }

        },
        onerror: function () {
          // Handle loading error.
          alert('gapi.client failed to load!');
        },
        timeout: 5000, // 5 seconds.
        ontimeout: function () {
          // Handle timeout.
          alert('gapi.client could not load in a timely manner!');
        }
      });
    });


  }

  public postAbonnement(value) {
    this.youtubeAuth.getApiService().subscribe(() => {

      let that = this;
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {
          // On initialise gapi.client
          gapi.client.init(that.youtubeAuth.args);
          if (gapi.client != undefined) {
            var data;
            if (value == true) {
              data = {
                path: "https://www.googleapis.com/youtube/v3/subscriptions?part=snippet",
                method: "POST",
                body: {
                  "snippet":
                  {
                    "resourceId":
                    {
                      "kind": "youtube#channel",
                      "channelId": that.videos[0].snippet.channelId
                    }
                  }
                }
              }

            } else {
              data = {
                path: "https://www.googleapis.com/youtube/v3/subscriptions?part=snippet",
                method: "DELETE",
                params: {
                  "id": that.idSubscription
                }
              }
            }

            gapi.client.request(data).then((response) => {
              that.ngZone.run(() => {
                if (response.status == 200) {
                  that.subscription = true;
                  that.idSubscription = response.result.id;
                  alertify.notify("Abonnement réussi", "success", 5);
                }
                if(response.status == 204){
                  that.subscription = false;
                  that.idSubscription = undefined;
                  alertify.notify("Désabonnement réussi", "success", 5);

                }
              })
            },
              (reason) => {
                return reason;
              });
          }

        },
        onerror: function () {
          // Handle loading error.
          alert('gapi.client failed to load!');
        },
        timeout: 5000, // 5 seconds.
        ontimeout: function () {
          // Handle timeout.
          alert('gapi.client could not load in a timely manner!');
        }
      });
    });

  }

}
