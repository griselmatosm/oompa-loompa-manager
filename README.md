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

En esta prueba técnica, opté por crear componentes específicos para la lista de Oompas (`OompaList`) y la tarjeta de detalle (`OompaDetail`). Estos componentes contienen tanto la lógica de negocio como la presentación, priorizando la entrega de una solución completa y funcional dentro del tiempo asignado.

#### OompaList

El componente OompaList maneja toda la lógica relacionada con la carga, paginación y renderización de la lista de Oompas. Decidí mantener esta lógica dentro de OompaList por las siguientes razones:

1. **Simplicidad:** Dado que esta aplicación tiene una única lista de Oompas y no se anticipa la necesidad de reutilizar esta lógica en otros contextos, mantener la lógica en `OompaList` permite una implementación más directa y sencilla, evitando la sobreingeniería.

2. **Mantenibilidad:** Al agrupar toda la funcionalidad relacionada en un solo componente, se facilita la gestión y futuras modificaciones del código. Cualquier cambio en la lógica de la lista puede realizarse dentro de `OompaList`, sin afectar otros componentes.

3. **Posible Refactorización:** Aunque la lógica actualmente reside en `OompaList`, en un proyecto a mayor escala podría considerar la abstracción de esta lógica en componentes de UI más genéricos (como List o Card). Esto mejoraría la reusabilidad y la mantenibilidad del código si se anticipa la necesidad de reutilizar estos patrones en otras partes de la aplicación.

#### OompaDetail

El componente `OompaDetail` es responsable de mostrar la información detallada de un Oompa Loompa específico. De manera similar a OompaList, se decidió mantener la lógica y la presentación en un solo componente para facilitar el desarrollo y asegurar la entrega dentro del tiempo asignado.

### Elección de SWR para Fetching y Paginación

Decidí utilizar **SWR** para manejar el fetching y la paginación de datos en esta aplicación debido a varias razones:

- **Simplicidad**: SWR ofrece una API sencilla y fácil de usar que reduce la cantidad de código necesario para gestionar la obtención de datos.
- **Paginación Incorporada**: La funcionalidad de paginación proporcionada por `useSWRInfinite` me permitió implementar un scroll infinito de manera eficiente, cumpliendo con uno de los requerimientos clave de la prueba.
- **Optimización del Rendimiento**: SWR maneja el caching y el refetching en segundo plano, lo que mejora la experiencia del usuario y la eficiencia de la aplicación.

Este enfoque me permitió concentrarme en la lógica de la aplicación mientras aprovechaba las potentes características de SWR para gestionar el estado de los datos.

## Mejoras Futuras

- **Arquitectura**: Considerar la transición a Screaming Architecture si el proyecto crece en complejidad.
- **Persistencia de Datos y Caching**
Un requerimiento importante era garantizar que la lista de Oompa Loompas solo se obtuviera si había pasado más de un día desde la última solicitud. Debido a limitaciones de tiempo, esta funcionalidad no se implementó completamente. Actualmente, la lista de Oompa Loompas se almacena en el estado global y se obtiene de nuevo en cada visita.

En un futuro, se planea implementar un sistema de cacheado más robusto utilizando localStorage o una estrategia de caching más eficiente que permitirá persistir la lista y realizar una nueva solicitud solo cuando sea necesario (más de 24 horas desde la última actualización).


