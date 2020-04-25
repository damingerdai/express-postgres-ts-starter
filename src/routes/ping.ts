import { IRoute } from 'src/types/routes';

export const Ping: IRoute = {
	method: 'GET',
	path: '/ping',
	controller: (req, res) => {
		res.send('pong')
	}
}
