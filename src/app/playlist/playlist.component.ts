import { Component, OnInit } from '@angular/core';
import { YoutubeAuthService } from './../youtube-auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlistsUser;
  videosPlaylists;
  affichageFormulaireUpdate = false;
  playlistModif;



  constructor(private youtubeAuth: YoutubeAuthService, private router: Router) {
    if (this.youtubeAuth.getProfile() == false) {
      console.log("redirection to ''");
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.getPlaylists();

  }
  getPlaylists() {
    this.youtubeAuth.getApiService().subscribe(() => {

      let that = this;
      console.log("subscribe passed");
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {

          console.log("initialisation ...");
          // On initialise gapi.client
          gapi.client.init(that.youtubeAuth.args).then(
            (value) => {
              console.log(value)
            },
            (reason) => {
              console.log(reason)
            }
          );
          if (gapi.client != undefined) {
            console.log("Gapi has loaded !");
            var data = {
              path: "https://www.googleapis.com/youtube/v3/playlists",
              method: "GET",
              params: {
                part: "snippet",
                mine: true
              }
            }
            gapi.client.request(data).then((response) => {

              that.playlistsUser = response["result"]["items"];
              if (that.playlistsUser != undefined) {
                console.log(that.playlistsUser);
                document.getElementById("lien-playlists").click();
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

  getVideosPlaylists(idPlaylists: string) {
    console.log(idPlaylists);

    this.youtubeAuth.getApiService().subscribe(() => {

      let that = this;
      console.log("subscribe passed");
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {

          console.log("initialisation ...");
          // On initialise gapi.client
          gapi.client.init(that.youtubeAuth.args).then(
            (value) => {
              console.log(value)
            },
            (reason) => {
              console.log(reason)
            }
          );
          if (gapi.client != undefined) {
            console.log("Gapi has loaded !");
            var data = {
              path: "https://www.googleapis.com/youtube/v3/playlistItems",
              method: "GET",
              params: {
                part: "snippet",
                playlistId: idPlaylists,
                maxResults: 25
              }
            }
            gapi.client.request(data).then((response) => {
              that.videosPlaylists = response["result"]["items"];
              document.getElementById("lien-playlists").click();

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

  onDeleteVideosPlaylist(idVideoPlaylist: string) {
    if (confirm("Êtes vous sûr de vouloir supprimer cette vidéo ?")) {
      console.log(idVideoPlaylist);
      this.deleteVideoPlaylist(idVideoPlaylist);

    }
  }

  deleteVideoPlaylist(idVideoPlaylist: string) {
    this.youtubeAuth.getApiService().subscribe(() => {

      let that = this;
      console.log("subscribe passed");
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {

          console.log("initialisation ...");
          // On initialise gapi.client
          gapi.client.init(that.youtubeAuth.args).then(
            (value) => {
              console.log(value)
            },
            (reason) => {
              console.log(reason)
            }
          );
          if (gapi.client != undefined) {
            console.log("Gapi has loaded !");
            var data = {
              path: "https://www.googleapis.com/youtube/v3/playlistItems",
              method: "DELETE",
              params: {
                id: idVideoPlaylist
              }
            }
            gapi.client.request(data).then((response) => {
              console.log(response);

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

  editerPlaylists(playlist: any) {
    this.playlistModif = playlist;
    this.affichageFormulaireUpdate = true;
    this.router.navigateByUrl("modification-playlist/" + this.playlistModif.id);
    
  }

}
