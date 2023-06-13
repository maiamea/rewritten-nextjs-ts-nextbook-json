import cookie from 'cookie';
const authUser = {
  id: '1',
  username: 'taketo',
  displayName: 'Taketo Yoshida',
  email: 'taketo@example.com',
  profileImageUrl: '/users/1.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
};

export default async function signin(req, res) {
  if (
    !(req.body['username'] === 'user' && req.body['password'] === 'password')
  ) {
    return res.status(401).json({
      message: 'Username or password are incorrect',
    });
  }

  res.setHeader('Set-Cookie', cookie.serialize('token', 'dummy_token', {
    maxAge: 3600,
    httpOnly: true,
    path: '/'
  }));
  res.status(201).json(authUser);
}
