import { User } from '../users/users.model';

export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  createdBy: User;
  organiser: string;
  startTime: number;
  endTime: number;
  activeFrom: number;
  activeUntil: number;
  price: number;
  maxAttendees: number;
  createdAt: number;
}

export interface CreateActivityDto {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  organiser: string;
  startTime: number;
  endTime: number;
  activeFrom: number;
  activeUntil?: number;
  price?: number;
  maxAttendees?: number;
}

export interface UpdateActivityDto {
  title?: string;
  description?: string;
  location?: string;
  imageUrl?: string;
  organiser?: string;
  startTime?: number;
  endTime?: number;
  activeFrom?: number;
  activeUntil?: number;
  price?: number;
  maxAttendees?: number;
}

export interface Registration {
  id: string;
  activityId: string;
  userId: string;
  user: User;
  answers: Answer[];
}

export interface Answer {
  id: string;
  registrationId: string;
  questionId: string;
  text: string;
}
