import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  tags?: Tag[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags=this.foodService.getAllTags();
  }

}
