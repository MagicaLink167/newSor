# ✨ Mágica Link - Sorpresas Personalizadas

Plataforma para crear sorpresas digitales únicas y mágicas para las personas que más amas. Hecho con HTML, CSS y JavaScript puro — **no necesita servidor ni base de datos**.

## 🎯 Características

- **5 plantillas mágicas**: Hilo Rojo, Cosmic Love, Elegancia Dorada, Fiesta Neon, Recuerdos en el Tiempo
- **100% personalizable**: Nombres, fotos, mensajes, frases y música
- **Funciona sin servidor**: Todo se codifica en la URL (base64)
- **Comparte por WhatsApp, Telegram, Email**
- **Enlaces válidos por 48 horas** (cuenta regresiva incluida)
- **Responsive**: Funciona en móvil, tablet y escritorio
- **Gratis y de código abierto**

## 📁 Estructura del Proyecto

```
magica-link/
├── index.html              ← Página principal
├── customize.html           ← Formulario de personalización
├── customize.js             ← Motor de personalización
├── surprise.html            ← Visor de sorpresas
├── styles.css               ← Estilos de la página principal
├── main.js                  ← JavaScript de la página principal
├── logo.svg                 ← Logo del sitio
├── .gitignore               ← Archivos ignorados por Git
├── README.md                ← Este archivo
└── templates/               ← Plantillas de sorpresas
    ├── hilo-rojo.html
    ├── cosmic-love.html
    ├── elegancia-dorada.html
    ├── fiesta-neon.html
    └── recuerdos-tiempo.html
```

## 🚀 Cómo Subir a GitHub Pages

### Método 1: Por GitHub.com (Recomendado si no usas terminal)

#### Paso 1: Crear cuenta en GitHub
1. Ve a [github.com](https://github.com) y créate una cuenta (es gratis)
2. Verifica tu email

#### Paso 2: Crear un nuevo repositorio
1. Entra a GitHub y haz clic en **"New"** (o ve a github.com/new)
2. Ponle un nombre: `magica-link` (o el que prefieras)
3. Marca **"Add a README file"**
4. Haz clic en **"Create repository"**

#### Paso 3: Subir los archivos
1. En tu repositorio recién creado, haz clic en **"Add file" → "Upload files"**
2. Arrastra **TODOS** estos archivos:
   - `index.html`
   - `customize.html`
   - `customize.js`
   - `surprise.html`
   - `styles.css`
   - `main.js`
   - `logo.svg`
3. Haz clic en **"Add file" → "Create new file"** y escribe `.gitignore` como nombre, pega el contenido del archivo `.gitignore`
4. Ahora crea la carpeta `templates`:
   - Haz clic en **"Add file" → "Create new file"**
   - Escribe `templates/.gitkeep` como nombre (para crear la carpeta)
   - Haz clic en **"Commit changes"**
5. Entra a la carpeta `templates` y sube los 5 archivos HTML:
   - `hilo-rojo.html`
   - `cosmic-love.html`
   - `elegancia-dorada.html`
   - `fiesta-neon.html`
   - `recuerdos-tiempo.html`

#### Paso 4: Activar GitHub Pages
1. Ve a **Settings** (Configuración) de tu repositorio
2. En el menú izquierdo, haz clic en **"Pages"**
3. En **"Build and deployment"**, en **"Source"**, selecciona **"Deploy from a branch"**
4. En **"Branch"**, selecciona **"main"** y **"/ (root)"**
5. Haz clic en **"Save"**
6. Espera 1-2 minutos
7. Tu sitio estará en: `https://TU-USUARIO.github.io/magica-link/`

---

### Método 2: Por Terminal (Git)

#### Paso 1: Instalar Git
- **Windows**: Descarga de [git-scm.com](https://git-scm.com)
- **Mac**: `brew install git` o descarga de git-scm.com
- **Linux**: `sudo apt install git`

#### Paso 2: Configurar Git
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

#### Paso 3: Inicializar repositorio
```bash
# Ve a la carpeta donde están los archivos de magica-link
cd ruta/a/magica-link

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "🚀 Mágica Link - Primera versión"
```

#### Paso 4: Conectar con GitHub
```bash
# Crea un repositorio en github.com/new primero, luego:
git remote add origin https://github.com/TU-USUARIO/magica-link.git
git branch -M main
git push -u origin main
```

#### Paso 5: Activar GitHub Pages
1. Ve a **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main / (root)**
4. Save y espera 1-2 minutos

---

## 🎨 Plantillas Disponibles

| Plantilla | Tipo | Ideal Para |
|-----------|------|------------|
| ❤️‍🔥 Hilo Rojo | Romántico | Parejas, aniversarios |
| 🌌 Cosmic Love | Romántico | Amor a distancia |
| ✨ Elegancia Dorada | Aniversario | Celebraciones elegantes |
| 🎉 Fiesta Neon | Cumpleaños | Fiestas y celebraciones |
| 🕰️ Recuerdos en el Tiempo | Aniversario | Nostalgia y recuerdos |

## ⚠️ Limitaciones

- Los enlaces codificados en URL tienen un límite de tamaño (~500KB de datos codificados)
- Si subes fotos muy grandes, puede que el enlace sea demasiado largo
- **Tip**: Usa fotos de máximo 200-300KB cada una para mejores resultados
- Los enlaces "expiran" visualmente en 48 horas (el contador regresivo), pero técnicamente funcionan mientras el enlace exista

## 📋 Requisitos

Ninguno. Es HTML + CSS + JavaScript puro. Solo necesitas:
- Un navegador web moderno
- Una cuenta de GitHub (gratuita) para publicar

## 📄 Licencia

Uso libre y gratuito. Hecho con ❤️
