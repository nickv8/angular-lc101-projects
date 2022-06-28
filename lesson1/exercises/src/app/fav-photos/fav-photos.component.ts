import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://media.istockphoto.com/vectors/bunch-of-balloons-in-cartoon-flat-style-isolated-on-white-background-vector-id858514508?k=20&m=858514508&s=612x612&w=0&h=bw6TxlEXjEBhR5B6va85lmGd5QoYDbdTwlRLc0yC6Y8=';
  image3 = 'https://parispeaceforum.org/wp-content/uploads/2021/10/NET-ZERO-SPACE-INITIATIVE-1.png';

  constructor() { }

  ngOnInit() {
  }

}