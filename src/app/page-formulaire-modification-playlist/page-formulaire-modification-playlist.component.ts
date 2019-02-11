import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { YoutubeAuthService } from './../youtube-auth.service';

@Component({
  selector: 'app-page-formulaire-modification-playlist',
  templateUrl: './page-formulaire-modification-playlist.component.html',
  styleUrls: ['./page-formulaire-modification-playlist.component.scss']
})
export class PageFormulaireModificationPlaylistComponent implements OnInit {

  id_playlist;
  playlistModif;
  affichageFormulaireUpdate = false;

  constructor(private route: ActivatedRoute, private apiyoutube: YoutubeAuthService) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_playlist = params;
    });
    this.apiyoutube.getApiService().subscribe(() => {

      let that = this;
      console.log(that.id_playlist);
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {

          console.log("initialisation ...");
          // On initialise gapi.client
          gapi.client.init(that.apiyoutube.args).then(
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
                part: "snippet,contentDetails",
                id: that.id_playlist.id
              }
            }
            gapi.client.request(data).then((response) => {

              that.playlistModif = response["result"]["items"];
              if (that.playlistModif != undefined) {
                console.log(that.playlistModif[0]);
                that.affichageFormulaireUpdate = true;
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

}
