import sequelize from "../db";
import { DataTypes } from "sequelize/types";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  approved: { type: DataTypes.BOOLEAN, defaultValue: false },
  phone: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  price: { type: DataTypes.NUMBER },
  description: { type: DataTypes.STRING((length = 1000)) },
  image: { type: DataTypes.STRING },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

User.hasMany(Product);
Product.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

export { User, Product, Category };
