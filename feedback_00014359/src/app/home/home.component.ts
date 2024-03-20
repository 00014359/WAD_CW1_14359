import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackServiceService } from '../feedback-service.service';
import { Feedback } from '../feedbacks';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router);
  feedbackService=inject(FeedbackServiceService);
  items:Feedback[]=[];
ngOnInit(){
  this.feedbackService.getAllFeedbacks().subscribe((result)=>{this.items = result});
  console.log(this.items)
  }

derivedColummns:string[]=['FeedbackId', 'UserName', 'FeedbackContent', 'FeedbackDate',  'Actions'];

EditClicked(itemID:number){
  console.log(itemID, "from edit");
  this.router.navigateByUrl("/edit/"+itemID);
};
DeleteClicked(itemID:number){
  console.log(itemID, "from delete");
  this.router.navigateByUrl("/delete/"+itemID);
};
DetailsClicked(itemID:number){
  console.log(itemID, "from details");
  this.router.navigateByUrl("/details/"+itemID);
}
}
