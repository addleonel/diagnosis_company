import type { Actividad } from "./types_likert";

/*
"Nada Satisfecho"
  | "Poco Satisfecho"
  | "Neutral"
  | "Muy satisfecho"
  | "Totalmente satisfecho"

*/
export const actividadesIniciales: Actividad[] = [
  {
    nombre: "Logística Interna", // done
    items: [
      { texto: "¿Se reciben correctamente las materias primas de los proveedores?", respuesta: "Poco Satisfecho" },
      { texto: "¿Existe un sistema de almacenamiento eficiente?", respuesta: "Neutral" },
      { texto: "¿Se controlan regularmente los inventarios?", respuesta: "Muy satisfecho" },
      { texto: "¿Hay procesos establecidos para la programación del transporte interno?", respuesta: "Poco Satisfecho"},
      { texto: "¿Se gestionan adecuadamente las devoluciones a proveedores?", respuesta: "Neutral" },
      { texto: "¿Se utiliza un sistema Just-in-Time o similar para optimizar inventarios?", respuesta: "Poco Satisfecho" },
    ],
  },
  { 
    nombre: "Producción", // done
    items: [
      { texto: "¿Se han identificado herramientas o tecnologías que podrían mejorar la producción en la carpintería?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se utilizan máquinas o equipos tecnológicos adecuados para las tareas de carpintería?", respuesta: "Nada Satisfecho" },
      { texto: "¿Las herramientas y equipos reciben mantenimiento periódico y adecuado?", respuesta: "Muy satisfecho" },
      { texto: "¿Se emplea algún software de diseño (como CAD) o de planificación para elaborar los productos y planificar la producción?", respuesta: "Nada Satisfecho" },
      { texto: "¿Se han implementado mejoras tecnológicas recientes en los procesos o productos de carpintería?", respuesta: "Neutral" },
      { texto: "¿Se analizan los beneficios (en ahorro de tiempo o reducción de costos) tras implementar una nueva tecnología en producción?", respuesta: "Poco Satisfecho" },
    ],
  },
  {
    nombre: "Logística Externa", // done
    items: [
      { texto: "¿Los productos terminados se entregan puntualmente a los clientes?", respuesta: "Muy satisfecho" },
      { texto: "¿La empresa tiene un sistema organizado para hacer las entregas?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se planifican con anticipación las rutas de reparto para ahorrar tiempo y dinero?", respuesta: "Nada Satisfecho" },
      { texto: "¿Los productos llegan sin daños ni deterioros al momento de la entrega?", respuesta: "Muy satisfecho" },
      { texto: "¿Se utilizan vehículos o medios de transporte adecuados para llevar los productos?", respuesta: "Neutral" },
      { texto: "¿Se lleva un registro (guías, reportes, fotos, etc.) de todas las entregas realizadas?", respuesta: "Poco Satisfecho" },
      { texto: "¿La empresa tiene un procedimiento claro para atender reclamos o devoluciones por entrega?", respuesta: "Neutral" },
      { texto: "¿Se pide la opinión del cliente sobre la calidad y puntualidad de la entrega?", respuesta: "Neutral" },
    ],
  },
  {
    nombre: "Marketing y Ventas",
    items: [
      { 
    texto: "¿Los productos ofrecidos por la empresa tienen precios cómodos y accesibles para los clientes?", 
    respuesta: "Poco Satisfecho" // Las startups suelen tener costos altos inicialmente.
  },
  { 
    texto: "¿La calidad de los productos ofrecidos por la empresa es adecuada según sus expectativas?", 
    respuesta: "Neutral" // La calidad puede ser buena, pero falta escalabilidad o certificaciones.
  },
  { 
    texto: "¿La variedad de productos que ofrece la empresa cubre sus necesidades?", 
    respuesta: "Poco Satisfecho" // Limitaciones en diversidad de productos al inicio.
  },
  { 
    texto: "¿El trato recibido al adquirir productos de la empresa es satisfactorio?", 
    respuesta: "Muy satisfecho" // En startups, el trato personalizado suele ser un punto fuerte.
  },
  { 
    texto: "¿Los puntos de venta disponibles para adquirir los productos de la empresa son convenientes?", 
    respuesta: "Poco Satisfecho" // Pocos canales de venta al inicio (ej: solo tienda física local).
  }
    ],
  },
  {
    nombre: "Servicios", // done
    items: [
      { texto: "¿Se realiza una recepción eficiente y organizada de la madera y materiales auxiliares?", respuesta: "Poco Satisfecho" },
      { texto: "¿Existe un flujo de trabajo definido desde el diseño hasta la entrega del mueble al cliente?", respuesta: "Neutral" },
      { texto: "¿La carpintería ofrece atención personalizada y seguimiento postventa al cliente?", respuesta: "Neutral" },
      { texto: "¿Se capacita continuamente al personal en técnicas de producción y atención al cliente?", respuesta: "Nada Satisfecho" },
      { texto: "¿Se cuenta con un sistema de distribución eficiente para entregar productos terminados?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se gestionan activamente las relaciones con los clientes para detectar nuevas necesidades?", respuesta: "Poco Satisfecho" },
    ],
  },
];

export const actividadesApoyo: Actividad[] = [
  {
    nombre: "Gestion General o infrastructura", // done
    items: [
      { texto: "¿Existe una planificación estratégica clara y actualizada en la empresa?", respuesta: "Neutral" },
      { texto: "¿La estructura organizacional permite una gestión eficiente de las áreas funcionales?", respuesta: "Muy satisfecho" },
      { texto: "¿Se aplican sistemas de gestión de calidad para mejorar procesos y productos?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se asignan adecuadamente los recursos financieros, humanos y tecnológicos?", respuesta: "Neutral" },
      { texto: "¿La empresa cuenta con mecanismos de control interno y auditoría?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se promueve una cultura organizacional enfocada en la innovación y el desempeño?", respuesta: "Muy satisfecho" },
    ],
  },
  {
    nombre: "Gestion de Recursos Humanos", // done
    items: [ 
      { texto: "¿El personal está capacitado en el uso correcto de las herramientas, equipos tecnológicos y software?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se brindan oportunidades de capacitación o actualización en herramientas digitales y tecnológicas al personal?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se realiza alguna evaluación o seguimiento al personal respecto a su manejo de las nuevas herramientas tecnológicas?", respuesta: "Neutral" },
      { texto: "¿Se promueve entre los trabajadores la iniciativa de proponer mejoras o ideas innovadoras en procesos y uso de tecnologías?", respuesta: "Neutral" },
    ],
  },
  {
    nombre: "Desarrollo Tecnológico", // done
    items: [
      { texto: "¿Se han identificado herramientas o tecnologías que podrían mejorar la producción?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se utilizan máquinas o equipos tecnológicos adecuados para las tareas de carpintería?", respuesta: "Neutral" },
      { texto: "¿Las herramientas tecnológicas reciben mantenimiento regularmente?", respuesta: "Neutral" },
      { texto: "¿El personal está capacitado en el uso correcto de herramientas y equipos tecnológicos?", respuesta: "Neutral" },
      { texto: "¿Se emplea algún software de diseño (como CAD) o planificación para elaborar los productos?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se han aplicado mejoras tecnológicas recientes en los procesos o productos de carpintería?", respuesta: "Poco Satisfecho" },
      { texto: "¿Se analizan los beneficios (ahorro de tiempo o costos) luego de implementar una nueva tecnología?", respuesta: "Poco Satisfecho" },
    ],
  },
  {
    nombre: "Aprovisionamiento", // done
    items: [
          { texto: "¿Las materias primas actuales provienen de fuentes certificadas?", respuesta: "Poco Satisfecho" },
          { texto: "¿Los proveedores alternativos (locales o internacionales) ofrecen mejores condiciones?", respuesta: "Neutral" },
          { texto: "La empresa mantiene relaciones estratégicas efectivas con sus proveedores.", respuesta: "Poco Satisfecho" },
          { texto: "La empresa cumple con la normatividad vigente y prioriza prácticas sostenibles.", respuesta: "Neutral" },
          { texto: "La empresa debería diversificar su base de proveedores para reducir riesgos y mejorar condiciones de compra.", respuesta: "Muy satisfecho" },
          { texto: "La empresa adquiere materias primas de calidad que cumplen con los estándares requeridos.", respuesta: "Neutral" },
          { texto: "La empresa optimiza eficientemente los costos en la adquisición de materias primas.", respuesta: "Poco Satisfecho" }
    ],
  },
];