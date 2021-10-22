import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  logo = 'HYCUBE';
  name = 'Nouman Ishtiaq';
  designation = 'Junior Developer';
  constructor() {}

  ngOnInit(): void {}
}
