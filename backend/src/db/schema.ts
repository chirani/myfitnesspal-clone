import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";
import {
  user,
  session,
  verification,
  userRelations,
  account,
  accountRelations,
  sessionRelations,
} from "../../auth-schema.ts";
export {
  user,
  session,
  verification,
  userRelations,
  account,
  accountRelations,
  sessionRelations,
};

export const foods = sqliteTable("foods", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  caloriesPer100g: real("calories_per_100g").notNull(),
  proteinPer100g: real("protein_per_100g").notNull(),
  carbsPer100g: real("carbs_per_100g").notNull(),
  fatsPer100g: real("fats_per_100g").notNull(),
});
