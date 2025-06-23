export interface ItemChecklist {
  texto: string;
  si: boolean;
  no: boolean;
}

export interface Actividad {
  nombre: string;
  items: ItemChecklist[];
}

