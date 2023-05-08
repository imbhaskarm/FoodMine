import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

//activated routed is for reading from the routes
//router for writing to routes or urls
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   
  searchTerm: String="";
  constructor(private route:ActivatedRoute,private router: Router) { 
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log(" init called");
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      {
        this.searchTerm=params['searchTerm'];
      console.log(" inner init called");
      }
    })
  }
  search():void{
    console.log(" search  called");
    if(this.searchTerm)
    {
      this.router.navigateByUrl('/search/'+this.searchTerm);
    }
  }



}
