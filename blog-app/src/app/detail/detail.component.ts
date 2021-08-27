
import {Blog} from '../shared/model/blog.model';
import {BlogService} from '../shared/services/blog.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  blog = new Blog();

  constructor(private blogService: BlogService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idBlog = this.activatedRoute.snapshot.paramMap.get('id');
    if (idBlog) {
      this.blogService.getById(idBlog).subscribe(res => {
        this.blog = res;
      }, ex => console.log(ex));
    }

  }

}
