require("dotenv").config();

//import data
const users = require("./data//users");
const products = require("./data/products");
const categories = require("./data/categories");
const customizes = require("./data/customizes");

//import model
const Category = require("./models/categories");
const Product = require("./models/products");
const User = require("./models/users");
const Customize = require("./models/customize");

// connect db
const connectDB = require("./config/db");

connectDB();

const importData = async () => {
  try {
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Customize.deleteMany({});

    await User.insertMany(users)
    await Customize.insertMany(customizes)

    const createdCate = await Category.insertMany(categories)
    const pCategory = createdCate[0]._id

    const sampleSeeds = products.map(product => {
      return { ...product, pCategory: pCategory }
    })
    await Product.insertMany(sampleSeeds)

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

const destroyData = async () => {
    try {

        // delete data if already exists
        await Category.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}




