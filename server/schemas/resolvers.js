const { AuthenticationError } = require("apollo-server-express");
const { Restroom } = require("../models");
//const { signToken } = require('../utils/auth');
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    restrooms: async () => {
      return await Restroom.find().populate("comments");
    },
  },
};
//     restroom: async (parent, { _id }) => {
//       return await Restroom.findById(_id).populate('category');
//     },
// user: async (parent, args, context) => {
//   if (context.user) {
//     const user = await User.findById(context.user._id).populate({
//       path: 'restroom.restrooms',
//       populate: 'category'
//     });

//     user.restrooms.sort((a, b) => b.addDate - a.addDate);

//     return user;
//   }

//   throw new AuthenticationError('Not logged in');
// },
//     donation: async (parent, { _id }, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: 'restroom.restrooms',
//           populate: 'category'
//         });

//         return user.orders.id(_id);
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     checkout: async (parent, args, context) => {
//       const url = new URL(context.headers.referer).origin;
//       const order = new Order({ restrooms: args.restrooms });
//       const line_items = [];

//       const { restrooms } = await order.populate('restrooms').execPopulate();

//       for (let i = 0; i < restrooms.length; i++) {
//         const restroom = await stripe.restrooms.create({
//           name: restrooms[i].name,
//           description: restrooms[i].description,
//           images: [`${url}/images/${restrooms[i].image}`]
//         });

//         const price = await stripe.prices.create({
//           restroom: restroom.id,
//           unit_amount: restrooms[i].price * 100,
//           currency: 'usd',
//         });

//         line_items.push({
//           price: price.id,
//           quantity: 1
//         });
//       }

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items,
//         mode: 'payment',
//         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${url}/`
//       });

//       return { session: session.id };
//     }
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     addOrder: async (parent, { restrooms }, context) => {
//       console.log(context);
//       if (context.user) {
//         const order = new Order({ restrooms });

//         await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

//         return order;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
// updateUser: async (parent, args, context) => {
//   if (context.user) {
//     return await User.findByIdAndUpdate(context.user._id, args, { new: true });
//   }

//   throw new AuthenticationError('Not logged in');
// },
//     updateProduct: async (parent, { _id, quantity }) => {
//       const decrement = Math.abs(quantity) * -1;

//       return await Restroom.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
//     },
// login: async (parent, { email, password }) => {
//   const user = await User.findOne({ email });

//   if (!user) {
//     throw new AuthenticationError('Incorrect credentials');
//   }

//   const correctPw = await user.isCorrectPassword(password);

//   if (!correctPw) {
//     throw new AuthenticationError('Incorrect credentials');
//   }

//   const token = signToken(user);

//   return { token, user };
// }
//   }
// };

module.exports = resolvers;
