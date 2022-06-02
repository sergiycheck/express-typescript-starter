import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import * as cors from 'cors';
import helmet from 'helmet';

const app = express();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT = Number(process.env.PORT);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.json({ message: 'app is working' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
