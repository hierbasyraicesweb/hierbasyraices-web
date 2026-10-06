================================================================
ESTADO MAESTRO DEL PROYECTO - HIERBAS Y RAICES
================================================================
Fecha de actualizacion: 03 de octubre de 2026 (Sesion 8 - Dominio Conectado y Flujo de Trabajo Definido)
Version del documento: 3.0 (Sitio en Produccion con Dominio Propio Activo)
Dominio: hierbasyraices.com (Namecheap -> Vercel, DNS configurado y VALIDO)

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

PROTECCION DE AUTORIA:
- Se establecera aviso de copyright en el footer: "© 2026 Hierbas y Raíces. Todos los derechos reservados."
- La propiedad intelectual se consolida mediante indexacion en Google Search Console (pendiente) y Sitemap.xml.

================================================================
2. STACK TECNICO (HERRAMIENTAS Y PLATAFORMAS)
================================================================
FUNCIONANDO ACTUALMENTE:
- Base de datos: Supabase (Postgres, plan gratuito)
- Frontend: Astro (sitio estatico/SSR) + Vite (dev server local)
- Estilos: Tailwind CSS + DaisyUI + colores personalizados (beige/verde/naranja)
- Editor de codigo: Visual Studio Code (VS Code)
- Control de versiones: Git + GitHub (Usuario: hierbasyraicesweb)
- Hosting en Produccion: Vercel (Despliegue automatico desde GitHub)
- Version de Astro: v7.2.9
- Monetizacion: Amazon Associates (ID: hierbasyraice-20, pago via Global66)
- Correo del proyecto: hierbasyraices.web@gmail.com

PENDIENTE DE CONECTAR/CONFIGURAR:
- ✅ Conexion del dominio personalizado (Namecheap -> Vercel): COMPLETADO.
- Google Search Console y Google Analytics 4 (Para consolidar autoria y metricas).
- Mailchimp o Brevo (newsletter).
- Google AdSense, Ko-fi.

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

TABLA "failed_searches" (PENDIENTE DE CREAR):
id, search_term, timestamp, count. (Para registrar que buscan los 
usuarios y no encuentran, guiando la creacion de nuevo contenido).

ADVERTENCIA: Las dos tablas principales tienen nombres de columna en 
idiomas diferentes. Tenerlo siempre presente al escribir consultas SQL.

================================================================
4. LO QUE YA FUNCIONA (ESTADO ACTUAL)
================================================================
FUNCIONALIDADES BASE:
- 361 plantas cargadas y curadas (estado_revision = "Resuelto - informativo").
- 97 plantas corregidas via SQL (formato numerado por categoria).
- Buscador inteligente en tiempo real (filtra sin tildes, busca por 
  palabras sueltas y dolencias, muestra contador y mensaje "sin resultados").
  *NOTA: En el plan gratuito de Vercel, la primera busqueda tras un 
  periodo de inactividad puede tener un ligero retraso ("cold start"). 
  Las busquedas subsiguientes funcionan instantaneamente.
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

DESPLIEGUE Y PRODUCCION:
- Repositorio GitHub publico: hierbasyraicesweb/hierbasyraices-web
- Adaptador de Vercel instalado (@astrojs/vercel) y configurado.
- Variables de entorno de Supabase configuradas en Vercel como tipo "Config".
- URL de produccion activa: https://hierbasyraices.com (Dominio principal)
- URL de respaldo: https://hierbasyraices-web.vercel.app
- Flujo automatico: Cada "Commit" y "Push" en GitHub despliega la web en ~30s.

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
6. PLAN DE PUBLICACION DE ARTICULOS Y FLUJO DE TRABAJO
================================================================
FRECUENCIA RECOMENDADA: 1-2 articulos por semana.
PROXIMOS ARTICULOS SUGERIDOS: Lavanda, Menta, Salvia, Eucalipto, Jengibre.

PLANTILLAS DE SOLICITUD AL ASISTENTE (COPIAR Y PEGAR PARA EVITAR ITERACIONES):
1. Para nuevo articulo de blog:
   "Hola, hoy toca crear el artículo de blog para la planta: [NOMBRE]. 
   Genera el contenido en HTML puro siguiendo la Guía Maestra (Sección 5), 
   con enfoque histórico/cultural, disclaimer al final, mínimo 1000 palabras 
   y FAQ Schema en JSON. Al final, dame el comando SQL exacto para `blog_posts`."

2. Para nuevo producto en tienda:
   "Hola, quiero agregar un nuevo producto a la tienda. Datos: Nombre: [NOMBRE], 
   Enlace: [LINK], Imagen: [LINK]. Dame el código HTML exacto para agregar a 
   `src/pages/tienda.astro` y las instrucciones paso a paso."

3. Para actualizar planta en base de datos:
   "Hola, necesito actualizar/agregar la planta [NOMBRE] en la tabla `plants`. 
   Datos: [PEGAR DATOS]. Genera el comando SQL (usando ON CONFLICT) y el 
   paso a paso para ejecutarlo en Supabase."

================================================================
7. PENDIENTES POR HACER (ROADMAP COMPLETO)
================================================================
TAREAS PARA LA PRÓXIMA SESIÓN (PRIORIDAD ABSOLUTA):
1. Google Search Console (GSC): Configurar para avisar a Google que la web es 
   nuestra, registrar la fecha de creación y consolidar autoría contra plagio.
2. Aviso de Copyright en el Footer: Agregar la línea "© 2026 Hierbas y Raíces. 
   Todos los derechos reservados. Contenido con fines históricos y culturales."
3. Sitemap.xml y robots.txt: Crear para que Google indexe (lea) el contenido 
   rápido y consolide nuestra autoría.
4. Crear tabla "failed_searches" en Supabase y conectarla al buscador.

PRIORIDAD ALTA:
5. Configurar Amazon OneLink para redirigir compradores a su Amazon local.
6. Formulario de newsletter (Brevo/Mailchimp) integrado en el footer.
7. Diseño visual e imágenes: Definir flujo para obtener, optimizar y 
   servir imágenes de plantas (dominio público o históricas).

PRIORIDAD MEDIA/BAJA:
8. Google AdSense, Ko-fi, PDFs descargables.
9. Google Analytics 4 para medir tráfico real.

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
10. El archivo .env NUNCA se sube a GitHub. Las claves viven en local 
    y en "Environment Variables" de Vercel.
11. En Vercel, las variables que empiezan con "PUBLIC_" deben configurarse 
    como tipo "Config" (no "Secret") para evitar errores de validacion.

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
- Entorno: Local (localhost:4321) Y Produccion (Vercel + Dominio Propio)
- Hosting en produccion: ✅ Vercel (https://hierbasyraices.com)

================================================================
11. REGLA DE ORO DE LA ASISTENCIA TECNICA Y FLUJO DE TRABAJO
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
7. IR UN SOLO PASO A LA VEZ. El asistente DEBE esperar la confirmacion 
   del usuario antes de avanzar al siguiente paso.
8. DOCUMENTAR TODO en el ESTADO_PROYECTO.md SOLO AL FINAL DEL DIA DE TRABAJO, 
   una vez verificadas las correcciones y el estado real de las tareas.

================================================================
12. FLUJO DE TRABAJO - ACTUALIZACION DE ESTE DOCUMENTO
================================================================
DESPUES DE CADA SESION DE TRABAJO:
1. El asistente genera el "Estado del Proyecto" actualizado.
2. El usuario abre ESTADO_PROYECTO.md con VS Code o Bloc de notas.
3. El usuario reemplaza TODO el contenido con la nueva version.
4. El usuario guarda el archivo (Ctrl + S).
5. El usuario hace commit y push a GitHub para respaldo.

================================================================
13. ESTRATEGIA DE CRECIMIENTO AUTOMATICO Y MONETIZACION
================================================================
OBJETIVO: Web que trabaja sola con trafico organico y monetizacion pasiva (Evergreen).

ESTRATEGIAS DE MONETIZACION (ACTIVAS):
1. Tienda de Afiliados Amazon (COMPLETADA):
   - Cuenta de Amazon Associates aprobada (ID: hierbasyraice-20).
   - Metodo de pago configurado (Global66).
   - Pagina /tienda.astro con 6 productos reales, imagenes y enlaces de rastreo.
   - SiteStripe dominado para agregar futuros productos.
2. Proximamente: Amazon OneLink, Ko-fi, Google AdSense, PDFs descargables.

================================================================
14. NOTAS DE LA SESION DE HOY (03/10/2026)
================================================================
- OBJETIVO DE LA SESION: Subir la página y conectar con el dominio propio.
- Se configuraron exitosamente los registros DNS en Namecheap (Advanced DNS):
  * Eliminados registros de estacionamiento (parkingpage) y redirección.
  * A Record: Host `@` -> Value `216.198.79.1`
  * CNAME Record: Host `www` -> Value `5db2e1c7fbc2e891.vercel-dns-017.com.`
- Se verificó en Vercel: Estado cambiado a "Valid Configuration" (Check azul).
- PRUEBA FINAL: Se confirmó que https://hierbasyraices.com carga correctamente 
  la página principal, el blog y la tienda.
- OBSERVACION: Se detectó un ligero retraso ("cold start") en la primera 
  búsqueda del buscador tras inactividad, comportamiento normal del plan 
  gratuito de Vercel. Las búsquedas subsiguientes funcionan perfectamente.
- Se definieron plantillas de prompt estandarizadas para solicitar al 
  asistente nuevos artículos, productos o actualizaciones de plantas, 
  garantizando cero iteraciones innecesarias.

================================================================
FIN DEL DOCUMENTO MAESTRO - VERSION 3.0
================================================================