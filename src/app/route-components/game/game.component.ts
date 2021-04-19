import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Song } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public categories: Category[];
  public sound = null;
  public isSongPlaying: boolean;
  public selcetedCategory: Category;
  public selectedSong: Song;
  public currentRound: string;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentRound = this.activatedRoute.snapshot.routeConfig.path;

    switch (this.currentRound) {
      case 'round1':
        this.categories = this.categoriesService.round1Categories;
        break;
      case 'round2':
        this.categories = this.categoriesService.round2Categories;
        break;
      case 'round3':
        this.categories = this.categoriesService.round3Categories;
        break;
      case 'finalRound':
        this.categories = this.categoriesService.finalRoundCategories;
        break;
      default:
        break;
    }
    // this.categories = this.categoriesService.selectedCategories;
    // if (!this.categories) {
    //   this.categories = JSON.parse(localStorage.getItem('categories'));
    // }
    console.log(this.categories);
  }

  newGame(): void {
    this.stopPlaying();
    if (this.currentRound === 'round3') {
      this.router.navigate(['finalRound']);
      return;
    }

    let roundNumber = Number(this.currentRound[this.currentRound.length - 1]);
    const nextRoundNumber = ++roundNumber;
    const nextRound = this.currentRound.slice(0, -1) + nextRoundNumber;

    this.router.navigate([nextRound]);
  }

  playSong(categoryId: string, songId: string): void {
    this.selcetedCategory = this.categories.find(ctg => ctg.id === categoryId);
    this.selectedSong = this.selcetedCategory.songs.find(song => song.id === songId);
    this.sound = new Howl({
      src: [this.selectedSong.src],
      onend: () => {
        this.isSongPlaying = false;
        this.selectedSong.isPlaying = false;
      }
    });
    this.sound.play();
    this.isSongPlaying = true;
    this.selectedSong.isPlaying = true;
    this.selectedSong.isPlayed = true;
  }

  stopPlaying(): void {
    if (this.sound) {
      this.sound.stop();
    }
    this.isSongPlaying = false;
    if (this.selectedSong) {
      this.selectedSong.isPlaying = false;
    }

  }

  handleSinging(categoryId, songId): void {
    if (this.isSongPlaying) {
      this.stopPlaying();
    } else {
      this.playSong(categoryId, songId);
    }
  }
}
