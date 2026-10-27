================================================================
ESTADO MAESTRO DEL PROYECTO - HIERBAS Y RAÍCES
================================================================
Fecha de actualización: 26 de octubre de 2026 (Sesión 12 - 
Conexión exitosa de failed_searches, despliegue a producción y 
aclaraciones de flujo de trabajo)
Versión del documento: 9.0 (Endpoint API creado, debounce 
implementado, despliegue en Vercel exitoso y reglas de flujo 
reafirmadas)
Dominio: hierbasyraices.com (Namecheap -> Vercel, DNS configurado y VÁLIDO)

️ REGLA DE ORO DE ESTE DOCUMENTO:
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

⚠️ REGLA DE ORO DEL FLUJO DE TRABAJO:
El usuario NO es programador. Por lo tanto, TODA instrucción técnica 
proporcionada por el asistente debe cumplir con:
1. Ser paso a paso, detallada y explícita (tipo "receta de cocina").
2. Incluir los comandos exactos de terminal/consola a escribir.
3. Indicar claramente cómo encender/detener el servidor local.
4. Especificar rutas exactas de archivos y nombres de botones a clicar.
5. Nunca asumir conocimiento previo de programación o bases de datos.
6. ESPECIFICAR SIEMPRE si se debe crear una CARPETA o un ARCHIVO DE 
   TEXTO, y dar la ruta exacta.
7. IR UN SOLO PASO A LA VEZ. El asistente DEBE esperar la 
   confirmación del usuario (y captura de pantalla si aplica) antes 
   de avanzar al siguiente paso.
8. DOCUMENTAR TODO en el ESTADO_PROYECTO.md SOLO AL FINAL DEL DÍA DE 
   TRABAJO, una vez verificadas las correcciones y el estado real de 
   las tareas.
9. ⚠️ El ESTADO_PROYECTO.md debe ser HISTÓRICO Y COMPLETO. Cada nueva 
   versión incluye TODO el contenido anterior más los nuevos cambios. 
   NUNCA se borra información de versiones anteriores.
10. ⚠️ El asistente SIEMPRE debe entregar el Estado del Proyecto en 
    formato de texto plano (dentro de un bloque de código), listo 
    para que el usuario lo copie y pegue directamente en el archivo 
    ESTADO_PROYECTO.md de VS Code, reemplazando todo el contenido 
    anterior sin errores de formato.
11. ⚠️ NUEVA (19/10/2026): El usuario prefiere recibir el código 
    COMPLETO de los archivos para reemplazar, en lugar de instrucciones 
    de "comentar línea X" o "cambiar línea Y". Esto reduce errores y 
    hace el flujo más eficiente. Siempre que se modifique un archivo 
    de configuración, entregar el código completo nuevo.
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
  * Sitemap.xml personalizado enviado a Google (19/10/2026)
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
- Plugin Sitemap: @astrojs/sitemap (DESCONECTADO el 19/10/2026, 
  reemplazado por sitemap personalizado)
- Monetización: Amazon Associates (ID: hierbasyraice-20, pago via 
  Global66)
- Correo del proyecto: hierbasyraices.web@gmail.com
- Google Search Console: ✅ VERIFICADO (07/10/2026)
- Dominios en Vercel: ✅ CONFIGURADOS CORRECTAMENTE (15/10/2026)
- Sitemap personalizado: ✅ CREADO Y FUNCIONANDO (19/10/2026)
- API de búsquedas fallidas: ✅ CREADA Y FUNCIONANDO (26/10/2026)

PENDIENTE DE CONECTAR/CONFIGURAR:
- ✅ Conexión del dominio personalizado (Namecheap -> Vercel): 
  COMPLETADO (03/10/2026).
- ✅ Google Search Console: COMPLETADO (07/10/2026).
- ✅ Sitemap.xml personalizado: COMPLETADO (19/10/2026).
- ✅ Corrección de redirección en Vercel: COMPLETADO (15/10/2026).
- ✅ Tabla failed_searches conectada al buscador: COMPLETADO (26/10/2026).
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

TABLA "failed_searches" (CREADA el 07/10/2026, CONECTADA el 26/10/2026):
- id (SERIAL PRIMARY KEY)
- search_term (TEXT NOT NULL)
- timestamp (TIMESTAMP WITH TIME ZONE DEFAULT NOW())
- count (INTEGER DEFAULT 1)
- Índice creado: idx_failed_searches_term ON search_term
- Estado: ✅ CREADA, CONFIGURADA CON RLS Y TRIGGER DE ACUMULACIÓN, Y 
  CONECTADA AL BUSCADOR MEDIANTE ENDPOINT API CON DEBOUNCE.
- Propósito: Registrar búsquedas sin resultados para guiar la 
  creación de nuevo contenido basado en datos reales.

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
- ✅ Sitemap generado automáticamente en producción
- ✅ Google Search Console verificado con archivo HTML
- ✅ Sitemap enviado a Google Search Console

MEJORAS REALIZADAS EL 15/10/2026:
- ✅ Corrección de configuración de dominios en Vercel:
  * hierbasyraices.com → Production (dominio principal, sin redirección)
  * www.hierbasyraices.com → 301 Moved Permanently → hierbasyraices.com
  * hierbasyraices-web.vercel.app → Production (respaldo)
- ✅ Verificación de DNS en Namecheap (correctos desde Sesión 8)
- ✅ Sitemaps en estado "Correcto" en GSC
- ✅ Indexación manual solicitada para URL principal

MEJORAS REALIZADAS EL 19/10/2026 (SESIÓN 11):
- ✅ Sitemap personalizado creado: src/pages/sitemap.xml.ts
- ✅ Sitemap automático desactivado en astro.config.mjs
- ✅ robots.txt actualizado para apuntar al nuevo sitemap
- ✅ Sitemap probado en local y producción
- ✅ Sitemap enviado a GSC y procesado correctamente (374 páginas)
- ✅ Código subido a GitHub y desplegado en Vercel

MEJORAS REALIZADAS EL 26/10/2026 (SESIÓN 12):
- ✅ Configuración de Row Level Security (RLS) en Supabase para la 
  tabla `failed_searches`, permitiendo inserciones públicas anónimas.
- ✅ Creación de función y trigger en SQL para acumular el contador 
  (`count`) si el término de búsqueda ya existe, evitando filas duplicadas.
- ✅ Creación del endpoint API en Astro: `src/pages/api/failed-search.ts` 
  para recibir las búsquedas de forma segura desde el servidor.
- ✅ Implementación de "debounce" de 1 segundo en el script del 
  buscador (`src/pages/index.astro`) para evitar saturar la base de 
  datos con solicitudes por cada tecla pulsada.
- ✅ Pruebas locales y en producción exitosas: las búsquedas sin 
  resultados se guardan correctamente en Supabase como una sola entrada.
- ✅ Despliegue exitoso a Vercel mediante flujo Git (add, commit, push).

DESPLIEGUE Y PRODUCCIÓN:
- Repositorio GitHub público: hierbasyraicesweb/hierbasyraices-web
- Adaptador de Vercel instalado (@astrojs/vercel) y configurado.
- Variables de entorno de Supabase configuradas en Vercel como tipo "Config".
- URL de producción activa: https://hierbasyraices.com (Dominio principal)
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
1. Comillas dobles dentro del JSON del faq_schema: deben escaparse con \"
2. Usar Markdown (**negrita**, ## título): NO funciona con set:html.
3. Poner nombres de plantas en related_plants: espera IDs numéricos.
4. Olvidar ::jsonb al final del faq_schema.

================================================================
6. PLAN DE PUBLICACIÓN DE ARTÍCULOS Y FLUJO DE TRABAJO
================================================================
FRECUENCIA RECOMENDADA: 1-2 artículos por semana.
PRÓXIMOS ARTÍCULOS SUGERIDOS: Lavanda, Menta, Salvia, Eucalipto, Jengibre.

PLANTILLAS DE SOLICITUD AL ASISTENTE (COPIAR Y PEGAR PARA EVITAR ITERACIONES):
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
✅ 2. Aviso de Copyright en el Footer: Agregado en páginas principales.
✅ 3. Sitemap.xml y robots.txt: Creados y funcionando en producción.
✅ 4. Tabla "failed_searches" en Supabase: Creada.

TAREAS COMPLETADAS EN SESIÓN 15/10/2026:
✅ 5. Corrección de configuración de dominios en Vercel.
✅ 6. Verificación de DNS en Namecheap.
✅ 7. Sitemaps en estado "Correcto" en GSC.
✅ 8. Indexación manual solicitada para URL principal.

TAREAS COMPLETADAS EN SESIÓN 19/10/2026:
✅ 9. Sitemap personalizado completo creado: src/pages/sitemap.xml.ts
✅ 10. Sitemap automático desactivado en astro.config.mjs
✅ 11. robots.txt actualizado para apuntar al nuevo sitemap
✅ 12. Sitemap probado en local y producción
✅ 13. Sitemap enviado a GSC y procesado correctamente (374 páginas)

TAREAS COMPLETADAS EN SESIÓN 26/10/2026:
✅ 14. CONECTAR TABLA "failed_searches" AL BUSCADOR: COMPLETADO.
    Se creó el endpoint `src/pages/api/failed-search.ts`, se 
    implementó debounce de 1 segundo en `src/pages/index.astro` y 
    se configuró RLS + trigger de acumulación en Supabase. 
    Desplegado y probado en producción exitosamente.

PRIORIDAD ALTA (PARA PRÓXIMAS SESIONES):

15. AGREGAR FOOTER LEGAL A FICHAS DE PLANTAS
    Archivo: src/pages/planta/[id].astro
    Descripción: Copiar el footer legal (copyright + disclaimer) 
    desde otra página (ej: index.astro) y pegarlo en 
    planta/[id].astro para mantener consistencia visual y legal en 
    TODAS las páginas del sitio.
    Tiempo estimado: 15-20 minutos
    Dificultad: Baja (copiar y pegar código existente)
    Impacto: Alto (cumplimiento legal en todas las páginas)

16. CONFIGURAR GOOGLE ANALYTICS 4
    Descripción: Crear cuenta en Google Analytics 4, obtener el 
    ID de medición (G-XXXXXXXXXX), e integrar el script de 
    seguimiento en todas las páginas del sitio.
    Tiempo estimado: 20-30 minutos
    Dificultad: Baja-Media
    Impacto: Alto (medición de tráfico real, no solo indexación)

17. MONITOREAR INDEXACIÓN EN GSC
    Descripción: Monitorear en Google Search Console cuántas de 
    las 374 páginas pasan de "Descubierta" a "Indexada". Se ha 
    aclarado que Google no envía correos por indexación exitosa, 
    solo por errores. Se debe revisar manualmente en la sección 
    "Páginas" o mediante "Inspección de URL". (Estado actual: 31+ 
    páginas indexadas, funcionando correctamente).
    Tiempo estimado: 24-72 horas (tiempo de espera pasivo)
    Dificultad: Nula
    Impacto: Crítico (sin indexación no hay tráfico orgánico)

18. CONFIGURAR AMAZON ONELINK
    Descripción: Configurar Amazon OneLink para redirigir 
    compradores internacionales a su Amazon local.
    Tiempo estimado: 15-20 minutos
    Dificultad: Baja
    Impacto: Medio (mejora conversión de afiliados internacionales)

19. FORMULARIO DE NEWSLETTER
    Descripción: Integrar formulario de suscripción (Brevo o 
    Mailchimp) en el footer para capturar emails.
    Tiempo estimado: 30-45 minutos
    Dificultad: Media
    Impacto: Medio (construcción de audiencia directa)

PRIORIDAD MEDIA:
20. Diseño visual e imágenes: Definir flujo para obtener, optimizar y 
    servir imágenes de plantas (dominio público o históricas).
21. Google AdSense (requiere tráfico constante previo).

PRIORIDAD BAJA:
22. Ko-fi para donaciones.
23. PDFs descargables.

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
6. faq_schema es jsonb -> las comillas dobles internas se escapan con \".
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
    durante el build de producción.
13. ⚠️ NUEVA (07/10/2026): En modo SSR, el plugin automático de 
    sitemap SOLO detecta páginas estáticas predefinidas.
14. ⚠️ NUEVA (07/10/2026): Las etiquetas <style> deben ir dentro del 
    <head>, nunca fuera del </html>.
15. ⚠️ NUEVA (07/10/2026): El archivo de verificación de Google 
    (google4597b1450f33f5a2.html) debe permanecer SIEMPRE en la 
    carpeta public/.
16. ⚠️ NUEVA (07/10/2026): Google Search Console puede mostrar "No se 
    ha podido obtener" en el sitemap las primeras 24-48 horas. Es normal.
17. ⚠️ NUEVA (15/10/2026): En Vercel, el checkbox "Redirect apex 
    domains to www" DEBE ESTAR DESMARCADO para que hierbasyraices.com 
    sea el dominio principal sin redirección.
18. ⚠️ NUEVA (15/10/2026): La configuración correcta de dominios en 
    Vercel es: hierbasyraices.com → Production; www → Redirect 301.
19. ⚠️ NUEVA (15/10/2026): Google tarda 24-72 horas en re-rastrear 
    un sitio después de cambios de configuración.
20. ⚠️ NUEVA (15/10/2026): Google puede tener en caché una URL 
    canónica incorrecta aunque ya se corrigió en Vercel.
21. ⚠️ NUEVA (19/10/2026): El usuario prefiere recibir el código 
    COMPLETO de los archivos para reemplazar, en lugar de instrucciones 
    de "comentar línea X" o "cambiar línea Y".
22. ⚠️ NUEVA (19/10/2026): Al crear archivos con nombres que tienen 
    múltiples puntos (ej: sitemap.xml.ts), VS Code puede rechazar el 
    nombre. Solución: crear el archivo desde el Explorador de Windows.
23. ⚠️ NUEVA (19/10/2026): Google Search Console puede mostrar "No se 
    ha podido obtener" en la lista de sitemaps, pero al entrar al 
    detalle mostrar "Correcto". Es un bug visual de GSC.
24. ⚠️ NUEVA (26/10/2026): Google Search Console NO envía correos 
    electrónicos cuando las páginas se indexan correctamente. Solo 
    envía alertas en caso de errores graves o penalizaciones. La 
    forma correcta de verificar la indexación es manualmente a 
    través del informe "Páginas" o la herramienta "Inspección de URL".
25. ⚠️ NUEVA (26/10/2026): Es CRÍTICO implementar "debounce" (espera 
    de ~1 segundo) en el evento de input del buscador antes de hacer 
    llamadas a la API. Sin esto, se satura la base de datos con 
    solicitudes por cada tecla pulsada (ej: "m", "ma", "man").
26. ⚠️ NUEVA (26/10/2026): El usuario YA TIENE EXPERIENCIA con el 
    flujo de trabajo de Git (git add, git commit, git push). No es 
    necesario explicar desde cero cómo funciona Git ni pedir 
    confirmación para credenciales de GitHub, a menos que aparezca 
    un error específico.

================================================================
9. ARCHIVOS CLAVE DEL PROYECTO
================================================================
- Página principal: src/pages/index.astro (con footer y buscador con debounce actualizados)
- Endpoint de búsquedas fallidas: src/pages/api/failed-search.ts (CREADO 26/10/2026)
- Ficha de planta: src/pages/planta/[id].astro (⚠️ SIN FOOTER AÚN)
- Listado blog: src/pages/blog/index.astro (con footer actualizado)
- Artículo blog: src/pages/blog/[slug].astro (con footer actualizado)
- Página de tienda: src/pages/tienda.astro (con footer previo)
- Sitemap personalizado: src/pages/sitemap.xml.ts (CREADO 19/10/2026)
- Estilos globales: src/styles/global.css
- Cliente de Supabase: src/lib/supabase.js
- Configuración Astro: astro.config.mjs (sin plugin sitemap automático)
- Robots.txt: public/robots.txt (ACTUALIZADO 19/10/2026)
- Verificación Google: public/google4597b1450f33f5a2.html (CREADO 07/10/2026 - NO ELIMINAR)

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
- Páginas creadas: 5 (index, planta/[id], blog/index, blog/[slug], tienda)
- Productos en tienda: 6 (con enlaces de afiliado activos)
- Versión de Astro: 7.3.5
- Entorno: Local (localhost:4321) Y Producción (Vercel + Dominio Propio)
- Hosting en producción: ✅ Vercel (https://hierbasyraices.com)
- Google Search Console: ✅ VERIFICADO (07/10/2026)
- Dominios en Vercel: ✅ CONFIGURADOS CORRECTAMENTE (15/10/2026)
- Sitemap personalizado: ✅ FUNCIONANDO (19/10/2026) - 374 URLs
- robots.txt: ✅ Configurado con nuevo sitemap
- Tabla failed_searches: ✅ CONECTADA Y FUNCIONANDO (26/10/2026)
- Páginas indexadas en Google: 31+ (confirmado manualmente en GSC el 26/10/2026).
- Páginas descubiertas por Google: 374 (gracias al sitemap personalizado)

================================================================
11. HISTORIAL DE SESIONES (DESDE LA GÉNESIS)
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
- Configuración exitosa de registros DNS en Namecheap.
- Verificación en Vercel: "Valid Configuration".
- Definición de plantillas de prompt estandarizadas.

SESIÓN 9 (07/10/2026): GSC, Sitemap, Robots.txt y Footer con Copyright
- Creación de tabla failed_searches, footer con copyright, robots.txt, 
  plugin @astrojs/sitemap y verificación en GSC.

SESIÓN 10 (15/10/2026): Corrección de errores de indexación en GSC 
- Diagnóstico y corrección de la redirección de dominios en Vercel, 
  verificación de DNS en Namecheap, y solicitud de indexación manual.

SESIÓN 11 (19/10/2026): Creación e Implementación del Sitemap Personalizado
- Creación de sitemap.xml.ts, desactivación del sitemap automático, 
  actualización de robots.txt, despliegue en Vercel y envío exitoso 
  a Google Search Console con 374 páginas descubiertas.

SESIÓN 12 (26/10/2026): Conexión de failed_searches y Despliegue
- OBJETIVO: Almacenar búsquedas sin resultados y aclarar dudas de GSC.
- ACCIÓN 1: Se aclaró que GSC NO envía correos por indexación exitosa. 
  Se verificó manualmente en GSC: 31+ páginas indexadas correctamente.
- ACCIÓN 2: Se configuró RLS y un trigger de acumulación en la tabla 
  `failed_searches` de Supabase.
- ACCIÓN 3: Se creó el endpoint API `src/pages/api/failed-search.ts`.
- ACCIÓN 4: Se actualizó `src/pages/index.astro` con lógica de 
  búsqueda que incluye "debounce" de 1 segundo para evitar saturar 
  la base de datos con solicitudes parciales.
- ACCIÓN 5: Despliegue exitoso a producción mediante Git (add, commit, push).
- RESULTADO: El sistema registra correctamente las búsquedas fallidas 
  en producción como una sola entrada acumulada. El mensaje visual 
  de "sin resultados" aparece debajo del contenedor del buscador 
  (el usuario decidió dejarlo así por hoy para evitar ciclos 
  adicionales de despliegue).
- LECCIÓN: El usuario ya tiene experiencia con `git push`, no es 
  necesario explicar el flujo de Git desde cero a menos que haya error.

================================================================
FIN DEL DOCUMENTO MAESTRO - VERSIÓN 9.0
================================================================