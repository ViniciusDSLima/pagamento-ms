export interface IClientOrderConnectionType {
  updatePayment(id: string): Promise<void>;
}
