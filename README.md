# Mynerz - Sitio Web Corporativo

Sitio web corporativo desarrollado con **Svelte** y **Vite** para Mynerz, empresa de servicios y consultoría de TI.

## 🚀 Despliegue en GitHub Pages

### Pasos para desplegar:

1. **Inicializa el repositorio de Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Conecta con tu repositorio de GitHub:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/Mynerz.git
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Despliega a GitHub Pages:**
   ```bash
   npm run deploy
   ```

5. **Configura GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Ve a **Settings** → **Pages**
   - En **Source**, selecciona `gh-pages` branch
   - Guarda los cambios

6. **Accede a tu sitio:**
   - Tu sitio estará disponible en: `https://TU_USUARIO.github.io/Mynerz/`

## 📦 Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Vista previa del build |
| `npm run deploy` | Build + despliegue a gh-pages |

## 🛠️ Tecnologías

- **Svelte** - Framework reactivo
- **Vite** - Build tool rápido
- **gh-pages** - Despliegue automático

## 📁 Estructura del Proyecto

```
Mynerz/
├── src/
│   ├── lib/
│   │   ├── Navbar.svelte
│   │   ├── Hero.svelte
│   │   ├── Services.svelte
│   │   ├── About.svelte
│   │   ├── Projects.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   ├── App.svelte
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Características

- ✅ Diseño moderno y responsivo
- ✅ Animaciones suaves
- ✅ Formulario de contacto funcional
- ✅ Optimizado para SEO
- ✅ 100% compatible con GitHub Pages

## 📝 Notas Importantes

- El archivo `vite.config.js` tiene configurada la `base: '/Mynerz/'` para GitHub Pages
- Asegúrate de que el nombre del repositorio coincida con la configuración en `vite.config.js`
- Las páginas legales (privacidad, términos, cookies) pueden agregarse como componentes adicionales

---

**Mynerz** © 2026 - Transformación digital que impulsa tu negocio
