# Guía Socrática de Montaje — Refuerzo Aporte 1 (Contadores del Bar Salesiano)

> **Cómo funciona esta guía:** no contiene la solución. Cada paso te da una
> **analogía** para entender el concepto, **preguntas guía** para deducirla y la
> **verificación**. Tú escribes el código.
>
> **Orden:** de abajo hacia arriba → motor → componentes → pantalla.

## 🧠 Mapa de analogías

| Concepto técnico | Analogía |
|---|---|
| Dominio (lógica pura) | El **motor** de un carro: funciona sin que lo veas |
| Componente presentacional | Un **marcador de estadio**: muestra, no decide |
| Props tipadas | El **enchufe**: solo entra lo que tiene la forma correcta |
| `Pressable` | Un **timbre**: actúa solo cuando lo presionas |
| Variantes de estilo | Un **uniforme en varios colores**: misma prenda, distinto color |
| Feedback táctil | El **clic** de la lapicera: confirma que registró |
| `useState` | La **pizarra del entrenador**: guarda el marcador actual |
| Re-render | El estadio **actualiza el marcador** cuando cambia el número |
| Unión discriminada | Un **semáforo**: solo rojo, ámbar o verde |
| Clamping | El **tope del ascensor**: no pasa del último piso ni del sótano |
| Custom hook | Una **receta del recetario**: se escribe una vez y se reutiliza |
| Alias `@/` | El **apodo** de una dirección larga |
| `tsc --noEmit` | **Revisar la ortografía** antes de enviar el mensaje (sin enviarlo) |
| TSDoc (documentación) | El **manual de la máquina**: dice qué botón dar y qué esperar |

---

## 🏗️ Arquitectura de la app

La app se organiza en **3 capas** (más las pruebas), para separar responsabilidades:

```text
06-RefuerzoPedagogico/
├── src/
│   ├── app/                    # RUTAS (Expo Router) — solo pantallas
│   │   ├── _layout.tsx         #   layout raíz (Stack)
│   │   └── index.tsx           #   pantalla contenedora (conecta todo)
│   ├── domain/                 # LÓGICA pura (TypeScript, sin React Native)
│   │   └── counter.ts
│   └── components/             # VISTA reutilizable (React Native)
│       ├── ContadorDisplay.tsx
│       └── BotonContador.tsx
├── tests/                      # Pruebas (se ejecutan con tsx)
├── assets/
└── app.json · tsconfig.json · package.json
```

**Capas y responsabilidad:**

| Capa | Carpeta | Qué contiene | Regla |
|---|---|---|---|
| Rutas | `src/app/` | Pantallas y layouts | **Solo** pantallas; nada de lógica |
| Dominio | `src/domain/` | Funciones puras y tipos | **No** importa `react-native` |
| Vista | `src/components/` | Componentes de UI | Reciben props; no deciden la lógica |
| Pruebas | `tests/` | Verificaciones con `tsx` | No se modifica |

**Flujo de datos (unidireccional):**

```text
   domain/counter.ts   (motor: cálculos puros)
            ▲
            │ usa
   app/index.tsx       (contenedor: useState + manejadores)
            │ pasa props ↓
   components/         (ContadorDisplay · BotonContador)
```

- La **pantalla** guarda el estado y llama al **dominio** para calcular.
- La pantalla **baja** datos por **props** a los componentes.
- Los componentes **suben** intenciones por **callbacks** (p. ej. `onPress`).

**Por qué así:** el dominio se prueba solo (sin celular), los componentes se
reutilizan y la pantalla únicamente coordina.

---

## Paso 0 — Preparación (una sola vez)
1. Fork del repo oficial `06-RefuerzoPedagogico`.
2. Clona **tu fork** e instala:
   ```bash
   git clone https://github.com/TU_USUARIO/06-RefuerzoPedagogico.git
   cd 06-RefuerzoPedagogico
   pnpm install
   ```
3. Identidad de Git y rama de entrega:
   ```bash
   git config --global user.name "TU_USUARIO_GITHUB"
   git config --global user.email "tu_correo@ejemplo.com"
   git checkout -b entrega/nombre-apellido
   ```

---

## 📖 Cómo leer el TSDoc (tu primera documentación)

Las funciones del dominio traen un **TSDoc**: un comentario `/** ... */` que describe
el **contrato** de la función. **No dice cómo implementarla**: dice qué recibe y qué
devuelve.

1. **Pasa el cursor** sobre el nombre de la función → aparece un tooltip con
   `@param` y `@returns`.
2. **`F12`** o **`Ctrl + clic`** sobre la función → saltas a su definición y ves el
   TSDoc completo.
3. **`Ctrl + Espacio`** mientras escribes → el autocompletado muestra la ayuda.
4. Cuando la guía diga *"revisa el TSDoc de …"*, ve al archivo indicado y léelo
   **antes** de escribir el código.

> 🧠 **Analogía:** el TSDoc es el **manual de la máquina**: te dice qué botón dar y
> qué esperar. Apretar los botones (implementar) sigue siendo tu trabajo.

---

## Paso 1 — RETO 01 · Dominio (`src/domain/counter.ts`)

**Objetivo:** construir el *motor* lógico del contador (sin React Native).

> 🧠 **Analogía:** este archivo es el **motor del carro**. Funciona aunque nadie
> lo vea; la pantalla será apenas el **tablero**. Por eso se puede probar en
> consola, sin encender la app.

### Preguntas guía
1. Tienes `valor` y `paso`. Si la dirección es `incrementar`, ¿qué operación
   aplicas? ¿Y si es `decrementar`? ¿Puedes resolverlo sin escribir dos ramas
   separadas?
2. 🛗 Piensa en el **tope del ascensor**: no sube más allá del último piso ni baja
   del sótano. ¿Cómo "recortarías" el resultado para que nunca se salga de
   `[minimo, maximo]`? ¿Qué funciones de `Math` te ayudarían?
3. 🚦 `estadoUI` es como un **semáforo**: solo puede estar en uno de tres estados.
   ¿Cuáles son las dos fronteras y qué comparación usarías? ¿Y si no está en
   ninguna?
4. ¿Por qué este archivo **no** importa nada de `react-native`? ¿Qué ventaja te da
   eso?

<details><summary>Pista mínima</summary>
Calcula primero el valor candidato (con `+`/`-`) y luego acótalo entre `minimo` y
`maximo`.
</details>

**Verificación:** `pnpm run start:01` → `🎉 Reto 01 (1.00 / 1.00 pt)`

---

## Paso 2 — RETO 02 · Display (`src/components/ContadorDisplay.tsx`)

**Objetivo:** componente *dummy* (presentacional) con props tipadas.

> 🧠 **Analogía:** es un **marcador de estadio**. No juega el partido ni decide el
> resultado: solo **muestra** el número que le pasan. Si no le pasan el nombre del
> equipo, simplemente no lo pinta.

### Preguntas guía
1. Mira la interface `ContadorDisplayProps`. ¿Cuál prop es obligatoria y cuál
   opcional? ¿Qué símbolo marca "opcional"?
2. 🔌 Las **props** son como un **enchufe**: solo entra lo que tiene la forma
   correcta. ¿Qué pasa si `etiqueta` no llega (no viene)?
3. En JSX, ¿cómo dibujarías algo **solo cuando existe**? (piensa en el ternario o
   en `&&`).
4. ¿Por qué este componente **no** debería usar `useState`? ¿Qué lo haría dejar de
   ser reutilizable?

<details><summary>Pista mínima</summary>
Devuelve un `<Text>` con la etiqueta condicionado a que `etiqueta` sea válida; si
no, `null`.
</details>

**Verificación:** `pnpm run start:02` → `🎉 Reto 02 (1.00 / 1.00 pt)`

---

## Paso 3 — RETO 03 · Botón (`src/components/BotonContador.tsx`)

**Objetivo:** botón reutilizable con variantes y feedback táctil.

> 🧠 **Analogía:** un **timbre**. No hace nada hasta que lo presionas, y te da una
> señal de que "sí registró".

### Preguntas guía
1. ¿Qué diferencia hay entre `<View>` y `<Pressable>` cuando algo debe
   **reaccionar al toque**?
2. 👕 El estilo se compone así: `[styles.base, styles[variante], ...]`. Piensa en
   un **uniforme en varios colores**: la misma prenda (`base`) con distinto color
   (`variante`). ¿Dónde están definidas `primary`, `secondary` y `danger`? ¿Qué
   les falta?
3. ¿Qué colores del kit UETS corresponden a cada variante? (ámbar, cian, rosa).
4. El **clic** de una lapicera confirma el toque. ¿De dónde sale `pressed` y para
   qué sirve `pressed && styles.pressed`?
5. ¿Por qué usamos `styles[variante]` en vez de un `if` por cada color?

<details><summary>Pista mínima</summary>
Cada variante necesita un color de fondo (`backgroundColor`); revisa la cabecera
del archivo para recordar los códigos.
</details>

**Verificación:** `pnpm run start:03` → `🎉 Reto 03 (1.00 / 1.00 pt)`

---

## Paso 4 — RETO 04 · Contenedor (`src/app/index.tsx`)

**Objetivo:** unir dominio + componentes con `useState` directo (sin hooks propios).

> 🧠 **Analogía:** eres el **director de orquesta**: conectas al **motor**
> (dominio) con los **músicos** (componentes). No tocas instrumentos: coordinas.

### Preguntas guía
1. Cuando el usuario toca `+1`, ¿qué debería pasar con `valor`? ¿Qué función del
   dominio ya sabe calcular el nuevo valor **sin** que sumes a mano?
2. ¿Por qué es mejor llamar a esa función que hacer `valor + 1` directamente?
   ¿Qué regla de negocio (los límites del ascensor) se te escaparía?
3. 📋 Piensa en la **pizarra del entrenador**: `useState` guarda el marcador
   actual. Cuando `setValor` cambia el número, ¿qué crees que hace la pantalla?
4. `estado === 'MAXIMO'` deshabilita un botón. ¿Cómo llega `estado` hasta ahí? ¿Qué
   pasa cuando el valor es `0`? ¿Y cuando llega a `maximo`?
5. Para `reiniciar`, ¿necesitas el dominio o basta con llevarlo a un valor
   inicial? ¿Cuál?
6. **Integrador:** si tuvieras que hacer lo mismo para empanadas y jugos, ¿qué
   tendrías que copiar? ¿Cuántas veces? Guarda esa sensación: la Semana 09 la
   resuelve.

<details><summary>Pista mínima</summary>
Cada manejador (`incrementar`, `decrementar`) debería pasarle al estado el
resultado del dominio, no un número fijo. `reiniciar` sí puede usar un valor fijo.
</details>

**Verificación:** `pnpm run start:04` → `🎉 Reto 04 (1.00 / 1.00 pt)`

---

## Paso 5 — Integrador: los 3 contadores (¡a propósito!)

> 🧠 **Analogía:** hoy memorizas la **receta** y la repites 3 veces. En la Semana
> 09 la escribirás **una sola vez** en el recetario (un *custom hook*) y la
> reutilizarás.

- Repite en `src/app/index.tsx` el estado y los botones para **Empanadas** y
  **Jugos**.
- **Pregunta final:** ¿te gustó copiar y pegar el mismo bloque 3 veces? ¿Qué
  tendría que existir para escribir la lógica **una sola vez** y reutilizarla?
- Esa respuesta es exactamente el tema de la **Semana 09** (custom hooks).

---

## Paso 6 — Aseguramiento de calidad
> 🧠 **Analogía:** `check` es **revisar la ortografía** antes de enviar el mensaje
> (sin enviarlo). `test:all` es que el **árbitro confirme** el marcador.

```bash
pnpm run test:all   # 4.0 / 4.0 pts
pnpm run check      # tsc --noEmit con 0 errores
```

## Paso 7 — Probar en el celular
```bash
pnpm start          # Expo Go (usa --tunnel si hay client isolation)
```

## Paso 8 — Entrega
- Commits semánticos (`feat:`, `fix:`, `docs:`...) y `git push` de tu rama.
- Pull Request: **base** `UETS-Programacion-Movil/06-RefuerzoPedagogico:main`
  · **compare** `TU_USUARIO:entrega/nombre-apellido`.
- Pega el enlace del **Screencast (3–5 min)** en la descripción del PR.

---

## Orden resumido

| # | Reto | Archivo | Comando |
|:--:|---|---|---|
| 1 | Dominio | `src/domain/counter.ts` | `pnpm run start:01` |
| 2 | Display | `src/components/ContadorDisplay.tsx` | `pnpm run start:02` |
| 3 | Botón | `src/components/BotonContador.tsx` | `pnpm run start:03` |
| 4 | Contenedor | `src/app/index.tsx` | `pnpm run start:04` |
| 5 | Integrador (3 contadores) | `src/app/index.tsx` | `pnpm run test:all` |
| 6 | QA | — | `pnpm run test:all` + `pnpm run check` |

*Módulo: Programación Móvil — 3° BGU (UETS). Refuerzo Aporte 1.*
