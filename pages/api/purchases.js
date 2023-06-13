export default async function purchases(req, res) {
  if (req.cookies['token'] !== 'dummy_token') {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  res.status(201).json({
    message: 'ok',
  });
}
