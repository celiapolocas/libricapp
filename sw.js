// Service worker mínimo: solo hace falta que exista y esté registrado
// para que Chrome/Android ofrezca "Instalar app". No cachea nada porque
// Libricapp no necesita funcionar offline.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // sin caché, pasa todo a la red
