import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  logo = 'HYCUBE';
  name = 'Nouman Ishtiaq';
  designation = 'Junior Developer';
  constructor() {}

  ngOnInit(): void {}
}
