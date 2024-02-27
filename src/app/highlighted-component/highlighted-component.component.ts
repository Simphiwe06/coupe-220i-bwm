/*import { Component } from '@angular/core';

@Component({
  selector: 'app-highlighted-component',
  standalone: true,
  imports: [],
  templateUrl: './highlighted-component.component.html',
  styleUrl: './highlighted-component.component.css'
})
export class HighlightedComponentComponent {

}
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-highlighted-component',
  templateUrl: './highlighted-component.component.html',
  styleUrls: ['./highlighted-component.component.css']
})
export class HighlightedComponentComponent implements OnInit {
  car: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/car_data.json').subscribe((data: any) => {
      this.car = data;
    });
  }

  filterBy(value: string): void {
    // Filter logic can be added here
  }
}
