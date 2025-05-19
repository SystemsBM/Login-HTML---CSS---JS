# Página de Login Neón

Una página de inicio de sesión elegante e interactiva con temas de color neón personalizables y elementos de interfaz modernos.

![image](https://github.com/user-attachments/assets/dbf5c576-9924-4aae-9a70-ee3af20c8d5d)


## Características

- **Temas de Color Dinámicos**: Ajusta los colores primarios y secundarios con deslizadores o activa el modo de cambio automático para un efecto de flujo de color continuo
- **Elementos de UI Modernos**: Diseño de formulario limpio con efectos de brillo neón animados
- **Componentes Interactivos**: 
  - Validación de formulario con animación de sacudida para errores
  - Botón de inicio de sesión animado con efectos al pasar el cursor
  - Opciones de inicio de sesión con redes sociales con animaciones al pasar el cursor
- **Diseño Responsivo**: Diseño completamente adaptable que funciona en dispositivos móviles y de escritorio

## Estructura de Archivos

- `index.html` - Estructura HTML principal
- `styles.css` - Estilos CSS con efectos neón y diseño responsivo
- `script.js` - JavaScript para interactividad y gestión de colores

## Cómo Funciona

### Gestión de Colores

La página utiliza variables CSS (`--hue1` y `--hue2`) para controlar los colores primarios y secundarios. Estos se pueden ajustar de tres maneras:

1. Manualmente usando los deslizadores en el pie de página
2. Automáticamente con el interruptor "Cambio automático"
3. Aleatoriamente al cargar la página

```javascript
// Ejemplo de cómo se inicializan los colores aleatoriamente
const rand1 = 120 + Math.floor(Math.random() * 240);
const rand2 = rand1 - 80 + (Math.floor(Math.random() * 60) - 30);
