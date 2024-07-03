import { Document, Schema, model, models } from "mongoose";

export interface IRecipe extends Document {
  _id: string;
  title: string;
  description?: string;
  cookTime?: number;
  ingredients?: [string];
  createdAt: Date;
  imageUrl: string;
  url?: string;
  category: { _id: string; name: string };
  creator: { _id: string; firstName: string; lastName: string };
}

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  cookTime: { type: Number },
  ingredients: { type: [String] },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  price: { type: String },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
