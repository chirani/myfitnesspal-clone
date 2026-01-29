import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {user,account, verification,session, userRelations,sessionRelations,accountRelations} from "../../auth-schema"
export {user,account, verification,session, userRelations,sessionRelations,accountRelations}


export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});
