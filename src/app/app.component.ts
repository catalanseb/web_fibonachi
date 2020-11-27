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

  constructor(private apiService: ApiServiceService ) {}

  ngOnInit(): void {
    this.apiService.getEnemFib(7).subscribe(resp => {
      console.log(JSON.parse(resp).nesimo);
    });
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


  }

  get f() { return this.formMetodoFibonachi.controls; }
}
