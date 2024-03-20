import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { FeedbackServiceService } from '../feedback-service.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {  FormControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule, MatDatepickerModule ],  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  feedbacksService = inject(FeedbackServiceService);

  router = inject(Router);
  
  cate : any;
  cID:number=0;

  
  createFeedback:any={
    feedbackId:0,
    userId:0,
    feedbackContent:"",
    feedbackDate: "",
  }
  ngOnInit(){
    this.feedbacksService.getAllUsers().subscribe((result)=>{
      this.cate = result

          console.log(this.createFeedback)

    });
  };
  
  create(){
    console.log(this.createFeedback)
    this.createFeedback.userId=this.cID
    this.feedbacksService.create(this.createFeedback).subscribe(result=>{
      alert("Item saved!")
      this.router.navigateByUrl("home")
    });
  };
  
  }

