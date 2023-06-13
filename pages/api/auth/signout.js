import cookie from 'cookie';

export default async function signout(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize('token', '', {
    maxAge: 0,
    httpOnly: true,
    path: '/'
  }));
  res.status(200).json({
    message: 'Sign out successfully',
  });
}
