import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { getRouteParams } from 'src/app/helpers/get-route-params';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public form: FormGroup = this.formBuilder.group({
    email: ['felipe.silva@gmail.com'],
    password: ['123']
  });

  public id: number = getRouteParams('id');

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.form.value.email);
    console.log(this.id);
  }
}
