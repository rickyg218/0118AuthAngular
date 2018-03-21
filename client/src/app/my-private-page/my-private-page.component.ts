import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { AlbumService } from '../services/album.service'

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = '';
  albumList: any;
  constructor(private session: SessionService, private albumS : AlbumService) { }

  ngOnInit() {
    this.session.loggedIn()
      .subscribe(user => {
        this.username = user.username;
        this.albumS.getMyAlbum()
          .subscribe(myAlbums =>{
            console.log(myAlbums);
             this.albumList = myAlbums;
          });
    });

  }


}
