import { Component, OnInit } from '@angular/core';
import { SseService } from './sse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  messages = [];

  constructor(private service: SseService) {}

  ngOnInit() {

    // this.service.getServerSentEvents().subscribe((event) => {
    //   const data = JSON.parse(event.data);
    //   console.log(data);
    // });

    // this.service.getAllMessages().subscribe((event) => {
    //   const data = JSON.parse(event.data);
    //   console.log(data);
    // });

  }
}
