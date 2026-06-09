import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputText } from 'primeng/inputtext';
import { AuthService } from '../../../services/auth.service';
import { WorkContextService } from '../../../services/work-context.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputText],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private workContextService: WorkContextService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Completa email y contraseña'
      });
      return;
    }

    this.isSubmitting = true;

    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'Sesion iniciada correctamente'
        });
        this.workContextService.loadContext().subscribe({
          next: context => this.router.navigate([context.temporaryPassword ? '/change-password' : '/shifts-view']),
          error: () => this.router.navigate(['/shifts-view'])
        });
      },
      error: () => {
        this.isSubmitting = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Email o contraseña incorrectos'
        });
      }
    });
  }
}
