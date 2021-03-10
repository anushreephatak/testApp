import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addStudent: FormGroup;
  titleAlert = 'This field is required';
  post: any = '';
  city: { value: string; viewValue: string; }[];

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  selectedCity: any;
  gender: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.options = formBuilder.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
     this.addStudent = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
      mobile: [null, Validators.required],
      gender: [null, ''],
      dob: [null, Validators.required],
      city: [null, ''],
      address: [null, ''],

    });

     this.city = [
      {value: 'Pune', viewValue: 'Pune'},
      {value: 'Mumbai', viewValue: 'Mumbai'},
      {value: 'Nashik', viewValue: 'Nashik'},
      {value: 'Satara', viewValue: 'Satara'}
    ];
  }

  onChangeCity(c) {
    this.selectedCity = c.value;

  }

  radioChange(value) {
    this.gender = value.value;
 }

  get f() { return this.addStudent.controls; }



  onSubmit(post) {
    this.post = post;
    if (this.addStudent.invalid) {
      return;
    } else {
    //  console.log("gender",this.options.value);
    const StoreData = {
        name: this.addStudent.value.name,
        email: this.addStudent.value.email,
        mobile: this.addStudent.value.mobile,
        city: this.selectedCity,
        gender : this.gender,
        dob: this.addStudent.value.dob,
        address: this.addStudent.value.address

     };
    localStorage.setItem('testObject', JSON.stringify(StoreData));
    this.router.navigateByUrl('/list');
    }
  }

}
