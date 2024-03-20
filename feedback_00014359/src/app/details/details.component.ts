import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackServiceService } from '../feedback-service.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsFeedback:any={
    feedbackId:0,
    feedbackContent:"",
    feedbackDate: "",
    userId:0,
    user:{
        userId:0,
        username:"",
        email:""
    }}
  serviceFeedback= inject(FeedbackServiceService)
  activatedRoute = inject(ActivatedRoute)
  ngOnInit(){
    this.serviceFeedback.getByID(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem)=>{
      this.detailsFeedback=resultedItem
    });
  }
}
