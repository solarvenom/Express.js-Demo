import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = Number(process.env.APP_PORT) || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});