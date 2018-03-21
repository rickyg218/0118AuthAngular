import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/album/new`
  });
  constructor(private activateRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
      this.activateRoute.params
        .subscribe(params => {
          this.uploader.options.url = `http://localhost:3000/api/photo/newPhoto/${params['idAlbum']}`
        });
  }
  createPhoto(myForm){
    console.log('subiendo');
    console.log(this.uploader);
    this.uploader.onBuildItemForm = (file, form) => {
      form.append('title', myForm.value.title)
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.route.navigate(['/private']);
    };
  }
}
