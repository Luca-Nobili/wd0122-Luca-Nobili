import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPosts } from '../post.service';

@Component({
  selector: 'app-inactivepost',
  templateUrl: './inactivepost.component.html',
  styleUrls: ['./inactivepost.component.scss']
})
export class InactivepostComponent implements OnInit {
  posts!: Post[] 
  constructor() { 
    getPosts()
    .then(res =>{
      this.posts = res.filter((p:Post) => !p.active)
    })
  }

  ngOnInit(): void {
  }

}
