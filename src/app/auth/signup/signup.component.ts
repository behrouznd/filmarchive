import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
 
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  isLoading$ : Observable<boolean>;
 
  ngOnInit(): void {
    
  }
  onSubmit(form : NgForm){
 
  }
}