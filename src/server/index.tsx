import express from 'express';
import compression from 'compression';
import middleware from './middleware';

const app = express();

app.use(compression());
app.use(express.static('build/client'));
app.get('*', middleware);

app.listen(3003, () => {
	console.log('Listening on port 3003');
});