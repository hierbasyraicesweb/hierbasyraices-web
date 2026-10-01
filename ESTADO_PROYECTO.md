================================================================
ESTADO MAESTRO DEL PROYECTO - HIERBAS Y RAICES
================================================================
Fecha de actualizacion: 29 de septiembre de 2026 (Sesión 6 - Final)
Version del documento: 2.6 (Tienda completada con productos reales)
Dominio: hierbasyraices.com (comprado, pendiente de despliegue)

================================================================
1. IDENTIDAD Y MARCO LEGAL DEL PROYECTO
================================================================
QUE ES:
Enciclopedia digital de patrimonio etnobotanico iberoamericano.
361 plantas medicinales documentadas con enfoque historico/cultural.

REGLA DE ORO DEL CONTENIDO (NO NEGOCIABLE):
- NUNCA se dice "esto cura", "esto trata" o "esto alivia".
- SIEMPRE se dice "esto se usaba tradicionalmente para", "en la 
  tradicion se empleaba para" o "documentado historicamente para".

MARCO LEGAL (NO NEGOCIABLE):
Disclaimer fijo en header, footer y cada ficha de planta/articulo:
"Esta informacion tiene fines historicos y culturales, y no constituye 
una recomendacion de uso, dosis ni tratamiento. Consulte a un 
profesional de la salud antes de usar cualquier planta con fines 
terapeuticos."

================================================================
2. STACK TECNICO (HERRAMIENTAS Y PLATAFORMAS)
================================================================
FUNCIONANDO ACTUALMENTE:
- Base de datos: Supabase (Postgres, plan gratuito)
- Frontend: Astro (sitio estatico) + Vite (dev server local)
- Estilos: Tailwind CSS + colores personalizados (beige/verde/naranja)
- Editor de codigo: VS Code
- Entorno de ejecucion: Node.js + npm
- Control de versiones: Git + GitHub
- Servidor local: localhost:4321
- Version de Astro: v7.2.9
- Monetizacion: Amazon Associates (ID: hierbasyraice-20, pago via Global66)

PENDIENTE DE CONECTAR/CONFIGURAR:
- Vercel o Netlify (hosting en produccion)
- Google Search Console y Google Analytics 4
- Mailchimp o Brevo (newsletter)
- Google AdSense, Ko-fi

================================================================
3. ESTRUCTURA DE BASE DE DATOS (SUPABASE)
================================================================
TABLA "plants" (Columnas en ESPANOL):
nombre_principal, nombre_cientifico, familia_botanica, categoria, 
nombres_espana, nombres_cono_sur, nombres_andinos, nombres_mexico_ca, 
origen_tradicion, usos_tradicionales, preparacion_tradicional, 
partes_utilizadas, advertencia, fuentes, meta_title, meta_description, 
faq_schema, estado_revision, notas_curatoria, busqueda (sin tilde).

TABLA "blog_posts" (Columnas en INGLES) - DETALLE CRITICO:
title, slug, excerpt, content, featured_image, published_at, tags, 
related_plants, meta_title, meta_description, faq_schema.

ADVERTENCIA: Las dos tablas tienen nombres de columna en idiomas 
diferentes. Tenerlo siempre presente al escribir consultas SQL.

================================================================
4. LO QUE YA FUNCIONA (ESTADO ACTUAL)
================================================================
FUNCIONALIDADES BASE:
- 361 plantas cargadas y curadas (estado_revision = "Resuelto - informativo").
- 97 plantas corregidas via SQL (formato numerado por categoria).
- Buscador inteligente en tiempo real (filtra sin tildes, busca por 
  palabras sueltas y dolencias, muestra contador y mensaje "sin resultados").
- Diseno responsive con tema verde/cafe/beige personalizado.
- Pagina individual de articulo renderizando correctamente con set:html.

MEJORAS DE NAVEGACION Y CONTENIDO REALIZADAS:
- 9 articulos de blog publicados: Manzanilla, Aloe vera, Romero, Ruda, 
  Ortiga, Oregano, Papaya, Pino y Clavo de olor.
- Formato unificado: Todos los articulos usan HTML puro (NO Markdown).
- Negritas estrategicas y FAQ Schema (JSON-LD) en los 9 articulos.
- NAVEGACION GLOBAL COMPLETADA: El boton "Ir a la Tienda" ha sido 
  integrado exitosamente en TODAS las secciones de la web.
- TIENDA COMPLETADA: Pagina /tienda.astro con 6 productos reales de 
  Amazon Afiliados (libros, aceites, tés y mortero), con imágenes y 
  enlaces de rastreo (tag=hierbasyraice-20) funcionando correctamente.

================================================================
5. GUIA MAESTRA DE FORMATO PARA ARTICULOS DEL BLOG
================================================================
REGLAS DE CONTENIDO:
1. Enfoque historico/cultural, nunca medico ni prescriptivo.
2. Disclaimer legal obligatorio al final de cada articulo.
3. Minimo 1,000 palabras por articulo para buen SEO.

FORMATO TECNICO (HTML PURO, NO MARKDOWN):
- Titulo principal: <h1>Titulo</h1>
- Subtitulo: <h2>Subtitulo</h2>
- Parrafo: <p>Texto</p>
- Negrita: <strong>texto</strong>
- Cursiva: <em>texto</em>
- Lista con viñetas: <ul><li>elemento</li></ul>
- Lista numerada: <ol><li>elemento</li></ol>
- Separador horizontal: <hr>

ERRORES COMUNES A EVITAR EN SQL:
1. Comillas dobles dentro del JSON del faq_schema: deben escaparse con \"
2. Usar Markdown (**negrita**, ## titulo): NO funciona con set:html.
3. Poner nombres de plantas en related_plants: espera IDs numericos.
4. Olvidar ::jsonb al final del faq_schema.

================================================================
6. PLAN DE PUBLICACION DE ARTICULOS
================================================================
FRECUENCIA RECOMENDADA: 1-2 articulos por semana.
PROXIMOS ARTICULOS SUGERIDOS: Lavanda, Menta, Salvia, Eucalipto, Jengibre.
CRITERIOS: Popularidad de busqueda, riqueza historica, diversidad geografica.

================================================================
7. PENDIENTES POR HACER (ROADMAP)
================================================================
PRIORIDAD ABSOLUTA (Proxima sesion):
- Desplegar el sitio en Vercel (gratis) y conectar el dominio hierbasyraices.com.
- Crear sitemap.xml y robots.txt para Google Search Console.

PRIORIDAD ALTA:
- Configurar Amazon OneLink para redirigir compradores a su Amazon local.
- Formulario de newsletter (Brevo/Mailchimp).

PRIORIDAD MEDIA/BAJA:
- Google AdSense, Ko-fi, PDFs descargables.

================================================================
8. DECISIONES TECNICAS CLAVE (A RESPETAR SIEMPRE)
================================================================
1. Astro no permite pasar variables del servidor al cliente con 
   {variable} dentro de <script> -> usar siempre define:vars.
2. El contenido del blog se renderiza con set:html={post.content}.
3. La columna de busqueda se llama "busqueda" (sin tilde).
4. Las tablas tienen columnas en idiomas diferentes (plants=ES, blog_posts=EN).
5. related_plants es integer[] -> requiere IDs numericos, no texto.
6. faq_schema es jsonb -> las comillas dobles internas se escapan con \".
7. Usar ON CONFLICT (slug) DO UPDATE para actualizar sin duplicar.
8. Reiniciar el servidor local (Ctrl+C y npm run dev) cuando se agregan 
   nuevos articulos en Supabase mientras el servidor esta corriendo.
9. TODAS las paginas deben usar la misma estructura de colores:
   - Fondo beige: bg-[#f5f5dc]
   - Header verde claro: bg-[#e8f0e3]
   - Texto verde oscuro: text-[#2d5016]
   - Botones verdes: bg-[#4a7c23] y bg-[#689f38]
   - Boton naranja (tienda): bg-[#ff9900]
   - Bordes verdes: border-[#c8e6c9]

================================================================
9. ARCHIVOS CLAVE DEL PROYECTO
================================================================
- Pagina principal: src/pages/index.astro
- Ficha de planta: src/pages/planta/[id].astro
- Listado blog: src/pages/blog/index.astro
- Articulo blog: src/pages/blog/[slug].astro
- Pagina de tienda: src/pages/tienda.astro (COMPLETADA con 6 productos reales)
- Estilos globales: src/styles/global.css
- Cliente de Supabase: src/lib/supabase.js

NOTA: NO existe un archivo de layout compartido. Cada pagina (.astro)
tiene su propia estructura HTML completa (header, body, footer).
Por eso es CRITICO mantener la misma estructura de clases en todas.

================================================================
10. METRICAS ACTUALES
================================================================
- Plantas en base de datos: 361
- Articulos de blog publicados: 9
- Plantas sin articulo de blog: 352
- Paginas creadas: 5 (index, planta/[id], blog/index, blog/[slug], tienda)
- Productos en tienda: 6 (con enlaces de afiliado activos)
- Version de Astro: 7.2.9
- Entorno: Local (localhost:4321)
- Hosting en produccion: Pendiente de despliegue en Vercel

================================================================
11. REGLA DE ORO DE LA ASISTENCIA TECNICA
================================================================
El usuario NO es programador. Por lo tanto, TODA instruccion tecnica 
proporcionada por el asistente debe cumplir con:
1. Ser paso a paso, detallada y explicita (tipo "receta de cocina").
2. Incluir los comandos exactos de terminal/consola a escribir.
3. Indicar claramente como encender/detener el servidor local.
4. Especificar rutas exactas de archivos y nombres de botones a clicar.
5. Nunca asumir conocimiento previo de programacion o bases de datos.
6. ESPECIFICAR SIEMPRE si se debe crear una CARPETA o un ARCHIVO DE TEXTO, 
   y dar la ruta exacta (ej: src/pages/tienda.astro).
7. IR UN SOLO PASO A LA VEZ. No dar múltiples tareas juntas.
8. DOCUMENTAR TODO en el ESTADO_PROYECTO.md al final de cada sesion.

================================================================
12. FLUJO DE TRABAJO - ACTUALIZACION DE ESTE DOCUMENTO
================================================================
DESPUES DE CADA SESION DE TRABAJO:
1. El asistente genera el "Estado del Proyecto" actualizado.
2. El usuario abre ESTADO_PROYECTO.md con Bloc de notas.
3. El usuario reemplaza TODO el contenido con la nueva version.
4. El usuario guarda el archivo (Ctrl + S).
5. (Opcional) El usuario hace commit y push a GitHub para respaldo.

INSTRUCCIONES DE COPIADO:
- Cuando el asistente proporcione codigo para un archivo, indicara 
  EXPLICITAMENTE: "Copia y pega TODO este codigo en [ruta del archivo]"
- El usuario debe reemplazar COMPLETAMENTE el contenido del archivo
- Si es un archivo nuevo, el usuario debe crearlo en la ruta indicada

================================================================
13. ESTRATEGIA DE CRECIMIENTO AUTOMATICO Y MONETIZACION
================================================================
OBJETIVO: Web que trabaja sola con tráfico orgánico y monetización pasiva.

ESTRATEGIAS DE MONETIZACION (ACTIVAS):
1. Tienda de Afiliados Amazon (COMPLETADA - 29/sep/2026):
   - Cuenta de Amazon Associates aprobada (ID: hierbasyraice-20).
   - Método de pago configurado (Global66).
   - Pagina /tienda.astro con 6 productos reales, imágenes y enlaces de rastreo.
   - SiteStripe dominado para agregar futuros productos.
2. Proximamente: Amazon OneLink, Ko-fi, Google AdSense, PDFs descargables.

================================================================
14. NOTAS DE LA SESION DE HOY (29/sep/2026)
================================================================
- Se corrigio la pagina de tienda para mantener la misma estetica que 
  el resto del sitio (importando '../styles/global.css').
- Se descubrio y documentó que NO hay un layout compartido; cada pagina 
  .astro tiene su propio HTML completo.
- El usuario completó exitosamente el registro en Amazon Associates, 
  configuración fiscal (Chile/No-EE.UU.) y método de pago (Global66).
- Se dominó el uso de SiteStripe para generar enlaces de afiliado.
- Se cargaron 6 productos reales en la tienda con sus respectivas imágenes 
  y enlaces de rastreo (tag=hierbasyraice-20).
- El proyecto está 100% listo en local para su despliegue en Vercel.

================================================================
FIN DEL DOCUMENTO MAESTRO - VERSION 2.6
================================================================