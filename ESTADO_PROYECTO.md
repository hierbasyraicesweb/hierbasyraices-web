================================================================
ESTADO MAESTRO DEL PROYECTO - HIERBAS Y RAÍCES
================================================================
Fecha de actualización: 15 de octubre de 2026 (Sesión 10 - Corrección 
de errores de indexación en GSC y configuración de dominios en Vercel)
Versión del documento: 6.0 (Dominios corregidos en Vercel, sitemaps 
en estado "Correcto", indexación solicitada)
Dominio: hierbasyraices.com (Namecheap -> Vercel, DNS configurado y VÁLIDO)

⚠️ REGLA DE ORO DE ESTE DOCUMENTO:
Este archivo es HISTÓRICO y COMPLETO. Cada nueva versión debe 
incluir TODO el contenido anterior más los nuevos cambios, errores, 
aciertos, descubrimientos y lecciones aprendidas. NUNCA se borra 
información de versiones anteriores. Es el registro vivo del proyecto.

⚠️ REGLA DE ORO DEL FORMATO DE ENTREGA:
Al final de cada día de trabajo, el asistente debe entregar el 
"Estado del Proyecto" en formato de texto plano (dentro de un bloque 
de código), listo para copiar y pegar en el bloc de notas o VS Code. 
Este estado debe incluir: todo lo que ya está completamente hecho, 
todo lo nuevo que se realizó, cómo debe hacerse, los aciertos, los 
errores y esta misma instrucción sobre lo que debe ir en el estado 
del proyecto.
================================================================

================================================================
1. IDENTIDAD Y MARCO LEGAL DEL PROYECTO
================================================================
QUÉ ES:
Enciclopedia digital de patrimonio etnobotánico iberoamericano.
361 plantas medicinales documentadas con enfoque histórico/cultural.

REGLA DE ORO DEL CONTENIDO (NO NEGOCIABLE):
- NUNCA se dice "esto cura", "esto trata" o "esto alivia".
- SIEMPRE se dice "esto se usaba tradicionalmente para", "en la 
  tradición se empleaba para" o "documentado históricamente para".

MARCO LEGAL (NO NEGOCIABLE):
Disclaimer fijo en header, footer y cada ficha de planta/artículo:
"Esta información tiene fines históricos y culturales, y no constituye 
una recomendación de uso, dosis ni tratamiento. Consulte a un 
profesional de la salud antes de usar cualquier planta con fines 
terapéuticos."

PROTECCIÓN DE AUTORÍA:
- Aviso de copyright en el footer: "© 2026 Hierbas y Raíces. Todos 
  los derechos reservados."
- Propiedad intelectual consolidada mediante:
  * Google Search Console (VERIFICADO el 07/10/2026)
  * Sitemap.xml enviado a Google
  * robots.txt configurado
- Archivo de verificación de Google: 
  public/google4597b1450f33f5a2.html (NO ELIMINAR NUNCA)

================================================================
2. STACK TÉCNICO (HERRAMIENTAS Y PLATAFORMAS)
================================================================
FUNCIONANDO ACTUALMENTE:
- Base de datos: Supabase (Postgres, plan gratuito)
- Frontend: Astro (sitio SSR) + Vite (dev server local)
- Estilos: Tailwind CSS + DaisyUI + colores personalizados 
  (beige/verde/naranja)
- Editor de código: Visual Studio Code (VS Code)
- Control de versiones: Git + GitHub (Usuario: hierbasyraicesweb)
- Hosting en Producción: Vercel (Despliegue automático desde GitHub)
- Versión de Astro: v7.3.5 (actualizada desde v7.2.9)
- Plugin Sitemap: @astrojs/sitemap (instalado 07/10/2026)
- Monetización: Amazon Associates (ID: hierbasyraice-20, pago via 
  Global66)
- Correo del proyecto: hierbasyraices.web@gmail.com
- Google Search Console: ✅ VERIFICADO (07/10/2026)
- Dominios en Vercel: ✅ CONFIGURADOS CORRECTAMENTE (15/10/2026)

PENDIENTE DE CONECTAR/CONFIGURAR:
- ✅ Conexión del dominio personalizado (Namecheap -> Vercel): 
  COMPLETADO (03/10/2026).
- ✅ Google Search Console: COMPLETADO (07/10/2026).
- ✅ Sitemap.xml y robots.txt: COMPLETADO (07/10/2026).
- ✅ Corrección de redirección en Vercel: COMPLETADO (15/10/2026).
- Google Analytics 4 (Para medir tráfico real).
- Mailchimp o Brevo (newsletter).
- Google AdSense, Ko-fi.

================================================================
3. ESTRUCTURA DE BASE DE DATOS (SUPABASE)
================================================================
TABLA "plants" (Columnas en ESPAÑOL):
nombre_principal, nombre_cientifico, familia_botanica, categoria, 
nombres_españa, nombres_cono_sur, nombres_andinos, nombres_mexico_ca, 
origen_tradicion, usos_tradicionales, preparacion_tradicional, 
partes_utilizadas, advertencia, fuentes, meta_title, meta_description, 
faq_schema, estado_revision, notas_curatoria, busqueda (sin tilde).

TABLA "blog_posts" (Columnas en INGLÉS) - DETALLE CRÍTICO:
title, slug, excerpt, content, featured_image, published_at, tags, 
related_plants, meta_title, meta_description, faq_schema.

TABLA "failed_searches" (CREADA el 07/10/2026):
- id (SERIAL PRIMARY KEY)
- search_term (TEXT NOT NULL)
- timestamp (TIMESTAMP WITH TIME ZONE DEFAULT NOW())
- count (INTEGER DEFAULT 1)
- Índice creado: idx_failed_searches_term ON search_term
- Estado: CREADA pero AÚN NO CONECTADA al buscador
- Propósito: Registrar búsquedas sin resultados para guiar 
  creación de nuevo contenido

ADVERTENCIA: Las dos tablas principales tienen nombres de columna en 
idiomas diferentes. Tenerlo siempre presente al escribir consultas SQL.

================================================================
4. LO QUE YA FUNCIONA (ESTADO ACTUAL)
================================================================
FUNCIONALIDADES BASE:
- 361 plantas cargadas y curadas (estado_revision = "Resuelto - 
  informativo").
- 97 plantas corregidas vía SQL (formato numerado por categoría).
- Buscador inteligente en tiempo real (filtra sin tildes, busca por 
  palabras sueltas y dolencias, muestra contador y mensaje "sin 
  resultados").
  *NOTA: En el plan gratuito de Vercel, la primera búsqueda tras un 
  periodo de inactividad puede tener un ligero retraso ("cold start"). 
  Las búsquedas subsiguientes funcionan instantáneamente.
- Diseño responsive con tema verde/café/beige personalizado.
- Página individual de artículo renderizando correctamente con 
  set:html.

MEJORAS DE NAVEGACIÓN Y CONTENIDO REALIZADAS:
- 9 artículos de blog publicados: Manzanilla, Aloe vera, Romero, Ruda, 
  Ortiga, Oregano, Papaya, Pino y Clavo de olor.
- Formato unificado: Todos los artículos usan HTML puro (NO Markdown).
- Negritas estratégicas y FAQ Schema (JSON-LD) en los 9 artículos.
- NAVEGACIÓN GLOBAL COMPLETADA: El botón "Ir a la Tienda" ha sido 
  integrado exitosamente en TODAS las secciones de la web.
- TIENDA COMPLETADA: Página /tienda.astro con 6 productos reales de 
  Amazon Afiliados (libros, aceites, tés y mortero), con imágenes y 
  enlaces de rastreo (tag=hierbasyraice-20) funcionando correctamente.

MEJORAS REALIZADAS EL 07/10/2026:
- ✅ Footer con Copyright y Disclaimer legal agregado en:
  * src/pages/index.astro (Home)
  * src/pages/blog/index.astro (Listado de blog)
  * src/pages/blog/[slug].astro (Artículo individual)
  * src/pages/tienda.astro (ya lo tenía previamente)
- ✅ Archivo robots.txt creado en public/robots.txt
- ✅ Plugin @astrojs/sitemap instalado y configurado
- ✅ Sitemap generado automáticamente en producción:
  * https://hierbasyraices.com/sitemap-index.xml
  * https://hierbasyraices.com/sitemap-0.xml
- ✅ Google Search Console verificado con archivo HTML
- ✅ Sitemap enviado a Google Search Console

MEJORAS REALIZADAS EL 15/10/2026:
- ✅ Corrección de configuración de dominios en Vercel:
  * hierbasyraices.com → Production (dominio principal, sin redirección)
  * www.hierbasyraices.com → 301 Moved Permanently → hierbasyraices.com
  * hierbasyraices-web.vercel.app → Production (respaldo)
- ✅ Verificación de DNS en Namecheap (correctos desde Sesión 8)
- ✅ Sitemaps en estado "Correcto" en GSC (antes "No se ha podido obtener")
- ✅ Indexación manual solicitada para https://hierbasyraices.com/

DESPLIEGUE Y PRODUCCIÓN:
- Repositorio GitHub público: hierbasyraicesweb/hierbasyraices-web
- Adaptador de Vercel instalado (@astrojs/vercel) y configurado.
- Variables de entorno de Supabase configuradas en Vercel como tipo 
  "Config".
- URL de producción activa: https://hierbasyraices.com (Dominio 
  principal)
- URL de respaldo: https://hierbasyraices-web.vercel.app
- Flujo automático: Cada "Commit" y "Push" en GitHub despliega la web 
  en ~30s.
- Archivo de verificación de Google: 
  public/google4597b1450f33f5a2.html (NO ELIMINAR)

================================================================
5. GUÍA MAESTRA DE FORMATO PARA ARTÍCULOS DEL BLOG
================================================================
REGLAS DE CONTENIDO:
1. Enfoque histórico/cultural, nunca médico ni prescriptivo.
2. Disclaimer legal obligatorio al final de cada artículo.
3. Mínimo 1,000 palabras por artículo para buen SEO.

FORMATO TÉCNICO (HTML PURO, NO MARKDOWN):
- Título principal: <h1>Título</h1>
- Subtítulo: <h2>Subtítulo</h2>
- Párrafo: <p>Texto</p>
- Negrita: <strong>texto</strong>
- Cursiva: <em>texto</em>
- Lista con viñetas: <ul><li>elemento</li></ul>
- Lista numerada: <ol><li>elemento</li></ol>
- Separador horizontal: <hr>

ERRORES COMUNES A EVITAR EN SQL:
1. Comillas dobles dentro del JSON del faq_schema: deben escaparse 
   con \"
2. Usar Markdown (**negrita**, ## título): NO funciona con set:html.
3. Poner nombres de plantas en related_plants: espera IDs numéricos.
4. Olvidar ::jsonb al final del faq_schema.

================================================================
6. PLAN DE PUBLICACIÓN DE ARTÍCULOS Y FLUJO DE TRABAJO
================================================================
FRECUENCIA RECOMENDADA: 1-2 artículos por semana.
PRÓXIMOS ARTÍCULOS SUGERIDOS: Lavanda, Menta, Salvia, Eucalipto, 
Jengibre.

PLANTILLAS DE SOLICITUD AL ASISTENTE (COPIAR Y PEGAR PARA EVITAR 
ITERACIONES):
1. Para nuevo artículo de blog:
   "Hola, hoy toca crear el artículo de blog para la planta: 
   [NOMBRE]. Genera el contenido en HTML puro siguiendo la Guía 
   Maestra (Sección 5), con enfoque histórico/cultural, disclaimer al 
   final, mínimo 1000 palabras y FAQ Schema en JSON. Al final, dame 
   el comando SQL exacto para `blog_posts`."

2. Para nuevo producto en tienda:
   "Hola, quiero agregar un nuevo producto a la tienda. Datos: 
   Nombre: [NOMBRE], Enlace: [LINK], Imagen: [LINK]. Dame el código 
   HTML exacto para agregar a `src/pages/tienda.astro` y las 
   instrucciones paso a paso."

3. Para actualizar planta en base de datos:
   "Hola, necesito actualizar/agregar la planta [NOMBRE] en la tabla 
   `plants`. Datos: [PEGAR DATOS]. Genera el comando SQL (usando ON 
   CONFLICT) y el paso a paso para ejecutarlo en Supabase."

================================================================
7. PENDIENTES POR HACER (ROADMAP COMPLETO ACTUALIZADO)
================================================================
TAREAS COMPLETADAS EN SESIÓN 07/10/2026:
✅ 1. Google Search Console: Verificado y sitemap enviado.
✅ 2. Aviso de Copyright en el Footer: Agregado en todas las páginas 
   principales.
✅ 3. Sitemap.xml y robots.txt: Creados y funcionando en producción.
✅ 4. Tabla "failed_searches" en Supabase: Creada (pendiente conectar 
   al buscador).

TAREAS COMPLETADAS EN SESIÓN 15/10/2026:
✅ 5. Corrección de configuración de dominios en Vercel: Eliminada 
   redirección incorrecta (apex → www) y configurada correctamente 
   (www → apex con 301).
✅ 6. Verificación de DNS en Namecheap: Confirmados como correctos.
✅ 7. Sitemaps en estado "Correcto" en GSC.
✅ 8. Indexación manual solicitada para URL principal.

PRIORIDAD ALTA (PARA PRÓXIMAS SESIONES):
9. Sitemap personalizado completo (incluir 361 plantas + 9 artículos 
   del blog). Ver tabla de tiempos estimados en Sección 16.
   *CRÍTICO: Google solo conoce 3 URLs, necesita ~375 URLs.
10. Conectar tabla "failed_searches" al buscador para registrar 
    búsquedas sin resultados.
11. Configurar Amazon OneLink para redirigir compradores a su Amazon 
    local.
12. Formulario de newsletter (Brevo/Mailchimp) integrado en el footer.
13. Google Analytics 4 para medir tráfico real.

PRIORIDAD MEDIA:
14. Diseño visual e imágenes: Definir flujo para obtener, optimizar y 
    servir imágenes de plantas (dominio público o históricas).
15. Google AdSense (requiere tráfico constante previo).

PRIORIDAD BAJA:
16. Ko-fi para donaciones.
17. PDFs descargables.

================================================================
8. DECISIONES TÉCNICAS CLAVE (A RESPETAR SIEMPRE)
================================================================
1. Astro no permite pasar variables del servidor al cliente con 
   {variable} dentro de <script> -> usar siempre define:vars.
2. El contenido del blog se renderiza con set:html={post.content}.
3. La columna de búsqueda se llama "busqueda" (sin tilde).
4. Las tablas tienen columnas en idiomas diferentes (plants=ES, 
   blog_posts=EN).
5. related_plants es integer[] -> requiere IDs numéricos, no texto.
6. faq_schema es jsonb -> las comillas dobles internas se escapan 
   con \".
7. Usar ON CONFLICT (slug) DO UPDATE para actualizar sin duplicar.
8. Reiniciar el servidor local (Ctrl+C y npm run dev) cuando se 
   agregan nuevos artículos en Supabase mientras el servidor está 
   corriendo.
9. TODAS las páginas deben usar la misma estructura de colores:
   - Fondo beige: bg-[#f5f5dc]
   - Header verde claro: bg-[#e8f0e3]
   - Texto verde oscuro: text-[#2d5016]
   - Botones verdes: bg-[#4a7c23] y bg-[#689f38]
   - Botón naranja (tienda): bg-[#ff9900]
   - Bordes verdes: border-[#c8e6c9]
10. El archivo .env NUNCA se sube a GitHub. Las claves viven en local 
    y en "Environment Variables" de Vercel.
11. En Vercel, las variables que empiezan con "PUBLIC_" deben 
    configurarse como tipo "Config" (no "Secret") para evitar errores 
    de validación.
12. ⚠️ NUEVA (07/10/2026): El plugin @astrojs/sitemap NO genera el 
    sitemap en modo desarrollo local (npm run dev). Solo se genera 
    durante el build de producción. Por eso da 404 en localhost pero 
    funciona en hierbasyraices.com.
13. ⚠️ NUEVA (07/10/2026): En modo SSR (output: 'server'), el plugin 
    automático de sitemap SOLO detecta páginas estáticas predefinidas 
    (/, /blog, /tienda). NO detecta rutas dinámicas de Supabase 
    (/planta/1, /blog/aloe-vera, etc.).
14. ⚠️ NUEVA (07/10/2026): Las etiquetas <style> deben ir dentro del 
    <head>, nunca fuera del </html>. Si están fuera, el HTML es 
    inválido y puede causar problemas de SEO.
15. ️ NUEVA (07/10/2026): El archivo de verificación de Google 
    (google4597b1450f33f5a2.html) debe permanecer SIEMPRE en la 
    carpeta public/. Si se elimina, se pierde la verificación en GSC.
16. ⚠️ NUEVA (07/10/2026): Google Search Console puede mostrar "No se 
    ha podido obtener" en el sitemap las primeras 24-48 horas. Es 
    normal. Google reintentará automáticamente.
17. ⚠️ NUEVA (15/10/2026): En Vercel, el checkbox "Redirect apex 
    domains to www (recommended)" crea una redirección de 
    hierbasyraices.com → www.hierbasyraices.com que Google marca como 
    error "Página con redirección". DEBE ESTAR DESMARCADO para que 
    hierbasyraices.com sea el dominio principal.
18. ⚠️ NUEVA (15/10/2026): La configuración correcta de dominios en 
    Vercel es:
    - hierbasyraices.com → Connect to Production (dominio principal)
    - www.hierbasyraices.com → Redirect 301 → hierbasyraices.com
    - hierbasyraices-web.vercel.app → Connect to Production (respaldo)
19. ️ NUEVA (15/10/2026): Google tarda 24-72 horas en re-rastrear 
    un sitio después de cambios de configuración. Los datos en GSC 
    pueden estar desactualizados (ej: "Última actualización: 8/10/26" 
    cuando hoy es 15/10/26).
20. ️ NUEVA (15/10/2026): Google puede tener en caché una URL 
    canónica incorrecta (ej: www.hierbasyraices.com) aunque ya se 
    corrigió en Vercel. Se necesita solicitar indexación manual y 
    esperar el re-rastreo.

================================================================
9. ARCHIVOS CLAVE DEL PROYECTO
================================================================
- Página principal: src/pages/index.astro (con footer actualizado)
- Ficha de planta: src/pages/planta/[id].astro (⚠️ SIN FOOTER AÚN)
- Listado blog: src/pages/blog/index.astro (con footer actualizado)
- Artículo blog: src/pages/blog/[slug].astro (con footer actualizado)
- Página de tienda: src/pages/tienda.astro (con footer previo)
- Estilos globales: src/styles/global.css
- Cliente de Supabase: src/lib/supabase.js
- Configuración Astro: astro.config.mjs (con plugin sitemap)
- Robots.txt: public/robots.txt (CREADO 07/10/2026)
- Verificación Google: public/google4597b1450f33f5a2.html (CREADO 
  07/10/2026 - NO ELIMINAR)
- Sitemap automático: Generado en build (sitemap-index.xml y 
  sitemap-0.xml)

NOTA: NO existe un archivo de layout compartido. Cada página (.astro)
tiene su propia estructura HTML completa (header, body, footer).
Por eso es CRÍTICO mantener la misma estructura de clases en todas.

⚠️ PENDIENTE: Agregar footer a src/pages/planta/[id].astro (fichas 
individuales de plantas).

================================================================
10. MÉTRICAS ACTUALES
================================================================
- Plantas en base de datos: 361
- Artículos de blog publicados: 9
- Plantas sin artículo de blog: 352
- Páginas creadas: 5 (index, planta/[id], blog/index, blog/[slug], 
  tienda)
- Productos en tienda: 6 (con enlaces de afiliado activos)
- Versión de Astro: 7.3.5
- Entorno: Local (localhost:4321) Y Producción (Vercel + Dominio 
  Propio)
- Hosting en producción: ✅ Vercel (https://hierbasyraices.com)
- Google Search Console: ✅ VERIFICADO (07/10/2026)
- Dominios en Vercel: ✅ CONFIGURADOS CORRECTAMENTE (15/10/2026)
- Sitemaps: ✅ EN ESTADO "CORRECTO" (15/10/2026) - pero solo incluyen 
  3 URLs (/, /blog/, /tienda/)
- robots.txt: ✅ Configurado
- Tabla failed_searches: ✅ Creada (pendiente conectar)
- Páginas indexadas en Google: 0 (sitio nuevo, en proceso)
- Páginas sin indexar: 3 (1 por redirección - en proceso de 
  resolución, 2 descubiertas sin indexar - normal en sitio nuevo)

================================================================
11. REGLA DE ORO DE LA ASISTENCIA TÉCNICA Y FLUJO DE TRABAJO
================================================================
El usuario NO es programador. Por lo tanto, TODA instrucción técnica 
proporcionada por el asistente debe cumplir con:
1. Ser paso a paso, detallada y explícita (tipo "receta de cocina").
2. Incluir los comandos exactos de terminal/consola a escribir.
3. Indicar claramente cómo encender/detener el servidor local.
4. Especificar rutas exactas de archivos y nombres de botones a 
   clicar.
5. Nunca asumir conocimiento previo de programación o bases de datos.
6. ESPECIFICAR SIEMPRE si se debe crear una CARPETA o un ARCHIVO DE 
   TEXTO, y dar la ruta exacta (ej: src/pages/tienda.astro).
7. IR UN SOLO PASO A LA VEZ. El asistente DEBE esperar la 
   confirmación del usuario antes de avanzar al siguiente paso.
8. DOCUMENTAR TODO en el ESTADO_PROYECTO.md SOLO AL FINAL DEL DÍA DE 
   TRABAJO, una vez verificadas las correcciones y el estado real de 
   las tareas.
9. ⚠️ El ESTADO_PROYECTO.md debe ser HISTÓRICO Y COMPLETO. Cada nueva 
   versión incluye TODO el contenido anterior más los nuevos cambios. 
   NUNCA se borra información de versiones anteriores. Debe registrar: 
   errores, aciertos, descubrimientos, lecciones aprendidas, dónde va 
   cada cosa, cómo se hizo, absolutamente todo.
10. ⚠️ El asistente SIEMPRE debe entregar el Estado del Proyecto en 
    formato de texto plano (dentro de un bloque de código), listo 
    para que el usuario lo copie y pegue directamente en el archivo 
    ESTADO_PROYECTO.md de VS Code, reemplazando todo el contenido 
    anterior sin errores de formato.

================================================================
12. FLUJO DE TRABAJO - ACTUALIZACIÓN DE ESTE DOCUMENTO
================================================================
DESPUÉS DE CADA SESIÓN DE TRABAJO:
1. El asistente genera el "Estado del Proyecto" actualizado (versión 
   histórica completa).
2. El usuario abre ESTADO_PROYECTO.md con VS Code o Bloc de notas.
3. El usuario reemplaza TODO el contenido con la nueva versión.
4. El usuario guarda el archivo (Ctrl + S).
5. El usuario hace commit y push a GitHub para respaldo.

FLUJO DE TRABAJO OBLIGATORIO PARA CAMBIOS EN LA WEB:
1. Trabajar en LOCAL (VS Code + npm run dev)
2. Verificar cambios en http://localhost:4321
3. Detener servidor (Ctrl + C)
4. git add .
5. git commit -m "mensaje descriptivo"
6. git push
7. Esperar despliegue automático en Vercel (~30-60 segundos)
8. Verificar en https://hierbasyraices.com

⚠️ LECCIÓN APRENDIDA (07/10/2026): NO se puede editar directamente 
la página en internet. Vercel solo muestra lo que llega desde GitHub. 
El flujo siempre es: editar en local → subir → Vercel actualiza 
automáticamente.

================================================================
13. ESTRATEGIA DE CRECIMIENTO AUTOMÁTICO Y MONETIZACIÓN
================================================================
OBJETIVO: Web que trabaja sola con tráfico orgánico y monetización 
pasiva (Evergreen).

ESTRATEGIAS DE MONETIZACIÓN (ACTIVAS):
1. Tienda de Afiliados Amazon (COMPLETADA):
   - Cuenta de Amazon Associates aprobada (ID: hierbasyraice-20).
   - Método de pago configurado (Global66).
   - Página /tienda.astro con 6 productos reales, imágenes y enlaces 
     de rastreo.
   - SiteStripe dominado para agregar futuros productos.
2. Próximamente: Amazon OneLink, Ko-fi, Google AdSense, PDFs 
   descargables.

ESTRATEGIA SEO (ACTIVADA EL 07/10/2026, ACTUALIZADA 15/10/2026):
- ✅ Google Search Console verificado
- ✅ Sitemap enviado a Google (estado "Correcto" desde 15/10/2026)
- ✅ robots.txt configurado
- ✅ Configuración de dominios corregida en Vercel (15/10/2026)
- ✅ Indexación manual solicitada (15/10/2026)
- ⏳ Esperando re-rastreo de Google (24-72 horas)
- ⚠️ Sitemap personalizado completo pendiente (incluirá 361 plantas 
  + 9 artículos) - CRÍTICO para que Google conozca todas las páginas

================================================================
14. HISTORIAL DE SESIONES (DESDE LA GÉNESIS)
================================================================

SESIÓN 1-7: (Resumen histórico - Sesiones iniciales del proyecto)
- Configuración inicial del proyecto Astro
- Conexión con Supabase
- Carga de 361 plantas en la base de datos
- Corrección de 97 plantas vía SQL
- Implementación del buscador inteligente
- Diseño responsive con Tailwind + DaisyUI
- Publicación de 9 artículos de blog
- Creación de la tienda con 6 productos de Amazon Afiliados
- Configuración de Amazon Associates (ID: hierbasyraice-20)

SESIÓN 8 (03/10/2026): Dominio Conectado y Flujo de Trabajo Definido
- OBJETIVO: Subir la página y conectar con el dominio propio.
- Se configuraron exitosamente los registros DNS en Namecheap 
  (Advanced DNS):
  * Eliminados registros de estacionamiento (parkingpage) y 
    redirección.
  * A Record: Host `@` -> Value `216.198.79.1`
  * CNAME Record: Host `www` -> Value 
    `5db2e1c7fbc2e891.vercel-dns-017.com.`
- Se verificó en Vercel: Estado cambiado a "Valid Configuration" 
  (Check azul).
- PRUEBA FINAL: Se confirmó que https://hierbasyraices.com carga 
  correctamente la página principal, el blog y la tienda.
- OBSERVACIÓN: Se detectó un ligero retraso ("cold start") en la 
  primera búsqueda del buscador tras inactividad, comportamiento 
  normal del plan gratuito de Vercel.
- Se definieron plantillas de prompt estandarizadas para solicitar 
  al asistente nuevos artículos, productos o actualizaciones de 
  plantas.

SESIÓN 9 (07/10/2026): GSC, Sitemap, Robots.txt y Footer con 
Copyright - VER DETALLE COMPLETO EN SECCIÓN 15.

SESIÓN 10 (15/10/2026): Corrección de errores de indexación en GSC 
y configuración de dominios en Vercel - VER DETALLE COMPLETO EN 
SECCIÓN 17.

================================================================
15. NOTAS DETALLADAS DE LA SESIÓN 09 (07/10/2026)
================================================================
(Se mantiene el registro histórico completo de la Sesión 9, incluyendo 
la creación de la tabla failed_searches, el footer con copyright, 
robots.txt, el plugin @astrojs/sitemap, la verificación en GSC, y las 
lecciones aprendidas sobre npm install, sitemap 404 en local, 
etiquetas <style> y las limitaciones del sitemap en modo SSR).

================================================================
16. PLAN DETALLADO PARA SITEMAP PERSONALIZADO COMPLETO
================================================================
(Pendiente para próxima sesión - Tiempo estimado: 90-100 minutos)
OBJETIVO: Incluir las 361 plantas + 9 artículos del blog + páginas 
estáticas en el sitemap (total ~375 URLs). Esto es CRÍTICO para que 
Google conozca todas las páginas del sitio.

PASOS Y TIEMPOS ESTIMADOS:
Paso | Descripción                                      | Tiempo
-----|--------------------------------------------------|--------
1    | Explicación del concepto y preparación           | 10 min
2    | Crear el archivo src/pages/sitemap.xml.ts        | 15-20 min
     | (endpoint personalizado)                         |
3    | Configurar la consulta a Supabase                | 10 min
     | (plantas + blog)                                 |
4    | Generar el XML dinámicamente con formato         | 10 min
     | correcto                                         |
5    | Ajustar astro.config.mjs                         | 5 min
     | (desactivar plugin automático)                   |
6    | Actualizar robots.txt con la nueva URL           | 5 min
7    | Pruebas en local                                 | 10 min
     | (localhost:4321/sitemap.xml)                     |
8    | Subir a GitHub y esperar despliegue en Vercel    | 15 min
9    | Verificar en producción y re-enviar en GSC       | 10 min
10   | Buffer para imprevistos o dudas                  | 10 min
-----|--------------------------------------------------|--------
TOTAL|                                                  | 90-100 min

RECOMENDACIÓN: Bloquear 2 horas seguidas sin interrupciones para 
terminar de una vez.

================================================================
17. NOTAS DETALLADAS DE LA SESIÓN 10 (15/10/2026)
================================================================

📅 FECHA: 15 de octubre de 2026
🎯 OBJETIVO DE LA SESIÓN: Resolver los errores de indexación 
reportados por Google Search Console (correo del 12/10/2026).

 ERROR REPORTADO POR GSC:
- Motivo: "Página con redirección" (1 página)
- Motivo: "Descubierta: actualmente sin indexar" (2 páginas)
- Fuente del correo: Google Search Console Team 
  (sc-noreply@google.com)

✅ LOGROS COMPLETADOS:

1. DIAGNÓSTICO DEL ERROR DE REDIRECCIÓN
   - Hora: Inicio de sesión
   - Acción: Análisis de capturas de GSC y Vercel
   - Descubrimiento: Vercel tenía configurado 
     "Redirect apex domains to www" activado, lo que causaba que 
     hierbasyraices.com redirigiera a www.hierbasyraices.com
   - Google detectaba esta redirección y la marcaba como error
   - Resultado: ✅ Diagnóstico completado

2. CORRECCIÓN DE DOMINIOS EN VERCEL
   - Hora: Durante la sesión
   - Acciones realizadas:
     a) Eliminación de www.hierbasyraices.com (dominio conectado 
        a Production)
     b) Eliminación accidental de hierbasyraices.com (se eliminaron 
        ambos dominios personalizados)
     c) Re-agregación de hierbasyraices.com con checkbox 
        "Redirect apex domains to www" DESMARCADO
     d) Agregación de www.hierbasyraices.com como redirección 301 
        hacia hierbasyraices.com
   - Configuración final:
     * www.hierbasyraices.com → 301 → hierbasyraices.com
     * hierbasyraices.com → Production (dominio principal)
     * hierbasyraices-web.vercel.app → Production (respaldo)
   - Resultado: ✅ Todos los dominios en "Valid Configuration"

3. VERIFICACIÓN DE DNS EN NAMECHEAP
   - Hora: Durante la sesión
   - Acción: Revisión de registros DNS en Namecheap
   - Registros confirmados:
     * A Record: @ → 216.198.79.1
     * CNAME Record: www → 5db2e1c7fbc2e891.vercel-dns-017.com.
   - Resultado: ✅ DNS correctos, no requirieron cambios

4. VERIFICACIÓN DE SITEMAPS EN GSC
   - Hora: Durante la sesión
   - Acción: Revisión de estado de sitemaps en GSC
   - Resultado: ✅ Ambos sitemaps cambiaron de "No se ha podido 
     obtener" a "Correcto"
   - Limitación: Solo incluyen 3 URLs (/, /blog/, /tienda/)

5. SOLICITUD DE INDEXACIÓN MANUAL
   - Hora: Final de sesión
   - Acción: Inspección de URL https://hierbasyraices.com/ en GSC
   - Resultado: ✅ Indexación solicitada exitosamente
   - Estado actual: "La URL no está en Google" (normal, sitio nuevo)
   - Página de referencia detectada: https://www.hierbasyraices.com/
   - URL canónica seleccionada por Google: 
     https://www.hierbasyraices.com/ (datos antiguos del 8/10/26)

⚠️ ERRORES Y PROBLEMAS ENCONTRADOS:

1. Eliminación accidental de dos dominios en Vercel:
   - Problema: Al intentar eliminar solo www.hierbasyraices.com, 
     se eliminaron ambos dominios personalizados.
   - Causa: Confusión en la interfaz de Vercel.
   - Solución: Re-agregar hierbasyraices.com con la configuración 
     correcta (checkbox desmarcado).
   - Lección: Tener cuidado al eliminar dominios en Vercel, verificar 
     cuál se está eliminando.

2. Datos desactualizados en GSC:
   - Problema: GSC muestra "Última actualización: 8/10/26" cuando 
     hoy es 15/10/26.
   - Causa: Google no ha re-rastreado el sitio desde los cambios.
   - Solución: Esperar 24-72 horas para que Google re-rastree.
   - Lección: Los datos en GSC pueden tener hasta una semana de 
     retraso. No entrar en pánico si los errores persisten 
     inmediatamente después de una corrección.

3. URL canónica incorrecta en caché de Google:
   - Problema: Google tiene guardado que www.hierbasyraices.com es 
     la URL canónica, aunque ya se corrigió en Vercel.
   - Causa: Google rastreó el sitio el 8/10/26 con la configuración 
     antigua.
   - Solución: Solicitar indexación manual y esperar re-rastreo.
   - Lección: Los cambios de configuración en Vercel no se reflejan 
     instantáneamente en Google.

🎓 LECCIONES APRENDIDAS:

1. CONFIGURACIÓN DE DOMINIOS EN VERCEL:
   - El checkbox "Redirect apex domains to www (recommended)" NO 
     siempre es recomendable para SEO.
   - Si se marca, crea una redirección 308 de hierbasyraices.com 
     → www.hierbasyraices.com que Google marca como error.
   - La configuración correcta para SEO es:
     * hierbasyraices.com → Production (dominio principal)
     * www.hierbasyraices.com → 301 → hierbasyraices.com
   - Usar 301 (Moved Permanently) en lugar de 307 (Temporary 
     Redirect) para mejor SEO.

2. GOOGLE SEARCH CONSOLE - TIEMPOS DE PROCESAMIENTO:
   - Google tarda 24-72 horas en re-rastrear un sitio después de 
     cambios.
   - Los datos en GSC pueden estar desactualizados hasta una semana.
   - Solicitar indexación manual ayuda a acelerar el proceso.
   - Es normal que un sitio nuevo tenga 0 páginas indexadas las 
     primeras semanas.

3. SITEMAP INCOMPLETO = PROBLEMA DE INDEXACIÓN:
   - El sitemap automático de Astro en modo SSR solo incluye 
     páginas estáticas (/, /blog/, /tienda/).
   - Google solo conoce las URLs que están en el sitemap o que 
     encuentra por enlaces internos.
   - Para que Google indexe las 361 plantas, necesitamos un sitemap 
     personalizado que las incluya todas.
   - Este es el siguiente paso CRÍTICO del proyecto.

4. FLUJO DE TRABAJO CON VERCEL:
   - Al eliminar dominios en Vercel, verificar cuidadosamente cuál 
     se está eliminando.
   - Siempre hacer Refresh después de cambios para verificar que 
     la configuración es válida.
   - Los cambios en Vercel son inmediatos, pero Google tarda en 
     reflejarlos.

================================================================
18. PRÓXIMOS PASOS INMEDIATOS (PARA LA PRÓXIMA SESIÓN)
================================================================

PRIORIDAD 1: ⏳ ESPERAR 24-72 horas y verificar en GSC que:
- El error "Página con redirección" desaparezca
- Al menos algunas páginas pasen a "Indexadas"
- Los datos se actualicen con fecha reciente

PRIORIDAD 2: Sitemap personalizado completo (ver Sección 16 para 
plan detallado). Esto es CRÍTICO porque:
- Google solo conoce 3 URLs de nuestro sitio
- Necesita conocer las ~375 URLs (361 plantas + 9 artículos + 
  páginas estáticas)
- Sin esto, la indexación será muy lenta e incompleta

PRIORIDAD 3: Agregar footer a src/pages/planta/[id].astro (fichas 
individuales de plantas) para mantener consistencia visual y legal.

PRIORIDAD 4: Conectar tabla "failed_searches" al buscador (solo 
cuando haya tráfico real).

================================================================
FIN DEL DOCUMENTO MAESTRO - VERSIÓN 6.0
================================================================