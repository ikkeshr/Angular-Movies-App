import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-top-bar',
  templateUrl: './movies-top-bar.component.html',
  styleUrls: ['./movies-top-bar.component.scss']
})
export class MoviesTopBarComponent implements OnInit {

  @Output() searchMovieTitle = new EventEmitter<string>();
  @Output() selectedTrending = new EventEmitter<string>();
  dropSettings: boolean = false;
  @Input('trendItemSelected') trendItemSelected: string;

  @Input('showSearch') showSearch: boolean = true;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  showSettings(): void {
    this.dropSettings = !this.dropSettings;
  }

  searchMovieByTitle(movieTitle: string): void {
    this.searchMovieTitle.emit(movieTitle);
  }

  showTrending(value: string): void {
    this.trendItemSelected = value;
    this.selectedTrending.emit(value);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
