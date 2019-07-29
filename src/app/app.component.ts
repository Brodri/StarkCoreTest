import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarkCoreTest';
  arrayData = [
  {"date":this.formatDate(new Date()),"from":"Houston, TX, 33619","to":"Atlanta,GA, 30123","price":"$ 250.00"},
  {"date":this.formatDate(new Date()),"from":"Houston, TX, 33619","to":"Atlanta,GA, 30123","price":"$ 250.00"},
  {"date":this.formatDate(new Date()),"from":"Houston, TX, 33619","to":"Atlanta,GA, 30123","price":"$ 250.00"}
]

formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year + ', 2:04 PM';
}
}


