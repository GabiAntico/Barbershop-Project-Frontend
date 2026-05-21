export interface DashboardResponse {
  revenue: RevenueStats;
  attendance: AttendanceStats;
}

export interface RevenueStats {
  totalPaidAmount: number;
  paidVisitsCount: number;
  averageTicket: number;
}

export interface AttendanceStats {
  completed: number;
  cancelled: number;
  missed: number;
  futurePending: number;
  totalEvaluated: number;
  attendanceRate: number;
}

export interface ClientDashboardResponse {
  client: ClientStats;
  attendance: AttendanceStats;
  selectedMonthRevenue: RevenueStats;
  historicalRevenue: RevenueStats;
  visitFrequency: VisitFrequencyStats;
}

export interface ClientStats {
  id: number;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
  notes: string | null;
}

export interface VisitFrequencyStats {
  lastVisitAt: string | null;
  averageDaysBetweenVisits: number | null;
  visitsCount: number;
}
