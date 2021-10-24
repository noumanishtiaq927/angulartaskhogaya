import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild('topcards') cardelement: ElementRef | undefined;
  constructor() {}
  @Input() dynamicName = '';
  @Input() iconname = '';
  @Input() title = '';
  @Input() number = 9;
  @Input() value = 40;
  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.cardelement);
  }
}
