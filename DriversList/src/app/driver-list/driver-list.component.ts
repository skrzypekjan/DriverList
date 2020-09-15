import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
  drivers: Observable<Driver[]>;

  constructor(private driverService: DriverService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.drivers = this.driverService.getDriversList();
  }

}
