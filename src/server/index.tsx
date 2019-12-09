import express from 'express';
import markup from './markup';

const app = express();

app.use(express.static('build/client'));
app.get('*', (req: express.Request, res: express.Response) => {
	res.send(markup(req.url));
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});