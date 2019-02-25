import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private apiyoutube: YoutubeAuthService, private router: Router, private ngZone: NgZone) {
    //Redirection en cas de non connexion
    if (this.apiyoutube.getProfile() == false) {
      this.router.navigate(['']);
    }

  }
  // Initialisation du composant
  ngOnInit() {
    // Récupération de l'id de la playlist à récuperer
    this.route.params.subscribe(params => {
      this.id_playlist = params;
    });
    this.apiyoutube.getApiService().subscribe(() => {
      // Instance du composant
      let that = this;
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {
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
            var data = {
              path: "https://www.googleapis.com/youtube/v3/playlists",
              method: "GET",
              params: {
                part: "snippet,contentDetails",
                id: that.id_playlist.id
              }
            }
            gapi.client.request(data).then((response) => {
              //On revient dans la zone Angular pour mettre à jour les données sinon elles ne sont pas mises à jour dans la vue
              that.ngZone.run(() => {
                that.playlistModif = response["result"]["items"];
                if (that.playlistModif != undefined) {
                  that.affichageFormulaireUpdate = true;
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
