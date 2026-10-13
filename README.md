# Retroverse v0.1 — Prototipo de consola retro web

Interfaz responsive inspirada en una biblioteca de consola retro. Publicable en Netlify desde GitHub.

## Qué funciona en esta versión

- Biblioteca de demostración con búsqueda y filtro por sistema.
- Navegación por Biblioteca, Sistemas y Favoritos.
- Favoritos guardados localmente en el navegador.
- Fichas de juegos y selección de ROM desde el dispositivo.
- Integración inicial con EmulatorJS para probar archivos locales compatibles.
- Diseño adaptable a PC y Android, con manifiesto PWA y service worker básico.

## Qué todavía NO está conectado

- Inicio de sesión y lista de usuarios autorizados.
- Catálogo real de Google Drive.
- Descarga autenticada de ROM desde Drive.
- Sincronización de partidas entre dispositivos.
- Carátulas/metadatos reales y biblioteca de administrador.

La interfaz no incluye ROM. Las fichas son ilustrativas. Utilizá únicamente juegos/archivos que tengas derecho a usar.

## Probar localmente

Por usar módulos del navegador y PWA, ejecutá un servidor local en vez de abrir `index.html` directamente. Por ejemplo, con Python:

```bash
python -m http.server 8080
```

Después abrí `http://localhost:8080`.

## Publicar en Netlify

1. Descomprimí el proyecto.
2. Subí los archivos a un repositorio nuevo de GitHub.
3. En Netlify, elegí **Add new site → Import an existing project**.
4. Conectá GitHub y elegí el repositorio.
5. Publish directory: `.`. No hace falta comando de build.
6. Publicá el sitio y probá primero desde PC; luego abrí la URL desde Android.

## Prueba del reproductor

1. Entrá a una ficha.
2. Elegí un archivo de ROM compatible desde el dispositivo.
3. Iniciá el juego y esperá la carga de EmulatorJS desde su CDN.
4. Si falla, anotá sistema, extensión del archivo, navegador y dispositivo. Algunos sistemas necesitan BIOS o archivos adicionales.

El archivo elegido se mantiene local en el navegador; esta versión no lo sube a ningún servidor. La compatibilidad de PSP y otros sistemas exigentes debe validarse caso por caso.

## Arquitectura objetivo

- **Frontend:** HTML/CSS/JS (v0.1); se puede migrar a una estructura modular cuando crezca.
- **Emulación:** EmulatorJS para los sistemas compatibles con navegador.
- **Hosting:** GitHub para código y Netlify para publicación.
- **Identidad:** Google OAuth para identificar al usuario, con validación de autorización en servidor.
- **Biblioteca:** Google Drive API para catálogo y lectura de archivos autorizados.
- **Backend:** Netlify Functions como intermediario; secretos solo en variables de entorno.
- **Partidas:** primera etapa local; sincronización futura mediante almacenamiento separado con control de acceso.

## Fases sugeridas

1. **v0.1:** interfaz y prueba de ROM local.
2. **v0.2:** selección de sistema/core, validación de compatibilidad, pruebas de rendimiento PC/Android.
3. **v0.3:** OAuth, lista de usuarios autorizados y lectura de catálogo Drive.
4. **v0.4:** descarga autenticada/temporal, progreso de carga y gestión de errores.
5. **v0.5:** biblioteca administrable, guardados donde el core lo permita, PWA y pruebas móviles.

## Seguridad para la fase Google Drive

No hagas públicos los archivos de ROM para simplificar la integración. No coloques tokens OAuth, claves privadas ni credenciales de servicio en `app.js` ni en el repositorio. Las funciones de servidor deben validar cada sesión y el permiso de cada usuario antes de devolver el catálogo o el contenido.
