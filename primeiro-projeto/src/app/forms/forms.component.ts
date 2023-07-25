import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public foodList: Array<{ name: string }> = [
    { name: "x-salada" },
    { name: "x-bacon" },
    { name: "coxinha" }
  ];

  public submitForm(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }
}
