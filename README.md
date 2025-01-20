# SalesDatePredictionFrontEnd

# Sales Date Prediction - Frontend

Este repositorio contiene el proyecto **frontend** desarrollado en Angular para la aplicación Sales Date Prediction. La aplicación ofrece una interfaz de usuario para visualizar órdenes, realizar predicciones y gestionar datos relacionados.

## Requisitos Previos

- **Node.js** (v18 o superior).
- **npm** (versión incluida con Node.js).
- **Angular CLI** (v17 o superior).

## Estructura del Proyecto

```plaintext
src/
|-- app/
|   |-- environments/     # Configuración de entornos
|   |-- interfaces/       # Tipos e interfaces para el manejo de datos
|   |-- services/         # Servicios para comunicación con la API REST
|   |-- shared/           # Componentes reutilizables
|   |-- pages/            # Páginas principales
|-- assets/               # Archivos estáticos
|-- index.html            # Archivo principal de la aplicación
```

### Detalles de Componentes

- **Interfaces**: Tipos definidos para clientes, empleados, órdenes, y transportistas.
- **Services**: Manejo de peticiones HTTP hacia la API.
- **Páginas**: Incluye el componente principal `home-page` para mostrar predicciones y herramientas de gestión.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio-frontend>
   cd SalesDatePredictionFront
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el archivo de entorno `src/environments/environment.ts` con la URL base del backend.

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

## Buenas Prácticas

1. **Uso de Angular Material**:
   - Utilice componentes estándar como tablas con paginación y ordenamiento.
2. **Modularidad**:
   - Dividi la lógica en servicios y componentes reutilizables.
3. **Validaciones**:
   - Implemente validaciones estrictas en formularios para garantizar integridad de los datos.


---



