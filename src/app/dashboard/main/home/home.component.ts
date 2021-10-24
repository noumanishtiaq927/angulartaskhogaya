import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  text = '';
  data = [
    {
      title: 'total users',
      number: 12390,
      value: 18,
      colors: 'purpleCard',
      iconname: 'face',
    },
    {
      title: 'total rooms',
      number: 1200,
      value: 50,
      colors: 'orangeCard',
      iconname: 'hotel',
    },
    {
      title: 'total departments',
      number: 120,
      value: 90,
      colors: 'greenCard',
      iconname: 'home',
    },
    {
      title: 'total designation',
      number: 90,
      value: 65,
      colors: 'blueCard',
      iconname: 'person',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
