
import { NOMBRES, APELLIDOS } from "../constants/employees";

export const generateEmployeeName = (): string => {
  const nombre = NOMBRES[Math.floor(Math.random() * NOMBRES.length)];
  const apellido = APELLIDOS[Math.floor(Math.random() * APELLIDOS.length)];
  return `${nombre} ${apellido}`;
};
