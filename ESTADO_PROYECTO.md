Hola buenos días! Estamos trabajando en este proyecto y hoy nos toca configurar Brevo: Recuerda que solo después de la sesión de trabajo, debes entregarme el estado del proyecto en txt, histórico, más todo lo que hagamos, conversemos, errores, aciertos, apps, herramientas utilizadas, decisiones tomadas, los pendientes, etc.

================================================================================
ESTADO MAESTRO DEL PROYECTO - HIERBAS Y RAÍCES
================================================================================
Fecha de actualización: 30 de octubre de 2026 (Sesión 15 - Migración Mailchimp a Brevo)
Versión del documento: 12.0 (Mailchimp eliminado, Brevo configurado parcialmente)
Dominio: hierbasyraices.com (Namecheap -> Vercel, DNS configurado y VÁLIDO)

REGLA DE ORO DE ESTE DOCUMENTO:
Este archivo es HISTÓRICO y COMPLETO. Cada nueva versión debe 
incluir TODO el contenido anterior más los nuevos cambios, errores, 
aciertos, descubrimientos y lecciones aprendidas. NUNCA se borra 
información de versiones anteriores. Es el registro vivo del proyecto.

REGLA DE ORO DEL FORMATO DE ENTREGA:
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
11. ️ NUEVA (19/10/2026): El usuario prefiere recibir el código 
    COMPLETO de los archivos para reemplazar, en lugar de instrucciones 
    de "comentar línea X" o "cambiar línea Y". Esto reduce errores y 
    hace el flujo más eficiente. Siempre que se modifique un archivo 
    de configuración, entregar el código completo nuevo.
12. ️ NUEVA (30/10/2026): Al migrar entre herramientas de email 
    marketing, siempre verificar PRIMERO las limitaciones exactas del 
    plan gratuito antes de invertir tiempo diseñando flujos complejos.
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
- Email Marketing: Brevo (Plan Free, cuenta creada el 30/10/2026)
- Google Search Console: ✅ VERIFICADO (07/10/2026)
- Dominios en Vercel: ✅ CONFIGURADOS CORRECTAMENTE (15/10/2026)
- Sitemap personalizado: ✅ CREADO Y FUNCIONANDO (19/10/2026)
- API de búsquedas fallidas: ✅ CREADA Y FUNCIONANDO (26/10/2026)
- Google Analytics 4: ✅ CONFIGURADO E INTEGRADO (27/10/2026)
  * ID de Medición: G-7F56LTF9QY
  * Propiedad: hierbasyraices.com
  * Estado: ACTIVO Y RECIBIENDO DATOS EN TIEMPO REAL

PENDIENTE DE CONECTAR/CONFIGURAR:
- ✅ Conexión del dominio personalizado (Namecheap -> Vercel): 
  COMPLETADO (03/10/2026).
- ✅ Google Search Console: COMPLETADO (07/10/2026).
- ✅ Sitemap.xml personalizado: COMPLETADO (19/10/2026).
- ✅ Corrección de redirección en Vercel: COMPLETADO (15/10/2026).
- ✅ Tabla failed_searches conectada al buscador: COMPLETADO (26/10/2026).
- ✅ Footer legal en fichas de plantas: COMPLETADO (27/10/2026).
- ✅ Google Analytics 4: COMPLETADO (27/10/2026).
- ✅ Mailchimp: ELIMINADO (30/10/2026) - No permitía automatizaciones gratis.
- ️ Brevo: CUENTA CREADA Y CONFIGURADA PARCIALMENTE (30/10/2026).
- ⏸️ Formulario de Newsletter (Brevo): PENDIENTE DE CREACIÓN E INTEGRACIÓN EN FOOTER.
- ⏸️ Automatización de bienvenida en Brevo: PENDIENTE DE ACTIVAR.
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
- ✅ Footer con Copyright y Disclaimer legal agregado en páginas principales.
- ✅ Archivo robots.txt creado en public/robots.txt
- ✅ Plugin @astrojs/sitemap instalado y configurado
- ✅ Sitemap generado automáticamente en producción
- ✅ Google Search Console verificado con archivo HTML
- ✅ Sitemap enviado a Google Search Console

MEJORAS REALIZADAS EL 15/10/2026:
- ✅ Corrección de configuración de dominios en Vercel.
- ✅ Verificación de DNS en Namecheap.
- ✅ Sitemaps en estado "Correcto" en GSC.
- ✅ Indexación manual solicitada para URL principal.

MEJORAS REALIZADAS EL 19/10/2026 (SESIÓN 11):
- ✅ Sitemap personalizado creado: src/pages/sitemap.xml.ts
- ✅ Sitemap automático desactivado en astro.config.mjs
- ✅ robots.txt actualizado para apuntar al nuevo sitemap
- ✅ Sitemap probado en local y producción
- ✅ Sitemap enviado a GSC y procesado correctamente (374 páginas)
- ✅ Código subido a GitHub y desplegado en Vercel

MEJORAS REALIZADAS EL 26/10/2026 (SESIÓN 12):
- ✅ Configuración de Row Level Security (RLS) en Supabase para la 
  tabla `failed_searches`.
- ✅ Creación de función y trigger en SQL para acumular el contador.
- ✅ Creación del endpoint API en Astro: `src/pages/api/failed-search.ts`.
- ✅ Implementación de "debounce" de 1 segundo en el script del 
  buscador (`src/pages/index.astro`).
- ✅ Pruebas locales y en producción exitosas.
- ✅ Despliegue exitoso a Vercel mediante flujo Git.

MEJORAS REALIZADAS EL 27/10/2026 (SESIÓN 13):
- ✅ Footer legal obligatorio agregado a src/pages/planta/[id].astro.
- ✅ Google Analytics 4 configurado e integrado en TODO el sitio (Componente: src/components/GoogleAnalytics.astro).

MEJORAS REALIZADAS EL 29/10/2026 (SESIÓN 14):
- ✅ Resolución de advertencia fiscal en Amazon Associates (Canadá): 
  Se completó el formulario de declaración fiscal para no residentes 
  (W-8BEN equivalente), utilizando la dirección en Chile y declarando 
  "No" a establecimiento permanente y beneficios de tratado fiscal 
  para simplificar el trámite y evitar retenciones complejas, dado 
  el bajo tráfico esperado de esa región.
- ✅ Decisión estratégica: Se posterga la configuración de Amazon 
  OneLink. Se requiere crear cuentas de afiliado en otros países 
  (España, México) para que sea realmente útil. Se evaluará en el 
  futuro cuando el tráfico internacional justifique el esfuerzo 
  burocrático.
- ✅ Creación de cuenta gratuita en Mailchimp:
  * Correo de la cuenta: hierbasyraices.web@gmail.com
  * Nombre de la organización: Hierbas y Raíces
  * Sitio web: https://hierbasyraices.com
  * Dirección comercial (requisito legal anti-spam): Avenida 
    Peñablanca N° 250, Algarrobo, Valparaíso, 2711725, Chile 
    (Dirección de la Municipalidad, protegiendo la privacidad del 
    usuario y cumpliendo la normativa).
  * Sector seleccionado: Servicios educativos.
  * Tamaño de audiencia: 0 contactos (inicio desde cero).
  * Conexión e-commerce: Omitida ("Lo haré más tarde"), ya que el 
    sitio usa Astro/Vercel y enlaces de afiliados, no checkout propio.
- ✅ Objetivo de aprendizaje validado: Se eligió Mailchimp sobre 
  otras alternativas (como Brevo) específicamente para que el usuario 
  adquiera experiencia en una herramienta ampliamente solicitada en 
  ofertas laborales (LinkedIn), sumando valor a su perfil profesional.

MEJORAS REALIZADAS EL 30/10/2026 (SESIÓN 15 - HOY):
- ✅ Eliminación permanente de cuenta de Mailchimp:
  * Motivo: El plan gratuito NO permite automatizaciones (requiere 
    plan Essential ~$13/mes).
  * Proceso completado: Cuenta ID 269017731 cerrada exitosamente.
  * Lección: Siempre verificar limitaciones del plan gratuito ANTES 
    de diseñar flujos complejos.
- ✅ Migración a Brevo (Sendinblue):
  * Decisión estratégica: Brevo permite automatizaciones ILIMITADAS 
    en el plan gratuito + 300 emails/día (vs 500/mes de Mailchimp).
  * Cuenta creada: hierbasyraices.web@gmail.com
  * Dirección legal configurada: Av. Peñablanca N° 250, Algarrobo, 
    Valparaíso, 2711725, Chile.
  * Lista de contactos creada: "Suscriptores Hierbas y Raíces #5" 
    (carpeta: marketing_automation).
  * Automatización "Mensaje de bienvenida" creada parcialmente:
    - Disparador configurado: "Contacto añadido a la lista"
    - Plazo configurado: 1 minuto (entrega inmediata)
    - Paso 3/3 (Enviar email): PENDIENTE DE EDITAR CONTENIDO
- ✅ Contenido del correo de bienvenida PREPARADO y listo para pegar:
  * Nombre interno: Bienvenida - Primer artículo
  * Asunto: ¡Bienvenido/a a Hierbas y Raíces! Tu primera planta 
    medicinal te espera
  * Texto de vista previa: Descubre la historia y el uso tradicional 
    de nuestra planta destacada.
  * Cuerpo: Mensaje de bienvenida completo con propuesta de valor.
  * Botones: "Explorar la enciclopedia", "Ir al blog", "Ir a la Tienda"
  * Footer legal completo con disclaimer y dirección.

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

TAREAS COMPLETADAS EN SESIÓN 27/10/2026:
✅ 15. AGREGAR FOOTER LEGAL A FICHAS DE PLANTAS: COMPLETADO.
✅ 16. CONFIGURAR GOOGLE ANALYTICS 4: COMPLETADO.

TAREAS COMPLETADAS EN SESIÓN 29/10/2026:
✅ 17. RESOLVER ALERTA FISCAL DE AMAZON (CANADÁ): COMPLETADO.
✅ 18. CREAR CUENTA MAILCHIMP FREE: COMPLETADO.

TAREAS COMPLETADAS EN SESIÓN 30/10/2026 (HOY):
✅ 19. ELIMINAR CUENTA MAILCHIMP: COMPLETADO (Cuenta ID 269017731 cerrada).
✅ 20. CREAR CUENTA BREVO FREE: COMPLETADO (Configuración inicial, dirección legal y lista creados).
✅ 21. CONFIGURAR AUTOMATIZACIÓN EN BREVO (PARCIAL): Disparador y plazo configurados. Pendiente editar contenido del email.

PRIORIDAD ALTA (PARA MAÑANA - ORDEN RECOMENDADO):

22. EDITAR EMAIL DE BIENVENIDA EN BREVO (PASO 3/3)
    Descripción: Hacer clic en el ícono de lápiz ✏️ junto a "Enviar 
    un email" en la automatización y pegar el contenido preparado 
    (asunto, cuerpo, botones, footer). Eliminar elementos genéricos 
    de la plantilla.
    Tiempo estimado: 15-20 minutos
    Dificultad: Baja
    Impacto: Alto (correo de bienvenida profesional)
    Estado: ⏸️ PENDIENTE (Detenido por cansancio a las 02:45 AM)

23. ACTIVAR AUTOMATIZACIÓN EN BREVO
    Descripción: Hacer clic en "Activar automatización" (botón negro 
    arriba a la derecha) una vez editado el email.
    Tiempo estimado: 2 minutos
    Dificultad: Baja
    Impacto: Alto (inicio del flujo automático)
    Estado: ⏸️ PENDIENTE

24. PROBAR AUTOMATIZACIÓN
    Descripción: Suscribirse con un correo de prueba desde el footer 
    del sitio y verificar que el correo llegue en 1 minuto.
    Tiempo estimado: 5 minutos
    Dificultad: Baja
    Impacto: Alto (validación del sistema)
    Estado: ⏸️ PENDIENTE

25. CREAR FORMULARIO DE SUSCRIPCIÓN EN BREVO
    Descripción: Diseñar un formulario de suscripción embebible en 
    Brevo para capturar correos en el footer del sitio.
    Tiempo estimado: 15-20 minutos
    Dificultad: Baja
    Impacto: Alto (inicio de construcción de audiencia propia)
    Estado: ⏸️ PENDIENTE

26. INTEGRAR FORMULARIO EN EL FOOTER DE ASTRO
    Descripción: Copiar el código HTML/CSS del formulario de Brevo y 
    pegarlo en los archivos .astro del footer (index, planta/[id], 
    blog/index, blog/[slug], tienda).
    Tiempo estimado: 15-20 minutos
    Dificultad: Baja
    Impacto: Alto
    Estado: ⏸️ PENDIENTE

PRIORIDAD MEDIA:
27. MONITOREAR INDEXACIÓN EN GSC
    Descripción: Monitorear en Google Search Console cuántas de 
    las 374 páginas pasan de "Descubierta" a "Indexada". 
    Estado: ⏸️ PENDIENTE (REVISAR DIARIAMENTE)

28. Diseño visual e imágenes: Definir flujo para obtener, optimizar y 
    servir imágenes de plantas (dominio público o históricas).

29. Google AdSense (requiere tráfico constante previo).

PRIORIDAD BAJA:
30. Amazon OneLink (Postergado hasta que el tráfico internacional justifique la creación de cuentas fiscales en otros países).
31. Ko-fi para donaciones.
32. PDFs descargables.

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
18. ️ NUEVA (15/10/2026): La configuración correcta de dominios en 
    Vercel es: hierbasyraices.com → Production; www → Redirect 301.
19. ⚠️ NUEVA (15/10/2026): Google tarda 24-72 horas en re-rastrear 
    un sitio después de cambios de configuración.
20. ⚠️ NUEVA (15/10/2026): Google puede tener en caché una URL 
    canónica incorrecta aunque ya se corrigió en Vercel.
21. ⚠️ NUEVA (19/10/2026): El usuario prefiere recibir el código 
    COMPLETO de los archivos para reemplazar, en lugar de instrucciones 
    de "comentar línea X" o "cambiar línea Y".
22. ️ NUEVA (19/10/2026): Al crear archivos con nombres que tienen 
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
26. ️ NUEVA (26/10/2026): El usuario YA TIENE EXPERIENCIA con el 
    flujo de trabajo de Git (git add, git commit, git push). No es 
    necesario explicar desde cero cómo funciona Git ni pedir 
    confirmación para credenciales de GitHub, a menos que aparezca 
    un error específico.
27. ⚠️ NUEVA (27/10/2026): Google Analytics 4 puede tardar hasta 48 
    horas en mostrar datos después de la instalación inicial, pero 
    la verificación en "Tiempo real" puede funcionar en minutos.
28. ⚠️ NUEVA (27/10/2026): Para integrar Google Analytics en Astro 
    sin un layout compartido, se crea un componente reutilizable 
    (GoogleAnalytics.astro) que se importa en cada página individual.
29. ⚠️ NUEVA (29/10/2026): Mailchimp exige por ley (normativas 
    anti-spam internacionales) una dirección física real en el pie 
    de página de todos los correos. Se utilizó la dirección de la 
    Municipalidad de Algarrobo para cumplir este requisito legal 
    sin exponer la dirección particular del usuario.
30. ⚠️ NUEVA (29/10/2026): Se eligió Mailchimp sobre otras 
    alternativas (como Brevo) con el propósito estratégico de que 
    el usuario aprenda y añada al CV una herramienta ampliamente 
    solicitada en el mercado laboral actual.
31. ⚠️ NUEVA (30/10/2026): Mailchimp Free NO permite automatizaciones 
    (requiere plan Essential ~$13/mes). Siempre verificar limitaciones 
    exactas del plan gratuito ANTES de invertir tiempo diseñando flujos.
32. ⚠️ NUEVA (30/10/2026): Brevo Free permite automatizaciones 
    ILIMITADAS + 300 emails/día, siendo superior a Mailchimp Free 
    (500 emails/mes, sin automatizaciones) para proyectos que inician.
33. ️ NUEVA (30/10/2026): Al eliminar una cuenta de Mailchimp, el 
    proceso es irreversible pero los datos entran en ciclo de 
    eliminación gradual. No hay recuperación posible.

================================================================
9. ARCHIVOS CLAVE DEL PROYECTO
================================================================
- Componente Google Analytics: src/components/GoogleAnalytics.astro (CREADO 27/10/2026)
- Página principal: src/pages/index.astro (con Google Analytics integrado)
- Endpoint de búsquedas fallidas: src/pages/api/failed-search.ts (CREADO 26/10/2026)
- Ficha de planta: src/pages/planta/[id].astro (con footer legal y Google Analytics)
- Listado blog: src/pages/blog/index.astro (con Google Analytics integrado)
- Artículo blog: src/pages/blog/[slug].astro (con Google Analytics integrado)
- Página de tienda: src/pages/tienda.astro (con Google Analytics integrado)
- Sitemap personalizado: src/pages/sitemap.xml.ts (CREADO 19/10/2026)
- Estilos globales: src/styles/global.css
- Cliente de Supabase: src/lib/supabase.js
- Configuración Astro: astro.config.mjs (sin plugin sitemap automático)
- Robots.txt: public/robots.txt (ACTUALIZADO 19/10/2026)
- Verificación Google: public/google4597b1450f33f5a2.html (CREADO 07/10/2026 - NO ELIMINAR)

NOTA: NO existe un archivo de layout compartido. Cada página (.astro)
tiene su propia estructura HTML completa (header, body, footer).
Por eso es CRÍTICO mantener la misma estructura de clases en todas.

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
- Google Analytics 4: ✅ ACTIVO Y RECIBIENDO DATOS (27/10/2026)
- Mailchimp:  ELIMINADO (30/10/2026) - No permitía automatizaciones gratis.
- Brevo: ✅ CUENTA FREE CREADA (30/10/2026) - Automatización configurada parcialmente.
- Páginas indexadas en Google: 31+ (confirmado manualmente en GSC).
- Páginas descubiertas por Google: 374 (gracias al sitemap personalizado)
- Contactos en lista Brevo: 0 (aún no hay formulario activo en la web)
- Emails enviados: 0
- Automatizaciones activas: 0 (pendiente de activar mañana)
- Formularios embebidos en la web: 0
- Dominio de email personalizado: No (actualmente usa @gmail.com)

================================================================
11. HISTORIAL DE SESIONES (DESDE LA GÉNESIS)
================================================================

SESIÓN 1-7: (Resumen histórico - Sesiones iniciales del proyecto)
- Configuración inicial del proyecto Astro, conexión con Supabase, 
  carga de 361 plantas, corrección de 97 plantas vía SQL, 
  implementación del buscador inteligente, diseño responsive, 
  publicación de 9 artículos de blog y creación de la tienda con 
  6 productos de Amazon Afiliados.

SESIÓN 8 (03/10/2026): Dominio Conectado y Flujo de Trabajo Definido
- Configuración exitosa de registros DNS en Namecheap.

SESIÓN 9 (07/10/2026): GSC, Sitemap, Robots.txt y Footer con Copyright
- Creación de tabla failed_searches, footer con copyright, robots.txt, 
  plugin @astrojs/sitemap y verificación en GSC.

SESIÓN 10 (15/10/2026): Corrección de errores de indexación en GSC 
- Diagnóstico y corrección de la redirección de dominios en Vercel.

SESIÓN 11 (19/10/2026): Creación e Implementación del Sitemap Personalizado
- Creación de sitemap.xml.ts, despliegue en Vercel y envío exitoso 
  a Google Search Console con 374 páginas descubiertas.

SESIÓN 12 (26/10/2026): Conexión de failed_searches y Despliegue
- Configuración de RLS y trigger de acumulación en Supabase.
- Creación del endpoint API y debounce en el buscador.

SESIÓN 13 (27/10/2026): Footer Legal en Fichas y Google Analytics 4
- Footer legal obligatorio agregado a src/pages/planta/[id].astro.
- Google Analytics 4 configurado e integrado en las 5 páginas del sitio.

SESIÓN 14 (29/10/2026): Resolución Fiscal Amazon y Configuración de Mailchimp
- OBJETIVO: Limpiar alertas de Amazon Associates y preparar el sistema de Newsletter.
- ACCIÓN 1: Se completó el formulario de declaración fiscal de Canadá en Amazon Associates, declarando no residencia y simplificando el trámite, eliminando la alerta roja de la cuenta.
- ACCIÓN 2: Se tomó la decisión estratégica de postergar Amazon OneLink, ya que requiere abrir cuentas fiscales en múltiples países y el tráfico internacional actual no justifica la burocracia.
- ACCIÓN 3: Se creó y configuró exitosamente una cuenta gratuita en Mailchimp usando el correo del proyecto (hierbasyraices.web@gmail.com).
- ACCIÓN 4: Se configuró la dirección legal de la Municipalidad de Algarrobo para cumplir con las normativas anti-spam de Mailchimp sin exponer la dirección particular del usuario.
- ACCIÓN 5: Se seleccionó "Servicios educativos" como sector y se omitió la conexión de e-commerce, ya que el sitio usa Astro y enlaces de afiliados externos.
- RESULTADO: La cuenta de Mailchimp está lista y verificada. El siguiente paso lógico es crear el formulario de suscripción e integrarlo en el footer del sitio.
- LECCIÓN APRENDIDA: Elegir Mailchimp sobre otras alternativas (como Brevo) cumple un doble propósito: resuelve la necesidad técnica del proyecto y permite al usuario adquirir una habilidad (Mailchimp) altamente valorada y solicitada en el mercado laboral actual (LinkedIn).

SESIÓN 15 (30/10/2026): Migración de Mailchimp a Brevo - Email Marketing Gratuito con Automatizaciones
- OBJETIVO: Configurar sistema de email marketing con automatizaciones funcionales en plan gratuito.
- ACCIÓN 1: Se intentó configurar automatización en Mailchimp, pero se descubrió que el plan gratuito BLOQUEA las automatizaciones (requiere plan Essential ~$13/mes).
- ACCIÓN 2: Se tomó la decisión estratégica de eliminar la cuenta de Mailchimp y migrar a Brevo, que permite automatizaciones ILIMITADAS en el plan gratuito.
- ACCIÓN 3: Se eliminó permanentemente la cuenta de Mailchimp (ID: 269017731) siguiendo el proceso completo de cierre.
- ACCIÓN 4: Se creó cuenta gratuita en Brevo (hierbasyraices.web@gmail.com) con dirección legal de la Municipalidad de Algarrobo.
- ACCIÓN 5: Se creó lista de contactos "Suscriptores Hierbas y Raíces #5" en carpeta marketing_automation.
- ACCIÓN 6: Se creó automatización "Mensaje de bienvenida" en Brevo con disparador configurado (Contacto añadido a lista) y plazo de 1 minuto.
- ACCIÓN 7: Se preparó todo el contenido del correo de bienvenida (asunto, cuerpo, botones, footer legal) listo para pegar.
- ACCIÓN 8: Se detuvo la sesión a las 02:45 AM por cansancio, quedando pendiente editar el contenido visual del email (Paso 3/3) y activar la automatización.
- RESULTADO: Brevo configurado parcialmente. Mañana se completará la edición del email y activación.
- LECCIÓN APRENDIDA: Siempre verificar las limitaciones EXACTAS del plan gratuito ANTES de invertir tiempo diseñando flujos. Brevo es superior a Mailchimp para proyectos que inician: 300 emails/día + automatizaciones ilimitadas vs 500 emails/mes sin automatizaciones.

Hola buenos días! Estamos trabajando en este proyecto y hoy nos toca configurar Brevo: Recuerda que solo después de la sesión de trabajo, debes entregarme el estado del proyecto en txt, histórico, más todo lo que hagamos, conversemos, errores, aciertos, apps, herramientas utilizadas, decisiones tomadas, los pendientes, etc.

================================================================
12. CONTENIDO PREPARADO - CORREO DE BIENVENIDA (LISTO PARA PEGAR)
================================================================
NOMBRE INTERNO: Bienvenida - Primer artículo

ASUNTO: ¡Bienvenido/a a Hierbas y Raíces! Tu primera planta medicinal te espera

TEXTO DE VISTA PREVIA: Descubre la historia y el uso tradicional de nuestra planta destacada.

CUERPO DEL CORREO:
¡Bienvenido/a a Hierbas y Raíces!

Gracias por unirte a nuestra comunidad. En Hierbas y Raíces documentamos el patrimonio etnobotánico iberoamericano: plantas medicinales con su historia, nombres tradicionales y usos culturales.

Cada semana recibirás en tu correo la ficha de una planta, su historia y un artículo destacado de nuestro blog.

Mientras tanto, te invitamos a explorar nuestra enciclopedia:

BOTONES:
- "Explorar la enciclopedia" -> https://hierbasyraices.com
- "Ir al blog" -> https://hierbasyraices.com/blog
- "Ir a la Tienda" -> https://hierbasyraices.com/tienda

FOOTER LEGAL:
© 2026 Hierbas y Raíces. Todos los derechos reservados.

Esta información tiene fines históricos y culturales, y no constituye una recomendación de uso, dosis ni tratamiento. Consulte a un profesional de la salud antes de usar cualquier planta con fines terapéuticos.

Correo de contacto: hierbasyraices.web@gmail.com
Avenida Peñablanca N° 250, Algarrobo, Valparaíso, 2711725, Chile

================================================================
FIN DEL DOCUMENTO MAESTRO - VERSIÓN 12.0
================================================================