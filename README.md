# 🏔️ Pokédex de Pokeneas de Antioquia

Una aplicación web desarrollada en Express.js que presenta una colección de Pokeneas (Pokémon nacidos en Antioquia) con información cultural y gastronómica de la región.

## 🌟 Características

- **8 Pokeneas únicos** inspirados en la cultura antioqueña
- **API REST** para obtener información aleatoria de Pokeneas
- **Interfaz web** para visualizar imágenes y frases filosóficas
- **Arquitectura modular** con separación de responsabilidades
- **Containerización** con Docker
- **CI/CD** con GitHub Actions y DockerHub

## 🚀 Pokeneas Disponibles

1. **Paísachu** - Maestro del regateo
2. **Arequipeon** - Especialista en sabores intensos
3. **Bandejamon** - Experto en nutrición completa
4. **Cafetero** - Portador de energía infinita
5. **Guayabite** - Guardián de la dulzura natural
6. **Chorizoking** - Rey del sabor tradicional
7. **Empanadasaur** - Maestro de rellenos sorpresa
8. **Aguapaneleon** - Especialista en hidratación dulce

## 📁 Estructura del Proyecto

```
Taller2-SW/
├── controllers/
│   └── pokeneaController.js    # Lógica de negocio
├── list/
│   └── pokeneas.js            # Datos de los Pokeneas
├── routes/
│   └── pokeneaRoutes.js       # Definición de rutas
├── views/
│   ├── pokenea.ejs           # Vista principal
│   └── error.ejs             # Vista de error
├── .github/
│   └── workflows/
│       └── docker-publish.yml # CI/CD con GitHub Actions
├── Dockerfile                 # Configuración de contenedor
├── index.js                  # Punto de entrada de la aplicación
└── package.json              # Dependencias y scripts
```

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js 18 o superior
- npm

### Instalación Local

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd Taller2-SW
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta la aplicación:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:3000`

### Uso con Docker

1. Construye la imagen:
```bash
docker build -t pokenea-pokedex .
```

2. Ejecuta el contenedor:
```bash
docker run -p 3000:3000 pokenea-pokedex
```

## 🌐 Endpoints de la API

### Rutas Principales

- `GET /` - Página de bienvenida con información de rutas disponibles
- `GET /api/pokenea` - Obtiene un Pokenea aleatorio en formato JSON
- `GET /api/pokenea/view` - Muestra la vista web con imagen y frase filosófica

### Ejemplo de Respuesta JSON

```json
{
  "id": 1,
  "nombre": "Paísachu",
  "altura": "0.8m",
  "habilidad": "Regateo",
  "containerId": "container-id-123"
}
```

## 🐳 Docker y CI/CD

### DockerHub
El proyecto está configurado para construir y publicar automáticamente en DockerHub usando GitHub Actions.

### Variables de Entorno Requeridas (GitHub Secrets)
- `DOCKERHUB_USERNAME`: Tu usuario de DockerHub
- `DOCKERHUB_TOKEN`: Token de acceso de DockerHub

### Comandos Docker Útiles

```bash
# Construir imagen
docker build -t pokenea-pokedex .

# Ejecutar contenedor
docker run -p 3000:3000 --name pokenea-app pokenea-pokedex

# Ver logs del contenedor
docker logs pokenea-app

# Ejecutar en modo detached
docker run -d -p 3000:3000 --name pokenea-app pokenea-pokedex
```

## 🏗️ Arquitectura

La aplicación sigue el patrón MVC (Model-View-Controller):

- **Models**: Datos de Pokeneas en `/list/pokeneas.js`
- **Views**: Templates EJS en `/views/`
- **Controllers**: Lógica de negocio en `/controllers/`
- **Routes**: Definición de endpoints en `/routes/`

## 🌟 Características Técnicas

- **Framework**: Express.js
- **Motor de plantillas**: EJS
- **Containerización**: Docker con imagen Node.js Alpine
- **CI/CD**: GitHub Actions
- **Registro de imágenes**: DockerHub
- **Multiplataforma**: Soporte para linux/amd64 y linux/arm64

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.

## 🎭 Créditos

Desarrollado con ❤️ para celebrar la cultura antioqueña y sus sabores únicos.

---

*"Como una empanada, la vida está llena de sorpresas por dentro."* - Empanadasaur
