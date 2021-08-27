

import {BlogService} from '../shared/services/blog.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  blogForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private blogService: BlogService,
              private router: Router) {
  }

  get f(): any {
    return this.blogForm.controls;
  }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.blogForm.invalid) {
      return;
    }
    this.blogService.add(this.blogForm.value).subscribe(res => {
      this.router.navigate(['/list']);
    }, ex => {
      console.log(ex);
    });
  }

  onReset(): void {
    this.submitted = false;
    this.blogForm.reset();
  }
}
