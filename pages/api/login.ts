// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	id: string;
	password: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	if (req.method === 'GET') {
		console.log(req.body);
		res.status(200).json({ id: 'gwemin', password: 'wiokld921k' });
	}
}
