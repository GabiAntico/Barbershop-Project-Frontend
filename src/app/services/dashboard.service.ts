import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ClientDashboardResponse, DashboardResponse } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDashboard(startDate: string, endDate: string): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(`${this.baseUrl}/dashboard`, {
      params: { startDate, endDate }
    });
  }

  getClientDashboard(clientId: number, month: string): Observable<ClientDashboardResponse> {
    return this.http.get<ClientDashboardResponse>(`${this.baseUrl}/dashboard/clients/${clientId}`, {
      params: { month }
    });
  }
}
