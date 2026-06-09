export interface Branch {
  id: number;
  name: string;
  address?: string | null;
}

export interface WorkContext {
  barbershopId: number;
  barbershopName: string;
  userRole: string;
  temporaryPassword: boolean;
  branches: Branch[];
}

export interface CreateBranchRequest {
  name: string;
  address?: string | null;
}

export interface Employee {
  id: number;
  displayName?: string | null;
  email: string;
  role: string;
  temporaryPassword: boolean;
  branches: Branch[];
}

export interface CreateEmployeeRequest {
  displayName?: string | null;
  email: string;
  temporaryPassword: string;
  branchIds: number[];
}

export interface UpdateEmployeeBranchesRequest {
  branchIds: number[];
}
