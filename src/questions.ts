import type { Actividad } from "./types";

export const actividadesIniciales: Actividad[] = [
  {
    nombre: "Logística Interna",
    items: [
      { texto: "¿Se reciben correctamente las materias primas de los proveedores?", si: false, no: false },
      { texto: "¿Existe un sistema de almacenamiento eficiente?", si: false, no: false },
      { texto: "¿Se controlan regularmente los inventarios?", si: false, no: false },
      { texto: "¿Hay procesos establecidos para la programación del transporte interno?", si: false, no: false },
      { texto: "¿Se gestionan adecuadamente las devoluciones a proveedores?", si: false, no: false },
      { texto: "¿Se utiliza un sistema Just-in-Time o similar para optimizar inventarios?", si: false, no: false },
    ],
  },
  {
    nombre: "Producción",
    items: [
      { texto: "¿Las operaciones de transformación son eficientes y bien planificadas?", si: false, no: false },
      { texto: "¿Se realizan pruebas de calidad en productos terminados?", si: false, no: false },
      { texto: "¿Se utilizan procesos respetuosos con el medio ambiente?", si: false, no: false },
      { texto: "¿Se mantiene un buen estado de las instalaciones y maquinaria?", si: false, no: false },
      { texto: "¿Los productos cumplen con los estándares de calidad exigidos?", si: false, no: false },
      { texto: "¿Se monitorea constantemente el rendimiento productivo?", si: false, no: false },
    ],
  },
  {
    nombre: "Logística Externa",
    items: [
      { texto: "¿Se almacenan correctamente los productos terminados?", si: false, no: false },
      { texto: "¿La distribución física es puntual y eficiente?", si: false, no: false },
      { texto: "¿Se utilizan sistemas digitales para coordinar la logística externa?", si: false, no: false },
      { texto: "¿Se recogen pedidos de forma rápida y precisa?", si: false, no: false },
      { texto: "¿Se programa eficientemente el transporte hacia clientes finales?", si: false, no: false },
      { texto: "¿Se manejan adecuadamente los tiempos de entrega?", si: false, no: false },
    ],
  },
  {
    nombre: "Marketing y Ventas",
    items: [
      { texto: "¿Se promueve activamente el producto o servicio?", si: false, no: false },
      { texto: "¿Se cuenta con estrategias claras de publicidad y promoción?", si: false, no: false },
      { texto: "¿El equipo de ventas está capacitado y motivado?", si: false, no: false },
      { texto: "¿Se fija el precio considerando costos y percepción del cliente?", si: false, no: false },
      { texto: "¿Se selecciona estratégicamente los canales de venta?", si: false, no: false },
      { texto: "¿Se mantienen relaciones sólidas con los intermediarios/compradores?", si: false, no: false },
    ],
  },
  {
    nombre: "Servicios",
    items: [
      { texto: "¿Se ofrecen servicios post-venta como reparación e instalación?", si: false, no: false },
      { texto: "¿Se brinda soporte técnico o asistencia personalizada?", si: false, no: false },
      { texto: "¿Se ofrecen cursos o guías de uso del producto?", si: false, no: false },
      { texto: "¿Se garantizan repuestos y componentes disponibles?", si: false, no: false },
      { texto: "¿Se recibe retroalimentación de los clientes sobre el servicio?", si: false, no: false },
      { texto: "¿Se mejora continuamente el servicio basado en esa retroalimentación?", si: false, no: false },
    ],
  },
];