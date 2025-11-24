import { Component, Input, Output, EventEmitter, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../profile.model';

@Component({
  selector: 'app-profile-header',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css',
})
export class ProfileHeader {
  @Input() user!: UserProfile;
  @Output() edit = new EventEmitter<void>();
  @Output () settings = new EventEmitter<void>();
}
