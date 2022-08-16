//Default res for root api

export default function handler(req, res) {
    res.status(200).json({ name: 'Home API route' })
}