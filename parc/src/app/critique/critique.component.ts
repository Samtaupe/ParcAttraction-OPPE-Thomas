import { Component, Input, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-critique',
  templateUrl: './critique.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule, MatCardModule],
  styleUrls: ['./critique.component.scss']
  
})
export class CritiqueComponent implements OnInit {
  @Input() attractionId!: number;
  public critiques$: Observable<CritiqueInterface[]> = new Observable();
  public critiqueForm: FormGroup;

  constructor(
    private critiqueService: CritiqueService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public authService: AuthService
  ) {
    this.critiqueForm = this.formBuilder.group({
      critique: ['', [Validators.required]],
      note: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
      nom: [''],
      prenom: [''],
      anonyme: [true]
    });
  }

  ngOnInit() {
    this.loadCritiques();
  }

  private loadCritiques() {
    this.critiques$ = this.critiqueService.getCrtiques();
  }

  public onSubmit() {
    if (this.critiqueForm.invalid) {
      this._snackBar.open('Veuillez remplir tous les champs requis.', undefined, { duration: 2000 });
      return;
    }

    const critiqueData = { ...this.critiqueForm.value, attraction_id: this.attractionId };
    this.critiqueService.postCritique(critiqueData).subscribe(
      result => {
        this._snackBar.open(result.message, undefined, { duration: 1000 });
        this.critiqueForm.reset({ anonyme: true });
        this.loadCritiques();
      },
      error => {
        this._snackBar.open('Une erreur est survenue.', undefined, { duration: 2000 });
      }
    );
  }
}
