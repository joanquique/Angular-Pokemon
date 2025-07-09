# Angular Pokémon Search

Aplicación frontend en Angular para buscar Pokémon usando la API pública de PokéAPI.

---

## Tecnologías y dependencias necesarias

- [Node.js](https://nodejs.org/) v14 o superior (incluye npm)
- Angular CLI (se recomienda instalar globalmente):
  
  ```bash
  npm install -g @angular/cli

# Instalación y ejecución local
## Clona o descarga el repositorio.

En la raíz del proyecto, instala las dependencias:
    npm install

Para ejecutar la aplicación en modo desarrollo:
    ng serve

Abre tu navegador y navega a:
    http://localhost:4200

## Build para producción
Para crear la versión optimizada lista para despliegue:
    ng build --configuration production

La carpeta generada con la app para producción es:
    dist/browser

## Despliegue en Netlify
La aplicación está desplegada en Netlify:

https://startling-crumble-afdd87.netlify.app/

## Tiempo estimado de desarrollo
El tiempo que me tomó desarrollar esta App fue de 2 horas aproximadamente, tomando en cuenta los siguientes puntos
    
    Desarrollo del componente de búsqueda.

    Implementación de caché con sessionStorage.

    Manejo de errores y animaciones.

    Refactorización a servicios y modelos.

    Despliegue y pruebas.

# Uso
    Ingresa el nombre de un Pokémon en el campo de búsqueda y presiona "Buscar" o Enter. La aplicación mostrará la imagen, tipos, altura y peso del Pokémon. Si el nombre no existe o hay un error de red, mostrará un mensaje de error.

## ¡Gracias por revisar la aplicación! Cualquier duda o sugerencia, estoy a disposición.