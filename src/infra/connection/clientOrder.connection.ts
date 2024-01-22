import axios from 'axios';
import { IClientOrderConnectionType } from './types/IClientOrderConnection.type';

export class ClientOrderConnection implements IClientOrderConnectionType {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async updatePayment(id: string): Promise<void> {
    const url = `${this.baseUrl}/orders/${id}/pay`;

    try {
      await axios.put(url);
    } catch (error) {
      throw new Error(`Error connecting this request ${error}`);
    }
  }
}
