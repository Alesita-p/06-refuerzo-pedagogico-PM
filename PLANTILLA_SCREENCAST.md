# Plantilla de Sustentación — Screencast técnico (3–5 min)

> Objetivo: **demostrar que entiendes tu código**, no solo que funciona.
> Habla mirando a cámara, muestra el editor y la terminal.

## Guion por tramos

| Tramo | Tiempo | Qué hacer y decir |
|---|---|---|
| 1. Presentación | 0:00–0:30 | Nombre, curso (`3E1`/`3E2`) y una frase: *"Hoy presento el refuerzo del Aporte 1."* |
| 2. Arquitectura | 0:30–1:00 | Muestra la estructura: *"El dominio es el motor, los componentes son la vista y la pantalla los conecta."* |
| 3. Dominio (Reto 01) | 1:00–1:50 | Abre tu archivo de lógica. Explica el cálculo con límites y los estados posibles. Justifica por qué es **puro**. |
| 4. Componentes (Reto 02–03) | 1:50–2:40 | Muestra el display (props tipadas, sin estado) y el botón (`Pressable`, variantes, feedback). |
| 5. Estado (Reto 04) | 2:40–3:20 | Explica `useState`, el estado derivado y por qué los botones se deshabilitan en los límites. |
| 6. Pruebas en vivo | 3:20–4:00 | Corre `pnpm run test:all` (4.0/4.0) y `pnpm run check` (0 errores). |
| 7. App en Expo Go | 4:00–4:40 | Muestra la app en el celular: sumar, restar, reiniciar y el bloqueo en los extremos. |
| 8. Mejora futura | 4:40–5:00 | *"Repetí la lógica a propósito: en la Semana 09 lo resolveré con un custom hook."* |

## Frases guía (respóndelas en voz alta)
1. ¿Por qué el dominio no importa `react-native`?
2. ¿Qué pasaría si se supera el máximo sin acotar el valor?
3. ¿Por qué el display no usa `useState`?
4. ¿Cuál es la diferencia entre una prop y el estado?
5. ¿Por qué el estado de la UI se calcula y no se guarda?

## Checklist técnico (autoevaluación)
- [ ] Rostro visible y audio claro durante todo el video.
- [ ] Muestro el **editor** y explico el código (no solo la app).
- [ ] Corro `pnpm run test:all` y se ven **4/4** en pantalla.
- [ ] Corro `pnpm run check` y se ve **0 errores**.
- [ ] Demuestro la app en **Expo Go** (o el QR/túnel).
- [ ] Cierro explicando la **mejora futura** (custom hook).
- [ ] El enlace del video queda en la **descripción del Pull Request**.

## Errores que bajan la nota
- Leer el código sin explicarlo.
- No mostrar la terminal ni las pruebas.
- No tener rostro ni voz en cámara.
- Entregar el video privado o con enlace roto.

*Refuerzo Aporte 1 · Programación Móvil — 3° BGU (UETS).*
