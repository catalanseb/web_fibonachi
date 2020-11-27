import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formMetodoFibonachi: FormGroup;
  submitted = false;
  valido: boolean = false;
  params: number = 0;
  nesimo: number = 0;

  constructor(private apiService: ApiServiceService ) {}

  ngOnInit(): void {    
    this.resetForm();
  }
  private resetForm() {
    this.formMetodoFibonachi = new FormGroup({
      numero: new FormControl(null, [Validators.required, Validators.min(1)])
    });
    this.submitted = false;
  }
  onKey(event: any) {
    let value = event.target.value; 
    this.valido = (value > 0);
  }
  onSubmit() {
    this.submitted = true;
    if (this.formMetodoFibonachi.invalid) {
      return;
    }

    this.params = this.formMetodoFibonachi.value.numero;
    this.apiService.getEnemFib(this.params).subscribe(resp => {
      this.nesimo = JSON.parse(resp).nesimo;
    });

    this.resetForm();
  }

  get f() { return this.formMetodoFibonachi.controls; }
}
