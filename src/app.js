import express from "express";
import { getProductos, postProducto, putProducto, deleteProducto } from "../src/controllers/crud.js";

export const app = express();
export const PORT = 3000;

//RUTAS
app.get("/productos", async (req, res) => {
  try {
    const productos = await getProductos();
    res.send(productos);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

app.post("/agregar", async (req, res) => {
  try {
    const newProducto = await postProducto();
    res.send(newProducto);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

app.put("/update", async (req, res) => {
  try {
    const updateProducto = putProducto();
    res.send(updateProducto);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

app.delete("/delete", async (req, res) => {
  try {
    const eraseProducto = deleteProducto();
    res.send(eraseProducto);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

app.get("*", (req, res) => {
  res.send("<h1>Esta página No Existe</h1>");
});
