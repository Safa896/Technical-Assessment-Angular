import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../model/blog.model';
import {Observable} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class BlogService {

  readonly baseURL = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) {
  }

  add(bg: Blog): Observable<any> {
    return this.http.post(this.baseURL + '/create', bg);
  }

  getList(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseURL);
  }

  getById(id: string): Observable<Blog> {
    return this.http.get<Blog>(this.baseURL + '/' + id);
  }


}
