import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'mx-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent;

  @Input() placeholder = 'WRITE_FEEDBACK';
  @Input() data = [];
  @Output() public onChange = new EventEmitter();
  @Output() public onClick = new EventEmitter();
  public newValue = '';

  constructor() {
  }

  ngOnInit() {
  }

  public inputChanged($event) {
    this.newValue = $event.detail.value.trim();
    this.onChange.emit(this.newValue);
  }

  public clicked($event) {
    if (!this.newValue) {
      return;
    }
    this.scrollToBottom();
    this.onClick.emit(this.newValue);
    this.newValue = '';
  }


  scrollToBottom() {
    this.content.scrollToBottom(1000);
  }

}
