import { Item } from "./item";
import { Usuario } from "./Usuario";

export class Pedido {
    public id: number;
    public usuario: Usuario;
    public fechaPedido: Date;
    public estado: string;
    public total: number
    items: Item;
}