import { ClientResponse } from './client.model';

export interface VisitResponse {
  id: number;
  shiftId: number;
  client: ClientResponse | null;
  attendedByUserId: number | null;
  attendedByName: string | null;
  attendedByEmail: string | null;
  totalAmount: number;
  currency: string | null;
  paymentStatus: string;
  paidAt: string | null;
  paymentMethod: string | null;
}

export interface CreationVisitRequest {
  shiftId: number;
  totalAmount: number;
  currency: string | null;
  paymentStatus: string;
  paidAt: string | null;
  paymentMethod: string | null;
}

export interface UpdateVisitRequest {
  totalAmount: number;
  currency: string | null;
  paymentStatus: string;
  paidAt: string | null;
  paymentMethod: string | null;
}
