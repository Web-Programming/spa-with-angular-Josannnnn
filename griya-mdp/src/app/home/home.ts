import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [LokasiPerumahan, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Array untuk data perumahan (bisa diisi dari backend nanti)
  housingList = [
    {
      id: 1,
      name: 'Griya Asri Residence',
      location: 'Jakarta Selatan',
      price: 850000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      rating: 4.5,
      status: 'Available'
    },
    // ... data lainnya
  ];
}