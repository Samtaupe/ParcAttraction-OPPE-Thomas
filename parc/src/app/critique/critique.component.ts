import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CritiqueService } from '../Service/critique.service';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-critique',
  templateUrl: './critique.component.html',
  styleUrls: ['./critique.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule],
})
export class CritiqueComponent implements OnInit {
  @Input() attractionId!: number;
  public dataSource = new MatTableDataSource<CritiqueInterface>();
  displayedColumns: string[] = ['critique', 'note', 'nom', 'prenom'];

  constructor(private critiqueService: CritiqueService) {}

  ngOnInit() {
    this.loadCritiques();
  }

  private loadCritiques() {
    this.critiqueService.getCritiqueByIdAttraction(this.attractionId).subscribe(
      (filteredCritiques) => {
        this.dataSource.data = filteredCritiques || []; 
      },
      (error) => {
        console.error('Erreur lors du chargement des critiques :', error);
        this.dataSource.data = [];
      }
    );
  }
}