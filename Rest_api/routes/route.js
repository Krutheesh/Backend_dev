
import { control,control2, control3,control4 } from "../controller/demoController.js";

export const route= (app) => {
  app.get("/kru",control)
  app.post("/kru",control2)
  app.put("/kru/:id",control3)
  app.delete("/kru/:id",control4)
}