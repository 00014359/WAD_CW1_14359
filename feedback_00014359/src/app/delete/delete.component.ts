import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackServiceService } from '../feedback-service.service';
import{MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  feedbackssService = inject(FeedbackServiceService);

  router = inject(Router);
  deleteFeedback:any={
    feedbackId:0,
    userId:0,
    feedbackContent:"",
    feedbackDate: "",
    user:{
        userId:0,
        username:"",
        email:""
    }}
  cate : any;
  cID:number=0;
    serviceFeedback= inject(FeedbackServiceService)
    activatedRoute = inject(ActivatedRoute)
    ngOnInit(){
      this.feedbackssService.getByID(this.activatedRoute.snapshot.params["id"]).subscribe(result=>{
        this.deleteFeedback = result;
        
      });
  
    }
  
    delete(id:number){
      this.feedbackssService.delete(id).subscribe(
        (result) => {
          alert("Item deleted!");
          this.router.navigateByUrl("home");
        },
        (error) => {
          console.error("Error deleting feedback:", error);
          // Handle error (e.g., show error message to user)
        }
      );
    }
}
