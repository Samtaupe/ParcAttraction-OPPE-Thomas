import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../Service/auth.service';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { CritiqueFormComponent } from '../critique.form/critique.form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CritiqueComponent } from '../critique/critique.component';
import { MatDividerModule } from '@angular/material/divider';




@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatExpansionModule, CritiqueComponent, MatDividerModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

}) 
export class AccueilComponent {
  readonly panelOpenState = signal(false);

  constructor(public attractionService: AttractionService, public authService: AuthService)
  {}
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()
  readonly dialog = inject(MatDialog);

  openDialog(attraction_id : number) {
    this.dialog.open(CritiqueFormComponent, {
      data: { attraction_id }
    });
  }
}
