import { Component, OnInit, NgZone } from '@angular/core';
import { YoutubeAuthService } from './../youtube-auth.service';
import { Router } from "@angular/router"
import * as alertify from 'alertifyjs';

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
  loading = true;
  error = false;
  errorStatus;

  constructor(private youtubeAuth: YoutubeAuthService, private router: Router, private ngZone: NgZone) {
    if (this.youtubeAuth.getProfile() == false) {
      console.log("redirection to ''");
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.getPlaylists();
  }

  //Permet la récupération des playlists du compte connecté
  getPlaylists() {

    this.loading = true;
    this.error = false;
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
              that.loading = false;
              that.playlistsUser = response["result"]["items"];
              if (that.playlistsUser != undefined) {
                console.log(that.playlistsUser);
                document.getElementById("lien-playlists").click();
              }
            },
              (error) => {
                that.ngZone.run(() => {
                  that.loading = true;
                  that.error = true;
                  that.errorStatus = error.status;
                })
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

  //Récupère des vidéos d'une playlist
  getVideosPlaylists(idPlaylists: string) {
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
              if (response.result.pageInfo.totalResults > 0) {
                that.ngZone.run(() => {
                  that.videosPlaylists = response["result"]["items"];
                  document.getElementById("lien-playlists").click();
                });
              } else {
                alertify.notify("Aucune vidéos trouvée pour cette playlist", "message", 5);
                that.ngZone.run(() => {
                  that.videosPlaylists = undefined;
                });
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

  // Supprime une vidéo d'une playlist
  onDeleteVideosPlaylist(idVideoPlaylist: string) {
    if (confirm("Êtes vous sûr de vouloir supprimer cette vidéo de la playlist ?")) {
      console.log(idVideoPlaylist);
      this.deleteVideoPlaylist(idVideoPlaylist);
    }
  }
  // Supprime une vidéo d'une playlist
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
              if (response.status == 204) {
                alertify.notify("Vidéo supprimée de la playlist", "success", 5);
                that.ngZone.run(() => {
                  that.videosPlaylists = undefined;
                  that.getPlaylists();
                });
              }
            },
              (error) => {
                if (error.status == 404) {
                  alertify.notify("Erreur lors de la suppression de la vidéo de la playlist", "error", 15);
                }
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
  // Permet d'éditer une playlist
  editerPlaylists(playlist: any) {
    this.playlistModif = playlist;
    this.affichageFormulaireUpdate = true;
    this.router.navigateByUrl("modification-playlist/" + this.playlistModif.id);
  }

  //Redirige vers le formulaire pour créer une nouvelle playlist
  nouvellePlaylist() {
    this.router.navigateByUrl("nouvelle-playlist");
  }
}
