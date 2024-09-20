const User = require('../../model/userSchema');
const argon = require('argon2');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  console.log(req.body,'USERRRRRR 222222222');

  try {
    const { firstName, lastName, email, password} =
      req.body;

    console.log(req.body.firstName,'FRIRSSSSSSSSS')
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }


    const existingUserEmail = await User.findOne({ email }, {}, { lean: true });
    if (existingUserEmail) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: await argon.hash(password),
    });

       await newUser.save();

      res.status(200).json({ status: 'success' });

  } catch (err) {
    console.error('Error during user signup:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email and Password is required.' });
    }

    const dbExistingUser = await User.findOne({ email }, {}, { lean: true });
    if (!dbExistingUser) {
      return res.status(401).json({ error: 'Email or Password is incorrect.' });
    }

    const isPasswordValid = await argon.verify(dbExistingUser.password, password);

    !isPasswordValid && res.status(401).json('not matched');
    if (dbExistingUser && isPasswordValid) {
      const sessionToken = jwt.sign(
        {
          id: dbExistingUser._id,
        },
        process.env.JWT_USER_SECRET_KEY,
      );

      return res.status(200).json({
        status: 'success',
        userId: dbExistingUser._id,
        tokenId: sessionToken,
      });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

module.exports = {
  signup,
  login,
};
