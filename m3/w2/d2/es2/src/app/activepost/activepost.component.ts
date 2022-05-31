import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPosts } from '../post.service';

@Component({
  selector: 'app-activepost',
  templateUrl: './activepost.component.html',
  styleUrls: ['./activepost.component.scss']
})
export class ActivepostComponent implements OnInit {

  posts!:Post[] 

  constructor() { 
    getPosts()
      .then(res =>{
        this.posts = res.filter((p:Post) => p.active)
      })
    
  }

  ngOnInit(): void {
  }

}
