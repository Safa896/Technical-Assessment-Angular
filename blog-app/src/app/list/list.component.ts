
import {BlogService} from '../shared/services/blog.service';
import {Blog} from '../shared/model/blog.model';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  blogs: Blog[];
  temp: Blog[];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getList().subscribe(data => {
      this.blogs = data;
      this.temp = data;
    }, ex => console.log(ex));
  }

  onFilter(event: any): void {
    console.log( event.target.value);

    const val = event.target.value.toLowerCase().trim();
    const count = this.blogs.length;
    const keys = Object.keys(this.temp[0]);
    const temp = this.temp.filter(item => {
      for (let i = 0; i < keys.length; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.blogs = temp;
  }
}
