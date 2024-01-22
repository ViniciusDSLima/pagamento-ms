import { dataSource } from './database';
import { app } from './app';
import * as process from 'process';

dataSource.initialize().then(() => {
  app.listen(process.env.PORT || 3333, () =>
    console.log(`Server started on port ${process.env.PORT || 3333}`),
  );
});
