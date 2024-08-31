# Oompa Loompa Manager App

Este proyecto es una aplicación web desarrollada con **React**, **TypeScript**, **Vite**, **Redux Toolkit**, **SWR**, y **React Router**, diseñada para gestionar la tripulación de Oompa Loompas en la fábrica de chocolate de Willy Wonka.

## Instalación

1. Clona el repositorio:

   ```bash
   git https://github.com/griselmatosm/oompa-loompa-manager
   cd oompa-loompa-manager

   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para iniciar la aplicación en modo de desarrollo:

```bash
npm install
```

La aplicación estará disponible en http://localhost:5173/

## Decisiones técnicas

### Arquitectura de carpetas

Opté por una estructura de carpetas por tipos de archivos debido a que el proyecto es pequeño y de alcance limitado, facilitando la navegación y el desarrollo. Esta estructura agrupa componentes, páginas, hooks, etc., en carpetas separadas, lo que simplifica la organización.

### Estructura de Rutas

- Home: La ruta para la página de inicio es path: '/', siguiendo la convención estándar y asegurando que la página principal se cargue al visitar la raíz del sitio.

- Detalle de Oompa Loompa: Opté por path: 'oompa/:id' para la página de detalles, asegurando que la URL sea descriptiva y preparada para futuras expansiones del proyecto.

### Componentes

En esta prueba técnica, opté por crear componentes específicos para la lista de Oompas y la tarjeta de detalle, priorizando la entrega de una solución completa dentro del tiempo asignado. En un proyecto a mayor escala, podría considerar la abstracción de componentes de UI genéricos (como `Card` o `List`) para mejorar la reutilización y la mantenibilidad del código.

## Mejoras Futuras

- Considerar la transición a Screaming Architecture si el proyecto crece en complejidad.
