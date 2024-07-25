import { Pedido } from "./Pedido";

export class Usuario {
    public id: number;
    public nombre: string;
    public correoElectronico: string;
    public contrasena: string;
    public direccion: string;
    public historialPedidos: Pedido;

}