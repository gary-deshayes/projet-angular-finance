import { Component, OnInit, Input, NgZone } from '@angular/core';
import { YoutubeAuthService } from './../youtube-auth.service';
import { Router } from "@angular/router";
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-form-playlist',
  templateUrl: './form-playlist.component.html',
  styleUrls: ['./form-playlist.component.scss']
})
export class FormPlaylistComponent implements OnInit {
  @Input() playlist;

  inputTitle: string;
  inputDescription: string;
  inputTags: string;
  selectStatus: number;
  playlistModif;
  ajoutPlaylist = false;

  constructor(private youtubeAuth: YoutubeAuthService, private router: Router, private ngZone: NgZone) {

  }

  ngOnInit() {
    if (this.playlist != undefined) {
      this.playlistModif = this.playlist[0];
      console.log(this.playlistModif);
      this.inputTitle = this.playlistModif.snippet.title;
      this.inputDescription = this.playlistModif.snippet.description;
      let status = this.formatSelectResult(this.playlistModif.status.privacyStatus, 1);
      console.log(status);
      this.selectStatus = status;

    } else {
      this.ajoutPlaylist = true;
    }
  }

  modifierPlaylist(e) {
    if (this.inputTitle == "" || this.selectStatus == 0) {
      alertify.notify("Veuillez au moins remplir le titre et le statut", "error", 15);
    } else {
      let status = this.formatSelectResult(this.selectStatus);
      this.youtubeAuth.getApiService().subscribe(() => {

        let that = this;
        //  on load auth2 client
        gapi.load('client:auth2', {
          callback: function () {
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
              var data = {
                path: "https://www.googleapis.com/youtube/v3/playlists",
                method: "PUT",
                params: {
                  'part': 'snippet,status'
                },
                body: {
                  "id": that.playlistModif.id,
                  "snippet":
                  {
                    "title": that.inputTitle,
                    "description": that.inputDescription,
                  },
                  "status":
                  {
                    "privacyStatus": status
                  }
                }
              }
              gapi.client.request(data).execute((response) => {
                if(response.error != undefined){
                  if (response.error.code == 400) {
                    alertify.notify("Erreur lors de la mise à jour de la playlist", "error", 15);
                  }
                }else{
                  document.getElementById("lien-playlists").click();
                }
              })
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

  ajouterPlaylist(e) {
    if (this.inputTitle == undefined && (this.selectStatus == undefined || this.selectStatus == 0)) {
      alert("Veuillez au moins remplir le titre et le statut");
    } else {
      let status = this.formatSelectResult(this.selectStatus);
      this.youtubeAuth.getApiService().subscribe(() => {

        let that = this;
        //  on load auth2 client
        gapi.load('client:auth2', {
          callback: function () {
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
              var data = {
                path: "https://www.googleapis.com/youtube/v3/playlists",
                method: "POST",
                params: {
                  'part': 'snippet,status'
                },
                body: {
                  "snippet":
                  {
                    "title": that.inputTitle,
                    "description": that.inputDescription
                  },
                  "status":
                  {
                    "privacyStatus": status
                  }
                }
              }
              gapi.client.request(data).execute((response) => {
                if(response.error != undefined){
                  if (response.error.code == 400) {
                    alertify.notify("Erreur lors de l'ajout de la playlist", "error", 15);
                  } 
                } else {
                  document.getElementById("lien-playlists").click();
                }
              })
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
  // Formate le select
  formatSelectResult(idSelect, type = 0) {
    let status;
    if (type == 0) {
      switch (idSelect) {
        case "1":
          status = "private";
          break;
        case "2":
          status = "public";
          break;
        case "3":
          status = "unlisted";
          break;
      }

    } else {
      switch (idSelect) {
        case "private":
          status = "1";
          break;
        case "public":
          status = "2";
          break;
        case "unlisted":
          status = "3";
          break;
      }

    }
    return status;
  }

}
