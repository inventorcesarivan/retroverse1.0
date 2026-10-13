# Arquitectura técnica — Retroverse

## Objetivo

Biblioteca privada/compartida de juegos retro accesible desde PC y móviles, con acceso limitado al propietario y usuarios autorizados.

## Diseño lógico

Cliente web/PWA
→ autenticación Google
→ Netlify Function (valida identidad y autorización)
→ Google Drive API (lista/lee solo la carpeta autorizada)
→ URL/contenido temporal para el emulador
→ EmulatorJS/WebAssembly dentro del navegador

GitHub versiona el código. Netlify sirve el frontend y ejecuta funciones de servidor. Google Drive guarda los archivos de juego. Ningún secreto debe viajar al frontend.

## Decisiones

- Drive no debe configurarse como un directorio público sin protección.
- Para la biblioteca compartida, definir una carpeta de Drive con acceso controlado y compartirla únicamente con las cuentas necesarias.
- La autorización debe verificarse en servidor en cada operación; ocultar botones en el frontend no es seguridad.
- Google OAuth y Drive API requieren configurar un proyecto de Google Cloud, consentimiento OAuth y scopes mínimos. Nunca almacenar tokens de usuario en localStorage.
- No transmitir credenciales de Drive directamente al emulador. El backend debe emitir acceso limitado/temporal o mediar la descarga, según tamaño y límites reales.
- Evitar proxy completo de ROM grandes a través de una función serverless hasta comprobar límites de tamaño, tiempo, memoria y transferencia. Para archivos grandes, evaluar enlaces temporales compatibles con el emulador o almacenamiento diseñado para entrega de archivos.
- Los estados de guardado pueden variar según core, sistema y navegador; sincronizarlos requiere una fase separada.
- PSP y sistemas posteriores requieren pruebas de compatibilidad y rendimiento por título/dispositivo.

## Criterios de aceptación por fase

### Fase 1
La interfaz carga, filtra juegos, guarda favoritos y permite elegir una ROM local. Prueba inicial en PC.

### Fase 2
Probar una ROM legal de NES/GBA en PC y Android. Medir arranque, controles, audio, orientación horizontal y errores. Después probar PS1/N64 y PSP por separado.

### Fase 3
Solo usuarios autorizados pueden iniciar sesión y ver el catálogo de Drive. Usuario no autorizado recibe 401/403. Los secretos no aparecen en el cliente ni en GitHub.

### Fase 4
Una ROM autorizada se carga sin hacer pública la carpeta; errores de permiso, tamaño o red se muestran claramente.

### Fase 5
PWA instalable, controles táctiles revisados, favoritos/recientes y guardados evaluados por core.

## Fuera de alcance en v0.1

- Acceso real a Drive.
- Autenticación.
- ROM precargadas.
- Multijugador online.
- Compatibilidad garantizada con todos los sistemas.
