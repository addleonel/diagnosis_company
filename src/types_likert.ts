export type LikertValue = 
  | "Nada Satisfecho"
  | "Poco Satisfecho"
  | "Neutral"
  | "Muy satisfecho"
  | "Totalmente satisfecho"
  | null;

export interface ItemChecklist {
  texto: string;
  respuesta: LikertValue;
}

export interface Actividad {
  nombre: string;
  items: ItemChecklist[];
}