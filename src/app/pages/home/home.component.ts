import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) 
  {
    this.http.get('assets/setting.json').subscribe((res:any)=>{
     this.cImgList = res.caurosel ? res.caurosel: [];
    });
   }
  cHeight = 500;
  cImgList: any[] = [];
  ngOnInit(): void {
    this.cHeight = window.innerHeight-220;
    this.cImgList = [
      {
      img:'../../../assets/caurosel/1.jpg',
      title:'Lab',
      text:'This is a sample text'
    },
    {
      img:'../../../assets/caurosel/2.jpg',
      title:'Lab',
      text:'This is a sample text'
    },
    {
      img:'../../../assets/caurosel/3.jpg',
      title:'Lab',
      text:'This is a sample text'
    },
    {
      img:'../../../assets/caurosel/4.jpg',
      title:'Lab',
      text:'This is a sample text'
    }
  ];
  }

@HostListener('window:resize', ['$event'])
onResize() {
  this.cHeight = window.innerHeight-220;
}
}
