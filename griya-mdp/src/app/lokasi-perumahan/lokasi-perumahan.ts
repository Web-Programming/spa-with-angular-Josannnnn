import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// === INTERFACE HARUS DI LUAR COMPONENT ===
export interface Housing {
  id: number;
  name: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  rating: number;
  status: string;
  type?: string;
  description?: string;
  postedDays?: number;
}

@Component({
  selector: 'app-lokasi-perumahan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lokasi-perumahan.html',
  styleUrls: ['./lokasi-perumahan.css']
})
export class LokasiPerumahan {

  // === DEFAULT VALUE HARUS LENGKAP ===
  @Input() housing: Housing = {
    id: 0,
    name: '',
    location: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    image: '',
    rating: 0,
    status: '',
    type: '',
    description: '',
    postedDays: 0
  };

  getStars(): number[] {
    return Array(Math.floor(this.housing.rating)).fill(0);
  }
  
  hasHalfStar(): boolean {
    return this.housing.rating % 1 >= 0.5;
  }

  getEmptyStars(): number[] {
    const fullStars = Math.floor(this.housing.rating);
    const hasHalf = this.hasHalfStar() ? 1 : 0;
    const emptyStars = 5 - fullStars - hasHalf;
    return Array(emptyStars).fill(0);
  }

  // Format harga ke Rupiah
  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  }
}
