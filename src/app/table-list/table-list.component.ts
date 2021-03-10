import { Component, OnInit } from '@angular/core';
declare var $: any;
export interface PeriodicElement {
  name: string;
  email: string;
  mobile: string;
  gender: string;
  dob: string;
  city: string;
  address: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Test1', email: 'test1@test.com', mobile: '9874563211', gender: 'Male', dob: '1994/05/04', city: 'Pune', address: 'Kothrud'},
  { name: 'Test2', email: 'test2@test.com', mobile: '9774563212', gender: 'Male', dob: '1994/06/04', city: 'Pune', address: 'Kothrud'},
  { name: 'Test3', email: 'test3@test.com', mobile: '9674563213', gender: 'Kothrud', dob: '1994/08/08', city: 'Pune', address: 'Kothrud'},
  { name: 'Test4', email: 'test4@test.com', mobile: '9574563214', gender: 'Male', dob: '1994/05/04', city: 'Pune', address: 'Kothrud'},
  { name: 'Test5', email: 'test5@test.com', mobile: '9474563215', gender: 'Female', dob: '1994/01/06', city: 'Pune', address: 'Kothrud'},
  { name: 'Test6', email: 'test6@test.com', mobile: '9374563216', gender: 'Male', dob: '1994/03/02', city: 'Pune', address: 'Kothrud'},
  { name: 'Test7', email: 'test7@test.com', mobile: '9274563217', gender: 'Female', dob: '1994/05/05', city: 'Pune', address: 'Kothrud'},
  { name: 'Test8', email: 'test8@test.com', mobile: '9174563218', gender: 'Male', dob: '1994/09/07', city: 'Pune', address: 'Kothrud'},
  { name: 'Test9', email: 'test9@test.com', mobile: '9074563219', gender: 'Female', dob: '1994/08/01', city: 'Pune', address: 'Kothrud'},

];


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'email', 'mobile', 'gender', 'dob', 'city', 'address', 'Action'  ];
  dataSource = ELEMENT_DATA;
  itemToDelete: any;

  constructor() {
  }

  ngOnInit() {
    const retrievedObject = localStorage.getItem('testObject');
    if (retrievedObject != null) {
    ELEMENT_DATA.push(JSON.parse(retrievedObject));
    localStorage.removeItem('testObject');
    }
  }

  openDeleteForm(flag, element) {
    this.itemToDelete = element;
    $('#deleteModal').modal('show');
}

deleteItem() {{

   ELEMENT_DATA =  ELEMENT_DATA.filter(item => item.name !== this.itemToDelete.name );
}

}
}

