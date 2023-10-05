import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: ['email@gmail.com'], // Usa un array en lugar de formBuilder.control
      password: ['1234'], // Usa un array en lugar de formBuilder.control
    });
  }

  onSubmit(): void {
    console.log(this.userForm.value); // Corrige el error de sintaxis aquí
  }
}
