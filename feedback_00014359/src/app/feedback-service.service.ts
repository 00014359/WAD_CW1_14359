import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Feedback } from './feedbacks';



@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {
httpClient= inject(HttpClient)
  constructor() { }
  getAllFeedbacks(){
    return this.httpClient.get<Feedback[]>( "http://localhost:5062/api/Feedback/GetAll" )
  };
  getByID(id:number){
    return this.httpClient.get<Feedback>("http://localhost:5062/api/Feedback/GetById/" + id)
  };

  edit(id:number, item:Feedback){
    return this.httpClient.put("http://localhost:5062/api/Feedback/Update/${id}", item)
  };

  delete(id:number){
    return this.httpClient.delete("http://localhost:5062/api/Feedback/Delete?id= "+id)
  };
  create(item:Feedback){
    console.log(item)
    return this.httpClient.post<Feedback>("http://localhost:5062/api/Feedback/Create", item )
  };

  getAllUsers(){
    return this.httpClient.get("http://localhost:5062/api/User/GetAll")
  };
}

