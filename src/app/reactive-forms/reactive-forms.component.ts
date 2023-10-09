import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]],
      age: ['', [Validators.required, Validators.minLength]],
    });
  }

  get emailControl() {
    return this.userForm.controls['email'];
  }

  get emailControlIsInvalid() {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  get ageControl() {
    return this.userForm.controls['age'];
  }

  get ageControlIsInvalid() {
    return this.ageControl.invalid && this.ageControl.touched;
  }

  onSubmit(): void {
    console.log(this.userForm.controls['email'].value);
    console.log(this.userForm.controls['contraseña'].value);
    console.log(this.userForm.controls['age'].value);

    if (this.userForm.invalid) {
      alert('Completa todos los campos del formulario');
    } else if (this.userForm.valid) {
      console.log(this.userForm.value);
      alert('Formulario enviado!');
    }
  }
}
