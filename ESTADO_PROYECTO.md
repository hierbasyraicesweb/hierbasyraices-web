================================================================
ESTADO MAESTRO DEL PROYECTO - HIERBAS Y RAÍCES
================================================================
Fecha de actualización: 07 de octubre de 2026 (Sesión 9 - GSC, 
Sitemap, Robots.txt y Footer con Copyright)
Versión del documento: 4.0 (Sitio Indexado en Google Search Console)
Dominio: hierbasyraices.com (Namecheap -> Vercel, DNS configurado y VÁLIDO)

⚠️ REGLA DE ORO DE ESTE DOCUMENTO:
Este archivo es HISTÓRICO y COMPLETO. Cada nueva versión debe 
incluir TODO el contenido anterior más los nuevos cambios, errores, 
aciertos, descubrimientos y lecciones aprendidas. NUNCA se borra 
información de versiones anteriores. Es el registro vivo del proyecto.
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

PENDIENTE DE CONECTAR/CONFIGURAR:
- ✅ Conexión del dominio personalizado (Namecheap -> Vercel): 
  COMPLETADO (03/10/2026).
- ✅ Google Search Console: COMPLETADO (07/10/2026).
- ✅ Sitemap.xml y robots.txt: COMPLETADO (07/10/2026).
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

PRIORIDAD ALTA (PARA PRÓXIMAS SESIONES):
5. Sitemap personalizado completo (incluir 361 plantas + 9 artículos 
   del blog). Ver tabla de tiempos estimados en Sección 15.
6. Conectar tabla "failed_searches" al buscador para registrar 
   búsquedas sin resultados.
7. Configurar Amazon OneLink para redirigir compradores a su Amazon 
   local.
8. Formulario de newsletter (Brevo/Mailchimp) integrado en el footer.
9. Google Analytics 4 para medir tráfico real.

PRIORIDAD MEDIA:
10. Diseño visual e imágenes: Definir flujo para obtener, optimizar y 
    servir imágenes de plantas (dominio público o históricas).
11. Google AdSense (requiere tráfico constante previo).

PRIORIDAD BAJA:
12. Ko-fi para donaciones.
13. PDFs descargables.

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
12. ️ NUEVA (07/10/2026): El plugin @astrojs/sitemap NO genera el 
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
15. ⚠️ NUEVA (07/10/2026): El archivo de verificación de Google 
    (google4597b1450f33f5a2.html) debe permanecer SIEMPRE en la 
    carpeta public/. Si se elimina, se pierde la verificación en GSC.
16. ️ NUEVA (07/10/2026): Google Search Console puede mostrar "No se 
    ha podido obtener" en el sitemap las primeras 24-48 horas. Es 
    normal. Google reintentará automáticamente.

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
- Sitemap: ✅ Enviado a Google (pendiente procesamiento completo)
- robots.txt: ✅ Configurado
- Tabla failed_searches: ✅ Creada (pendiente conectar)

================================================================
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
9. ⚠️ NUEVA (07/10/2026): El ESTADO_PROYECTO.md debe ser HISTÓRICO Y 
   COMPLETO. Cada nueva versión incluye TODO el contenido anterior 
   más los nuevos cambios. NUNCA se borra información de versiones 
   anteriores. Debe registrar: errores, aciertos, descubrimientos, 
   lecciones aprendidas, dónde va cada cosa, cómo se hizo, 
   absolutamente todo.
10. ⚠️ NUEVA (07/10/2026): El asistente SIEMPRE debe entregar el 
    Estado del Proyecto en formato de texto plano (dentro de un 
    bloque de código), listo para que el usuario lo copie y pegue 
    directamente en el archivo ESTADO_PROYECTO.md de VS Code, 
    reemplazando todo el contenido anterior sin errores de formato.
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

ESTRATEGIA SEO (ACTIVADA EL 07/10/2026):
- ✅ Google Search Console verificado
- ✅ Sitemap enviado a Google
- ✅ robots.txt configurado
- ⏳ Esperando indexación de Google (24-48 horas para primeras 
  señales)
-  Sitemap personalizado completo (pendiente, incluirá 361 plantas 
  + 9 artículos)

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

================================================================
15. NOTAS DETALLADAS DE LA SESIÓN DE HOY (07/10/2026)
================================================================

📅 FECHA: 07 de octubre de 2026
 OBJETIVO DE LA SESIÓN: Completar los 4 pendientes de prioridad 
absoluta del roadmap.

✅ LOGROS COMPLETADOS:

1. TABLA "failed_searches" EN SUPABASE
   - Hora: Inicio de sesión
   - Acción: Creación de tabla en SQL Editor de Supabase
   - Código ejecutado:
     CREATE TABLE IF NOT EXISTS failed_searches (
         id SERIAL PRIMARY KEY,
         search_term TEXT NOT NULL,
         timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
         count INTEGER DEFAULT 1
     );
     CREATE INDEX IF NOT EXISTS idx_failed_searches_term 
     ON failed_searches(search_term);
   - Resultado: ✅ Success. No rows returned
   - Estado: Creada pero NO conectada al buscador (pendiente)

2. FOOTER CON COPYRIGHT Y DISCLAIMER LEGAL
   - Archivos modificados:
     * src/pages/index.astro
     * src/pages/blog/index.astro
     * src/pages/blog/[slug].astro
   - Código del footer agregado (mismo en los 3 archivos):
     <footer class="bg-[#e8f0e3] border-t-2 border-[#c8e6c9] 
     py-8 px-4 mt-12">
       <div class="max-w-4xl mx-auto text-center">
         <p class="text-[#2d5016] font-semibold mb-3">© 2026 
         Hierbas y Raíces. Todos los derechos reservados.</p>
         <p class="text-sm text-[#2d5016] mb-4 leading-relaxed">
           Esta información tiene fines históricos y culturales, y 
           no constituye una recomendación de uso, dosis ni 
           tratamiento. Consulte a un profesional de la salud antes 
           de usar cualquier planta con fines terapéuticos.
         </p>
         <div class="flex justify-center space-x-4 text-sm 
         text-[#2d5016]">
           <a href="/" class="hover:underline 
           hover:text-[#4a7c23]">Inicio</a>
           <span>|</span>
           <a href="/blog" class="hover:underline 
           hover:text-[#4a7c23]">Blog</a>
           <span>|</span>
           <a href="/tienda" class="hover:underline 
           hover:text-[#4a7c23]">Tienda</a>
         </div>
       </div>
     </footer>
   - Verificación: ✅ Funciona en Home, Blog (listado), Blog 
     (artículo individual) y Tienda (ya lo tenía)
   - ⚠️ PENDIENTE: Agregar footer a src/pages/planta/[id].astro

3. ARCHIVO robots.txt
   - Ubicación: public/robots.txt
   - Contenido:
     User-agent: *
     Allow: /
     
     Sitemap: https://hierbasyraices.com/sitemap-index.xml
   - Verificación: ✅ Accesible en 
     https://hierbasyraices.com/robots.txt

4. PLUGIN @astrojs/sitemap
   - Comando de instalación: npm install @astrojs/sitemap
   - Archivo modificado: astro.config.mjs
   - Código final:
     import { defineConfig } from 'astro/config';
     import vercel from '@astrojs/vercel';
     import sitemap from '@astrojs/sitemap';
     
     export default defineConfig({
       output: 'server',
       adapter: vercel(),
       site: 'https://hierbasyraices.com',
       integrations: [sitemap()],
     });
   - Sitemaps generados en producción:
     * https://hierbasyraices.com/sitemap-index.xml
     * https://hierbasyraices.com/sitemap-0.xml
   - ⚠️ LIMITACIÓN DETECTADA: Solo incluye 3 URLs (/, /blog/, 
     /tienda/). NO incluye las 361 plantas ni los 9 artículos 
     individuales porque son rutas dinámicas de Supabase en modo SSR.

5. GOOGLE SEARCH CONSOLE
   - URL: https://search.google.com/search-console
   - Cuenta usada: hierbasyraices.web@gmail.com
   - Método de verificación: Archivo HTML
   - Archivo de verificación: 
     public/google4597b1450f33f5a2.html
   - Estado: ✅ PROPIEDAD VERIFICADA
   - Sitemap enviado: sitemap-index.xml
   - Estado del sitemap en GSC: "No se ha podido obtener" (normal 
     las primeras 24-48 horas, Google reintentará automáticamente)

️ ERRORES Y PROBLEMAS ENCONTRADOS:

1. npm install colgado:
   - Problema: El comando `npm install @astrojs/sitemap` se "colgó" 
     por más de 30 segundos sin mostrar progreso.
   - Causa: Posible lentitud de red o primera descarga del paquete.
   - Solución: Esperar 1-2 minutos. Si no avanza, Ctrl+C y reintentar.
   - Lección: Las instalaciones de npm pueden tardar, especialmente 
     la primera vez.

2. Sitemap 404 en local:
   - Problema: http://localhost:4321/sitemap-index.xml daba error 404.
   - Causa: El plugin @astrojs/sitemap SOLO genera el sitemap durante 
     el build de producción, no en modo desarrollo (npm run dev).
   - Solución: Verificar el sitemap en producción 
     (https://hierbasyraices.com/sitemap-index.xml), no en local.
   - Lección: Algunas funcionalidades de Astro solo funcionan en 
     producción.

3. Servidor local detenido accidentalmente:
   - Problema: Al presionar Ctrl+C para cancelar npm install, se 
     detuvo también el servidor `npm run dev`.
   - Causa: Ctrl+C detiene cualquier proceso en la terminal.
   - Solución: Reiniciar con `npm run dev`.
   - Lección: Si se necesita usar la terminal para otros comandos, 
     abrir una nueva terminal (botón + en la pestaña Terminal) en 
     lugar de detener el servidor.

4. Etiqueta <style> fuera del <html>:
   - Problema: En src/pages/blog/[slug].astro, la etiqueta 
     `<style is:global>` estaba después del `</html>`, lo cual es 
     HTML inválido.
   - Causa: Error en la estructura original del archivo.
   - Solución: Mover el bloque `<style is:global>` dentro del 
     `<head>`.
   - Lección: Siempre validar que el HTML sea estructuralmente 
     correcto para SEO.

5. Sitemap "No se ha podido obtener" en GSC:
   - Problema: Google Search Console mostró "No se ha podido 
     obtener" para ambos sitemaps enviados.
   - Causa: Google aún no ha procesado el sitemap (recién enviado). 
     También el tipo aparece como "Desconocido" en lugar de "Índice 
     de sitemaps".
   - Solución: Esperar 24-48 horas. Google reintentará 
     automáticamente.
   - Lección: La indexación de Google no es instantánea.

6. Sitemap solo incluye 3 URLs:
   - Problema: El sitemap automático solo lista /, /blog/ y /tienda/. 
     No incluye las 361 plantas ni los 9 artículos.
   - Causa: El sitio usa `output: 'server'` (SSR). El plugin 
     automático de Astro solo detecta páginas estáticas 
     predefinidas, no rutas dinámicas de Supabase.
   - Solución pendiente: Crear un endpoint personalizado 
     (src/pages/sitemap.xml.ts) que consulte Supabase y genere el 
     XML dinámicamente.
   - Lección: En modo SSR, se necesita código personalizado para 
     sitemaps completos.

🎓 LECCIONES APRENDIDAS:

1. FLUJO DE TRABAJO OBLIGATORIO:
   - Siempre trabajar en LOCAL (VS Code + npm run dev)
   - Verificar cambios en http://localhost:4321
   - Detener servidor (Ctrl + C) solo cuando sea necesario
   - git add . → git commit -m "mensaje" → git push
   - Esperar despliegue automático en Vercel (~30-60 segundos)
   - Verificar en https://hierbasyraices.com
   - NUNCA editar directamente la página en internet.

2. ARCHIVOS EN CARPETA public/:
   - Todo archivo colocado en public/ se sirve directamente en la 
     raíz del dominio.
   - Ejemplo: public/robots.txt → https://hierbasyraices.com/robots.txt
   - Ejemplo: public/google4597b1450f33f5a2.html → 
     https://hierbasyraices.com/google4597b1450f33f5a2.html

3. GOOGLE SEARCH CONSOLE:
   - Es la herramienta oficial para avisarle a Google que tu sitio 
     existe.
   - Sin GSC, Google puede tardar semanas o meses en encontrar tu 
     sitio.
   - Con GSC, le estás diciendo directamente: "¡Estoy aquí, 
     índexame!"
   - El archivo de verificación HTML debe permanecer SIEMPRE en 
     public/. Si se elimina, se pierde la verificación.

4. SITEMAP EN MODO SSR:
   - El plugin automático @astrojs/sitemap tiene limitaciones en 
     modo servidor.
   - Para sitemaps completos con rutas dinámicas, se necesita código 
     personalizado.
   - Aunque el sitemap esté incompleto, Google igualmente encontrará 
     las páginas a través de enlaces internos.

5. PACIENCIA CON GOOGLE:
   - La indexación no es instantánea.
   - Los mensajes de error iniciales en GSC son normales.
   - Google reintentará automáticamente en 24-48 horas.

================================================================
16. PLAN DETALLADO PARA SITEMAP PERSONALIZADO COMPLETO
================================================================
(Pendiente para próxima sesión - Tiempo estimado: 90-100 minutos)

OBJETIVO: Incluir las 361 plantas + 9 artículos del blog + páginas 
estáticas en el sitemap (total ~375 URLs).

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
     |                                                  | (1h 30m -
     |                                                  |  1h 40m)

RECOMENDACIÓN: Bloquear 2 horas seguidas sin interrupciones para 
terminar de una vez.

================================================================
17. PRÓXIMOS PASOS INMEDIATOS (PARA LA PRÓXIMA SESIÓN)
================================================================

PRIORIDAD 1: Esperar 24-48 horas y verificar en GSC que el sitemap 
cambie de "No se ha podido obtener" a "Correcto".

PRIORIDAD 2: Agregar footer a src/pages/planta/[id].astro (fichas 
individuales de plantas) para mantener consistencia visual.

PRIORIDAD 3: Sitemap personalizado completo (ver Sección 16 para 
plan detallado).

PRIORIDAD 4: Conectar tabla "failed_searches" al buscador (solo 
cuando haya tráfico real).

================================================================
FIN DEL DOCUMENTO MAESTRO - VERSIÓN 4.0
================================================================