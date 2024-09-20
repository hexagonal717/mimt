const Customer = require('../../model/userSchema');

const getUser = async (req, res) => {
  try {
    const data = await Customer.find({ _id: req.params.id }, {}, { lean: true });
    const { password, ...other } = data[0];

    res.status(200).json(other);
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    await Cart.findOneAndDelete({ customerId: req.params.id });
    await Order.findOneAndDelete({ customerId: req.params.id });
    await Payment.findOneAndDelete({ customerId: req.params.id });
    res.status(200).json({ status: 'success' });
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  getUser,
  deleteUser,
};
