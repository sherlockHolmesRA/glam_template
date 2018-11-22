import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sec1',
  templateUrl: './sec1.component.html',
  styleUrls: ['./sec1.component.css']
})
export class Sec1Component implements OnInit {

  constructor(private dataservice: DataService) {}
  datas;

  ngOnInit() {
    this.dataservice.getdata().subscribe(res => {
      // console.log(res.json());
      this.datas = res.json().data;
    });
  }

}
