import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { CritiqueService } from '../Service/critique.service';
import { AuthService } from '../Service/auth.service';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MAT_DIALOG_DATA, MatDialogActions } from '@angular/material/dialog';


@Component({
  selector: 'app-critique-form',
  templateUrl: './critique.form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule, MatCardModule, MatDialogActions],
  styleUrls: ['./critique.form.component.scss']
  
})
export class CritiqueFormComponent implements OnInit {
  public critiques: Observable<CritiqueInterface[]> = new Observable();
  public critiqueForm: FormGroup;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : {attraction_id : number},
    private critiqueService: CritiqueService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public authService: AuthService,
  ) {
    this.critiqueForm = this.formBuilder.group({
      critique: ['', [Validators.required]],
      note: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
      nom: [''],
      prenom: [''],
      anonyme: [false]
    });
  }

  ngOnInit() {
    this.loadCritiques();
  }

  private loadCritiques() {
    this.critiques = this.critiqueService.getCrtiques();
  }

  public onSubmit() {
    if (this.critiqueForm.invalid) {
      this._snackBar.open('Veuillez remplir tous les champs requis.', undefined, { duration: 2000 });
      return;
    }

    const critiqueData = { ...this.critiqueForm.value, attraction_id: this.data.attraction_id};
    this.critiqueService.postCritique(critiqueData).subscribe(result => {
      this.critiqueForm.patchValue({critique_id: result.result});
      location.reload();
      this._snackBar.open(result.message, undefined, {
        duration: 1000
      });
    });
  }
}
