import { Request, Response } from 'express';
import { router as app } from './router';
import Estudiantes from '../models/login.model';

app.get('/estudiantes', async (req: Request, res: Response) => {
    try {
        const data = await Estudiantes.findAll();

        res.json({ ok: true, data });
    } catch (error) {
        res.status(400).json({ ok: false, err: error });
    }
});

app.post('/estudiantes', async (req: Request, res: Response) => {

    const body = req.body;
    const { num_control, nombres, apellidos, carrera, semestre } = body;

    try {
        const data = await Estudiantes.create({
            num_control, nombres, apellidos, carrera, semestre
        });

        res.json({ ok: true, data });
    } catch (error) {
        res.status(400).json({ ok: false, err: error });
    }
});

export default app;