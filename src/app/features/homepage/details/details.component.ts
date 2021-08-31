import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  {

  details = {
    img: 'https://m.media-amazon.com/images/I/61I7Rx1BFEL.jpg',
    name: 'The Book of Kells',
    author: 'Unknown',
    genre: 'Non-fiction',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 8,
    isFavorite: true,
    id: 2
  }

  
  detailsStar = new Array(this.details.rating - 1)
  detailsNoStar = new Array(10 - this.details.rating)

  hide = true

  showHideDetails(){
    this.hide = !this.hide
  }

  OnInit(): void {
  }


  bookBook(){
    console.log('booked')
  }
}
