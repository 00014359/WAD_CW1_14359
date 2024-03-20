import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { FeedbackServiceService } from '../feedback-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule ],  
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  constructor(
    private r :ChangeDetectorRef
  ){}
  feedbacksService = inject(FeedbackServiceService);
activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  
  cate : any;
  cID:number=0;
categoryObject:any;
selected:any;
  
  editFeedback:any={
    feedbackId:0,
    userId:0,
    feedbackContent:"",
    feedbackDate: "",
    user:{
        userId:0,
        username:"",
        email:"",
    }
  }
  ngOnInit(): void {
    this.feedbacksService.getByID(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editFeedback = result;
    
      this.selected = this.editFeedback.userId;
      // Call detectChanges() after updating values
      this.r.detectChanges();
      console.log(this.editFeedback)
    });

    this.feedbacksService.getAllUsers().subscribe((result) => {
      this.categoryObject = result;
    
      // Call detectChanges() after updating values
      this.r.detectChanges();
    });
  }

  toHome() {
    this.router.navigateByUrl("home");
  }

  edit() {
    this.editFeedback.userId= this.cID;
    // Call detectChanges() after updating values
    this.r.detectChanges();
    this.editFeedback.user = this.categoryObject[this.findIndexByID(this.categoryObject, this.cID)];
    this.feedbacksService.edit(this.editFeedback.feedbackId, this.editFeedback).subscribe((res) => {
      alert("Changes have been updated");
      this.router.navigateByUrl("home");
    });
  }
   findIndexByID(jsonArray:any[], indexToFind:number): number{
    return jsonArray.findIndex((item) => item.userId === indexToFind)
  }
  
 
  
}
