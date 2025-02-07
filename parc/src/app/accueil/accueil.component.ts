import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../Service/auth.service';
import { CritiqueComponent } from '../critique/critique.component';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, CritiqueComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(public attractionService: AttractionService, public authService: AuthService)
  {}
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()
  
}
