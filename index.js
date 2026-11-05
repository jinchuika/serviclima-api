// index.js
// Punto de entrada de serviclima-api.
// Por ahora solo lee los datos y muestra cuántas órdenes hay.

import { readFile } from 'node:fs/promises';
import path from 'node:path';

// Ruta absoluta a datos/db.json, armada desde la carpeta de este archivo
const rutaDatos = path.join(import.meta.dirname, 'datos', 'db.json');

// db.json es un objeto con la propiedad "ordenes": { "ordenes": [ ... ] }
const contenido = await readFile(rutaDatos, 'utf8');
const { ordenes } = JSON.parse(contenido);

console.log(`Órdenes cargadas: ${ordenes.length}`);
