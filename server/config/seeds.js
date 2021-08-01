const db = require('./connection');
const { User, Restroom, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Unisex' },
    { name: 'Family' },
    { name: 'Indoor' },
    { name: 'Outdoor'},
    { name: 'Multi-stall' },
    { name: 'Single-stall'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const donations = await Product.insertMany([
    {
      name: 'park restroom',
      description:
        'Portajohn at park entrance',
      //location:
      //image: '',
      //category: categories[3]._id,
      
    },
    {
      name: 'restroom',
      description:
        'mens and womens restrooms on site',
      //location:,
      //image: '',
      //category: categories[4]._id,
      
    },
    {
      name: 'restroom',
      description:
        'mens and womens restrooms on site',
      //location:,
      //image: '',
      //category: categories[4]._id,
      
    },
    {
      name: 'restroom',
      description:
        'mens and womens restrooms on site',
      //location:,
      //image: '',
      //category: categories[4]._id,
      
    },
    {
      name: 'restroom',
      description:
        'mens and womens restrooms on site',
      //location:,
      //image: '',
      //category: categories[4]._id,
      
    },
    {
      name: 'restroom',
      description:
        'mens and womens restrooms on site',
      //location:,
      //image: '',
      //category: categories[4]._id,
      
    },
    {
      name: 'restroom',
      description:
        'mens and womens restrooms on site',
      //location:,
      //image: '',
      //category: categories[4]._id,
      
    },
    {
      name: 'restroom',
      description:
        'mens and womens restrooms on site',
      //location:,
      //image: '',
      //category: categories[4]._id,
      
    },
    
  console.log('Data seeded successfully!'),

  await User.deleteMany(),

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    donations: [
      {
        donations: [donations[0]._id, donations[0]._id, donations[1]._id]
      }
    ]
  }),

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  }),

  console.log('users seeded'),

  process.exit(),
])})
