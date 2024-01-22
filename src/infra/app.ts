import express from 'express';
import cors from 'cors';
import { ClientOrderConnection } from './connection/clientOrder.connection';

export const app = express();

const clientOrder: ClientOrderConnection = new ClientOrderConnection(
  'http://api-baseUrl',
);

app.put('/orders/:id/pay', async (req, res) => {
  const id = req.params.id;

  try {
    await clientOrder.updatePayment(id);
    res.status(200).send();
  } catch (err) {
    res.status(500).send('Error sending payment');
  }
});

app.use(cors());
