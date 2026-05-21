export interface CreationClientRequest {
  email: string | null;
  phoneNumber: string;
  firstName: string | null;
  lastName: string | null;
  documentNumber: string | null;
  notes: string | null;
}

export interface ClientRequest {
  id: number;
  firstName: string | null;
  lastName: string | null;
  documentNumber: string | null;
  email: string | null;
  phoneNumber: string;
  notes: string | null;
}

export interface ClientResponse {
  id: number;
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  documentNumber: string | null;
  notes: string | null;
}
