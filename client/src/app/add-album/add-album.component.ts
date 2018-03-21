import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService} from '../services/album.service'

import * as $ from 'jquery';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  
  nplus;

  constructor(private route: Router, private albumS: AlbumService) { }
  ngOnInit() {
  }
  createAlbum(formAlbum) {
    this.albumS.addNewAlbum(formAlbum.value)
      .subscribe(albumCreated => {
        console.log("mi album created")
        console.log(albumCreated);
        this.route.navigate(['/add-photos', albumCreated._id]);
      });
    }
  }
  
                    // addNewInput() {
                    //   $(document).ready(function(){
                    //     $('.albumForm').append(`<p> Img<input type='file' name='file${this.nplus}' ng2FileSelect [uploader]='uploader' /></p>`)
                    //     });
                    //     this.nplus++;
                    //  }