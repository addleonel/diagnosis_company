import type { Actividad } from "./types";

export const actividadesIniciales: Actividad[] = [
  {
    nombre: "Logística Interna", // done
    items: [
      { texto: "¿Se reciben correctamente las materias primas de los proveedores?", si: true, no: false },
      { texto: "¿Existe un sistema de almacenamiento eficiente?", si: true, no: false },
      { texto: "¿Se controlan regularmente los inventarios?", si: false, no: true },
      { texto: "¿Hay procesos establecidos para la programación del transporte interno?", si: false, no: true },
      { texto: "¿Se gestionan adecuadamente las devoluciones a proveedores?", si: false, no: true },
      { texto: "¿Se utiliza un sistema Just-in-Time o similar para optimizar inventarios?", si: false, no: true },
    ],
  },
  {
    nombre: "Producción", // done
    items: [
    { texto: "¿Se han identificado herramientas o tecnologías que podrían mejorar la producción en la carpintería?", si: true, no: false },
    { texto: "¿Se utilizan máquinas o equipos tecnológicos adecuados para las tareas de carpintería?", si: true, no: false },
    { texto: "¿Las herramientas y equipos reciben mantenimiento periódico y adecuado?", si: true, no: false },
    { texto: "¿Se emplea algún software de diseño (como CAD) o de planificación para elaborar los productos y planificar la producción?", si: false, no: true },
    { texto: "¿Se han implementado mejoras tecnológicas recientes en los procesos o productos de carpintería?", si: false, no: true },
    { texto: "¿Se analizan los beneficios (en ahorro de tiempo o reducción de costos) tras implementar una nueva tecnología en producción?", si: false, no: true }

    ],
  },
  {
    nombre: "Logística Externa", // done
    items: [
      { texto: "¿Los productos terminados se entregan puntualmente a los clientes?", si: true, no: false },
      { texto: "¿La empresa tiene un sistema organizado para hacer las entregas?", si: false, no: true },
      { texto: "¿Se planifican con anticipación las rutas de reparto para ahorrar tiempo y dinero?", si: true, no: false },
      { texto: "¿Los productos llegan sin daños ni deterioros al momento de la entrega?", si: true, no: false },
      { texto: "¿Se utilizan vehículos o medios de transporte adecuados para llevar los productos?", si: false, no: true },
      { texto: "¿Se lleva un registro (guías, reportes, fotos, etc.) de todas las entregas realizadas?", si: false, no: true },
      { texto: "¿La empresa tiene un procedimiento claro para atender reclamos o devoluciones por entrega?", si: false, no: true },
      { texto: "¿Se pide la opinión del cliente sobre la calidad y puntualidad de la entrega?", si: true, no: false }
    ],
  },
  {
    nombre: "Marketing y Ventas", // done
    items: [
      { texto: "¿La empresa ofrece productos a precios cómodos y accesibles para los clientes?", si: true, no: false },
      { texto: "¿La empresa utiliza las normas ISO para la fabricación de sus productos?", si: true, no: false },
      { texto: "¿La empresa está aumentando su cuota de mercado?", si: true, no: false },
      { texto: "¿Se está logrando fidelizar a los clientes?", si: true, no: false },
      { texto: "¿Se están incrementando las ventas online por parte de la empresa?", si: false, no: true }
    ],
  },
  {
    nombre: "Servicios", // done
    items: [
      { texto: "¿Se realiza una recepción eficiente y organizada de la madera y materiales auxiliares?", si: true, no: false },
      { texto: "¿Existe un flujo de trabajo definido desde el diseño hasta la entrega del mueble al cliente?", si: true, no: false },
      { texto: "¿La carpintería ofrece atención personalizada y seguimiento postventa al cliente?", si: true, no: false },
      { texto: "¿Se capacita continuamente al personal en técnicas de producción y atención al cliente?", si: false, no: true },
      { texto: "¿Se cuenta con un sistema de distribución eficiente para entregar productos terminados?", si: false, no: true },
      { texto: "¿Se gestionan activamente las relaciones con los clientes para detectar nuevas necesidades?", si: false, no: true }
    ],
  },
];


export const actividadesApoyo: Actividad[] = [
  {
    nombre: "Gestion General o infrastructura", // done
    items: [
      { texto: "¿Existe una planificación estratégica clara y actualizada en la empresa?", si: false, no: true },
      { texto: "¿La estructura organizacional permite una gestión eficiente de las áreas funcionales?", si: true, no: false },
      { texto: "¿Se aplican sistemas de gestión de calidad para mejorar procesos y productos?", si: true, no: false },
      { texto: "¿Se asignan adecuadamente los recursos financieros, humanos y tecnológicos?", si: true, no: false },
      { texto: "¿La empresa cuenta con mecanismos de control interno y auditoría?", si: false, no: true },
      { texto: "¿Se promueve una cultura organizacional enfocada en la innovación y el desempeño?", si: false, no: true },
    ],
  },
  {
    nombre: "Gestion de Recursos Humanos",  // done
    items: [ 
      { texto: "¿El personal está capacitado en el uso correcto de las herramientas, equipos tecnológicos y software?", si: true, no: false },
      { texto: "¿Se brindan oportunidades de capacitación o actualización en herramientas digitales y tecnológicas al personal?", si: false, no: true },
      { texto: "¿Se realiza alguna evaluación o seguimiento al personal respecto a su manejo de las nuevas herramientas tecnológicas?", si: false, no: true },
      { texto: "¿Se promueve entre los trabajadores la iniciativa de proponer mejoras o ideas innovadoras en procesos y uso de tecnologías?", si: false, no: true },
    ],
  },
  {
    nombre: "Desarrollo Tecnológico", // done
    items: [
      { texto: "¿Se han identificado herramientas o tecnologías que podrían mejorar la producción?", si: true, no: false },
      { texto: "¿Se utilizan máquinas o equipos tecnológicos adecuados para las tareas de carpintería?", si: false, no: true },
      { texto: "¿Las herramientas tecnológicas reciben mantenimiento regularmente?", si: false, no: true },
      { texto: "¿El personal está capacitado en el uso correcto de herramientas y equipos tecnológicos?", si: false, no: true },
      { texto: "¿Se emplea algún software de diseño (como CAD) o planificación para elaborar los productos?", si: false, no: true },
      { texto: "¿Se han aplicado mejoras tecnológicas recientes en los procesos o productos de carpintería?", si: false, no: true },
      { texto: "¿Se analizan los beneficios (ahorro de tiempo o costos) luego de implementar una nueva tecnología?", si: true, no: false }
    ],
  },
  {
    nombre: "Aprovisionamiento", // done
    items: [
      { texto: "¿Las materias primas actuales provienen de fuentes certificadas?", si: false, no: false },
      { texto: "¿Los proveedores alternativos (locales o internacionales) ofrecen mejores condiciones?", si: true, no: false },
      { texto: "¿La empresa cuenta con varios proveedores?", si: true, no: false }
    ],
  },
];