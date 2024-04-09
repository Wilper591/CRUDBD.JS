import { pool } from "../db.js";

/* Obtener */
export const getProductos = async () => {
  const result = await pool.query("SELECT * FROM productos");
  console.log(result.rows);
  return result;
};
/* Agregar */
export const postProducto = async () => {
  const text =
    "INSERT INTO productos(producto, precio) VALUES($1, $2) RETURNING *";
  const values = ["Procesador i9", 1900];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result;
};
/* Actualizar */
export const putProducto = async (producto, id) => {
  const text = "UPDATE productos SET producto = $1 WHERE id = $2 RETURNING *";
  const values = ["Monitor 24'", 8];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result;
};
/* Eliminar */
export const deleteProducto = async () => {
  const text = "DELETE FROM productos WHERE id = $1 RETURNING *";
  const values = [6];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result;
};
