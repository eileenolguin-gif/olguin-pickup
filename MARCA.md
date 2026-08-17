# Olguín Pickup — Propuesta de marca

Documento de identidad visual: diagnóstico del logo actual, dirección elegida,
paleta de color y archivos a producir.

**Dirección elegida: Opción B — Pin y trayecto.**

---

## 1. Diagnóstico del logo actual

El logo actual es un círculo negro con "Olguín Pickup" en dos líneas, un pin al
costado con una "o" adentro, y la palabra "CHILE" en gris bajo el texto.

### Lo que funciona

El pin con la "o" adentro es el activo real de la marca. Dice "ubicación / te
paso a buscar" sin necesidad de explicarlo, y además rima con la O de Olguín.
**Ese elemento se conserva.**

### Lo que lo frena

| # | Problema | Por qué importa |
|---|----------|-----------------|
| 1 | El color no es el de la marca | El logo es negro puro; la web es verde pino `#1E5245` sobre blanco. El logo parece de otra empresa que la landing. |
| 2 | El disco negro se come el logo | El círculo ocupa casi la mitad del área y obliga a que todo lo demás vaya chico. Un círculo relleno sirve como *avatar*, no como logo principal. |
| 3 | La composición pelea consigo misma | Texto en dos líneas + pin al costado = dos centros ópticos. El ojo no sabe si leer o mirar el ícono, y el pin queda flotando a la altura del quiebre de línea. |
| 4 | No sobrevive al tamaño chico | A 32 px (favicon, pestaña, foto de perfil) no se lee "Olguín Pickup", ni la "o" del pin, y "CHILE" desaparece antes que todo lo demás. |
| 5 | "CHILE" es información, no marca | La landing ya dice "agencia familiar chilena". En el logo solo resta legibilidad. |
| 6 | Falta el sistema | Hoy hay una sola pieza cuadrada. Se necesitan al menos tres: horizontal, isotipo solo y versión sobre fondo oscuro (el hero y la sección "Posicionamiento" son oscuros). |

---

## 2. Las tres opciones evaluadas

Las tres mantienen el pin. Cambia cómo se construye alrededor.

### Opción A · Pin macizo

El pin deja de estar dentro de un disco y pasa a ser el logo. El hueco circular
del pin es la contraforma que hace de "o". Sobrevive a 20 px.

### Opción B · Pin y trayecto — **ELEGIDA**

Un punto de origen en arena, una línea punteada, y el pin de destino. Cuenta el
servicio sin una palabra: *te recojo aquí, te dejo allá*. Es la más narrativa y
la única que genera un recurso gráfico reutilizable (la línea punteada puede
repetirse como separador entre secciones de la landing).

**Limitación conocida:** en tamaños chicos la línea punteada y el punto de
origen se pierden. Por eso el sistema usa el pin solo (el isotipo de la opción
A) como favicon y como versión mínima. No es una contradicción: es la misma
familia, la versión larga cuenta el viaje y la corta lo firma.

### Opción C · Sello circular

El logo actual corregido: el círculo se queda porque para la foto de perfil de
WhatsApp e Instagram es útil, pero pasa a verde pino y el texto sale de adentro
del círculo. Se conserva **solo como avatar**, nunca como logo de la web.

---

## 3. El sistema definitivo

| Pieza | Versión | Dónde se usa |
|-------|---------|--------------|
| Logo principal | B — trayecto + wordmark | Hero, firma de correo, documentos, presentaciones |
| Logo horizontal | B en una línea | Navbar del sitio |
| Isotipo | Pin solo (de A) | Favicon, sticker del vehículo, marca de agua |
| Avatar | C — sello circular | WhatsApp Business, Instagram, Google Business |
| Recurso gráfico | La línea punteada de B | Separadores entre secciones de la landing |

Todas comparten el mismo pin. Es un sistema, no cuatro logos distintos.

---

## 4. Paleta de color

Se mantienen los tres colores que ya usa la landing (`style.css`, bloque
`:root`). Están bien elegidos: el verde pino es serio sin ser corporativo frío,
y es raro en transporte, donde casi todos usan azul o amarillo.

| Color | Hex | Variable CSS | Uso |
|-------|-----|--------------|-----|
| Verde pino | `#1E5245` | `--accent` | Color principal de marca, pin, botones |
| Pino profundo | `#143A31` | `--accent-hover` | Hover, estados presionados |
| Tinta | `#14181A` | `--ink` | Texto principal, wordmark |
| Niebla | `#F5F7F6` | `--ground-alt` | Fondos de sección alternos |
| **Arena** | `#C9A66B` | `--accent-warm` *(nueva)* | Punto de origen del trayecto, subrayados, detalles |

### Por qué se agrega el arena

El posicionamiento es "agencia familiar, no low-cost". Hoy la paleta comunica
bien lo profesional, pero nada lo cálido: todo es verde frío, gris y negro. Un
beige cálido en aproximadamente **5% de la superficie** corrige eso sin ensuciar
el minimalismo. Dosis muy chicas: el punto de origen del recorrido, un
subrayado, el ícono activo del selector de idioma.

### Dos reglas

1. **Nunca negro puro `#000`.** El `#14181A` que ya se usa es más suave y más
   caro visualmente.
2. **Nunca verde brillante tipo WhatsApp en la marca.** Ese verde queda
   reservado exclusivamente para el botón de WhatsApp, que es una convención
   ajena a la identidad.

---

## 5. Archivos

### Listos

- [x] `images/logo-b-claro.svg` — logo B sobre fondo claro, 392×220 px
- [x] `images/logo-b-oscuro.svg` — logo B sobre fondo oscuro, 392×220 px
- [x] `favicon.svg` — isotipo, pin blanco sobre cuadrado verde de esquinas
      redondeadas, 32×32 px

Los dos archivos del logo **tienen el texto convertido a curvas**. Eso significa
que no dependen de que la fuente Schibsted Grotesk esté instalada: se ven igual
en Canva, en Illustrator, en Word, en el correo y en cualquier computador. La
contra es que para cambiar el texto hay que regenerar el archivo, no se puede
editar como texto.

En el archivo oscuro, el fondo `#101614` es un rectángulo con `id="fondo"`. Si
se necesita el logo con fondo transparente para ponerlo sobre una foto, se borra
esa sola línea.

### Pendientes

- [ ] `logo-b-horizontal.svg` — versión de una línea, para la navbar
- [ ] `favicon.png` en 32 px y 180 px (para iOS, que no lee SVG)
- [ ] `avatar.png` 1000×1000 px — sello circular para redes
- [ ] Versión de 1 tinta en negro, para documentos y sellos

---

## 6. Código del logo B

### Lockup principal (fondo claro)

```html
<svg width="132" height="34" viewBox="0 0 132 34" aria-hidden="true">
  <circle cx="7" cy="27" r="4" fill="#C9A66B"/>
  <path d="M14 27h64" stroke="#1E5245" stroke-width="2" stroke-linecap="round"
        stroke-dasharray="1 7" fill="none"/>
  <path fill-rule="evenodd" fill="#1E5245"
        d="M97 4.5c-5.2 0-9.4 4.2-9.4 9.4 0 7 9.4 15.1 9.4 15.1s9.4-8.1
           9.4-15.1c0-5.2-4.2-9.4-9.4-9.4zm0 5.7a3.8 3.8 0 1 1 0 7.6 3.8 3.8
           0 0 1 0-7.6z"/>
</svg>
```

Debajo del SVG va el wordmark: `Olguín Pickup`, Schibsted Grotesk 600, 52 px,
`letter-spacing: -0.02em`, color `#14181A`. En los archivos finales este texto
va como curvas, no como fuente.

Medidas de la composición final (lienzo 392×220 px):

| Elemento | Izquierda | Derecha | Arriba | Abajo |
|----------|-----------|---------|--------|-------|
| Trayecto con pin | 31 | 341 | 29,5 | 109 |
| Wordmark | 33 | 360 | 138 | 190,5 |

Márgenes de 31 px a los lados y 29,5 px arriba y abajo. Separación entre el pin
y el texto: 29 px.

### Versión sobre fondo oscuro

Idéntica, cambiando `#1E5245` por `#F2F5F3` en la línea y el pin. El punto de
origen se queda en arena `#C9A66B`: es el único color que no cambia entre
versiones, y eso lo vuelve reconocible.

### Isotipo (favicon, 32 px)

```html
<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
  <rect width="32" height="32" rx="7" fill="#1E5245"/>
  <path fill-rule="evenodd" fill="#ffffff"
        d="M16 6.5c-3.1 0-5.6 2.5-5.6 5.6 0 4.2 5.6 10.8 5.6 10.8s5.6-6.6
           5.6-10.8c0-3.1-2.5-5.6-5.6-5.6zm0 3.4a2.3 2.3 0 1 1 0 4.6 2.3 2.3
           0 0 1 0-4.6z"/>
</svg>
```

---

## 7. Reglas de uso

- **Área de resguardo:** dejar libre alrededor del logo un espacio igual a la
  altura del pin. Nada de texto ni imágenes dentro de esa zona.
- **Tamaño mínimo:** el lockup horizontal no baja de 120 px de ancho. Por debajo
  de eso, se usa el isotipo.
- **Sobre fotos:** solo la versión blanca, y únicamente sobre zonas oscuras y
  parejas de la imagen. Si la foto es clara, va el logo en verde pino sobre una
  banda blanca.
- **Nunca:** deformar las proporciones, cambiar los colores del pin, rotar el
  logo, agregarle sombra, ni volver a meterlo dentro de un círculo negro.

---

## 8. Implementación pendiente en el sitio

1. Reemplazar el texto plano `Olguín Pickup` de la navbar (`index.html:37`) por
   el SVG del lockup horizontal.
2. Activar el favicon: la línea comentada en `index.html:23` ya está esperando
   el archivo.
3. Agregar `--accent-warm: #C9A66B;` al bloque `:root` de `style.css`.
4. Usar la línea punteada del trayecto como separador entre secciones.
5. Subir el número de versión en `style.css?v=` y `script.js?v=` al publicar.
