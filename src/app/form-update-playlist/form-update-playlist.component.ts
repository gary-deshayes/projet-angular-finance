import { Component, OnInit, Input } from '@angular/core';
import { YoutubeAuthService } from './../youtube-auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-update-playlist',
  templateUrl: './form-update-playlist.component.html',
  styleUrls: ['./form-update-playlist.component.scss']
})
export class FormUpdatePlaylistComponent implements OnInit {
  @Input() playlist;

  inputTitle: string;
  inputDescription: string;
  inputTags: string;
  selectStatus: number;
  playlistModif;
  

  constructor(private youtubeAuth: YoutubeAuthService, private router: Router) { 
    
  }

  ngOnInit() {
    this.playlistModif = this.playlist[0];
  }

  modifierPlaylist(e){
    if(this.inputTitle == undefined && (this.selectStatus == undefined || this.selectStatus == 0)){
      alert("Veuillez au moins remplir le titre et le statut");
    }else{
      let status;
      switch(this.selectStatus){
        case 0:
          status = "private";
        break;
        case 1:
          status = "public";
        break;
      }
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
                    "tags": that.inputTags,
                  },
                  "status": 
                  {
                    "privacyStatus": status
                  }
                }
              }
              console.log(data);
              gapi.client.request(data).execute((response) => {
                if(response.error != undefined){
                  alert("Erreur lors de la mise à jour de la playlist");
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

}
