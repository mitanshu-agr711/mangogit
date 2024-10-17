import { Comic } from "../model/comic.model.js";

const createComic = async (req, res) => {
    const { Book_Name, Authore_Name, Year, Price, Discount, Condition, Description } = req.body;
    
    if ([Book_Name, Authore_Name, Condition].some((field) => !field?.trim()) || !Year || !Price || !Discount) {
      return res.status(400).json({ error: "All required information is needed" });
    }
    
     
      const newComic=await Comic.create({
        Book_Name,
        Authore_Name,
        Year,
        Price,
        Discount,
        Condition,
        Description,
      });
      if(newComic){
        return res.status(201).json({ message: "Comic created successfully" });
      }
      return res.status(500).json({ error: "Failed to create comic" });
}
export { createComic };