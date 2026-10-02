# Temario conceptual — Refuerzo Aporte 1

> Material conceptual puro: **conceptos + analogías + ejemplos genéricos**.
> No menciona variables, archivos ni la solución del proyecto del estudiante:
> la idea es que **relacione** el concepto por su cuenta.
>
> Base para el **podcast / video narrado** (guion de conceptos).

---

## Bloque 1 — TypeScript aplicado

- **Tipos primitivos**
  - *Qué explicar:* el lenguaje puede describir qué clase de dato guarda cada valor.
  - *Analogía:* etiquetas en frascos de cocina: "sal", "azúcar", "harina".
  - *Ejemplo:* una edad es un número; un nombre es texto; un interruptor es verdadero/falso.

- **Interfaces como contratos de datos**
  - *Qué explicar:* describen la *forma* que debe tener un objeto; no existen al ejecutar.
  - *Analogía:* el molde de una llave: la llave debe calzar exactamente.
  - *Ejemplo:* un objeto "película" que debe tener título, año y género.

- **Inmutabilidad (`readonly`)**
  - *Qué explicar:* hay datos que se leen pero no se reescriben.
  - *Analogía:* un número de cédula: te identifica toda la vida.
  - *Ejemplo:* el identificador de un producto no cambia aunque cambie su precio.

- **Campos opcionales**
  - *Qué explicar:* un dato puede estar o no estar presente, y hay que manejarlo.
  - *Analogía:* un formulario con campos obligatorios y campos "si aplica".
  - *Ejemplo:* un contacto puede tener teléfono; si no lo tiene, igual es válido.

- **Uniones de valores literales**
  - *Qué explicar:* limitar un valor a un conjunto cerrado de opciones.
  - *Analogía:* un menú de restaurante: solo existen los platos listados.
  - *Ejemplo:* un color de semáforo solo puede ser rojo, ámbar o verde.

- **Uniones discriminadas (estados)**
  - *Qué explicar:* una variable representa **un** estado entre varios posibles, nunca dos a la vez.
  - *Analogía:* el semáforo: está en un único estado en cada momento.
  - *Ejemplo:* el estado de una descarga: en espera, descargando o completada.

- **Funciones tipadas**
  - *Qué explicar:* indicar qué recibe y qué devuelve una función.
  - *Analogía:* una máquina expendedora: metes monedas y sabes qué producto sale.
  - *Ejemplo:* una función que recibe grados y devuelve una etiqueta de clima.

- **Funciones puras**
  - *Qué explicar:* misma entrada produce siempre la misma salida, sin efectos colaterales.
  - *Analogía:* una calculadora: 2 + 2 siempre da 4, sin importar cuándo la uses.
  - *Ejemplo:* convertir una temperatura de Celsius a Fahrenheit no altera nada externo.

- **Documentar funciones (TSDoc)**
  - *Qué explicar:* dejar escrito el "contrato" de una función (qué recibe y qué
    devuelve) en un comentario; el editor lo muestra al usarla.
  - *Analogía:* el manual de una máquina expendedora: explica qué botón dar y qué esperar.
  - *Ejemplo:* pasar el cursor sobre una función y ver su ayuda sin abrir el archivo.

- **Narrowing (reducción de posibilidades)**
  - *Qué explicar:* al comprobar un valor, el lenguaje descarta los casos imposibles.
  - *Analogía:* un detective que descarta sospechosos con cada pista.
  - *Ejemplo:* "si el estado es rojo, entonces no es verde".

- **Acotar un valor a un rango (clamping)**
  - *Qué explicar:* una regla de negocio que impide salir de los límites.
  - *Analogía:* el tope del ascensor: no pasa del último piso ni del sótano.
  - *Ejemplo:* el volumen del celular: nunca baja de 0 ni supera 100.

---

## Bloque 2 — Componentes y vista en React Native

- **Componentes funcionales**
  - *Qué explicar:* una función que describe cómo se ve una parte de la pantalla.
  - *Analogía:* un ladrillo de LEGO con una forma definida.
  - *Ejemplo:* un "botón" que se puede colocar muchas veces.

- **JSX y expresiones**
  - *Qué explicar:* dentro de las llaves `{ }` se escribe JavaScript para mostrar valores.
  - *Analogía:* los huecos de un álbum: pones la foto que quieras.
  - *Ejemplo:* mostrar el nombre de un usuario dentro de un texto.

- **Props (datos de entrada)**
  - *Qué explicar:* los datos viajan del componente contenedor al componente visual.
  - *Analogía:* el enchufe: solo entra lo que tiene la forma correcta.
  - *Ejemplo:* un componente de tarjeta recibe el título y el precio a mostrar.

- **Tipado de props**
  - *Qué explicar:* describir exactamente qué props recibe un componente.
  - *Analogía:* un manual de piezas: cada pieza debe encajar.
  - *Ejemplo:* una tarjeta exige un título de texto y un precio numérico.

- **Props opcionales y valores por defecto**
  - *Qué explicar:* algunas props pueden no enviarse; si faltan, hay un valor de respaldo.
  - *Analogía:* el tamaño de un café: si no lo dices, viene mediano.
  - *Ejemplo:* un botón sin color indicado usa su color por defecto.

- **Componentes de presentación**
  - *Qué explicar:* un componente que solo muestra; no decide ni guarda datos.
  - *Analogía:* el marcador de un estadio: refleja el resultado, no lo cambia.
  - *Ejemplo:* una etiqueta que solo pinta el texto que recibe.

- **Renderizado condicional**
  - *Qué explicar:* mostrar algo solo cuando se cumple una condición.
  - *Analogía:* una luz de "ocupado" que solo enciende si hay alguien dentro.
  - *Ejemplo:* mostrar "sin resultados" solo si la lista está vacía.

- **Composición de componentes**
  - *Qué explicar:* componentes pequeños que se combinan para formar pantallas.
  - *Analogía:* armar un mueble con piezas más simples.
  - *Ejemplo:* una pantalla formada por encabezado, lista y botón.

- **Primitivos de la vista**
  - *Qué explicar:* los bloques básicos: el contenedor y el texto.
  - *Analogía:* cajas y rótulos dentro de una caja grande.
  - *Ejemplo:* una tarjeta es un contenedor con un texto adentro.

- **Hojas de estilo**
  - *Qué explicar:* separar los estilos del contenido para mantener orden y eficiencia.
  - *Analogía:* el vestuario de una obra: cada actor sabe qué ropa usa.
  - *Ejemplo:* definir los colores y tamaños de un botón una sola vez.

- **Estilos condicionales**
  - *Qué explicar:* cambiar el aspecto según el estado, combinando estilos en capas.
  - *Analogía:* un uniforme con parches según la ocasión.
  - *Ejemplo:* un botón que se ve "apagado" cuando está deshabilitado.

- **Botón táctil (`Pressable`)**
  - *Qué explicar:* un control que reacciona al toque y puede deshabilitarse.
  - *Analogía:* un timbre: no hace nada hasta que lo presionas.
  - *Ejemplo:* un botón que al tocarlo enciende una acción.

- **Retroalimentación táctil**
  - *Qué explicar:* dar una señal visual de que el toque sí ocurrió.
  - *Analogía:* el clic de una lapicera: confirma que registró.
  - *Ejemplo:* un botón que se "hunde" un instante al presionarlo.

- **Disposición (layout) básica**
  - *Qué explicar:* ordenar los elementos en fila o columna, con espacios y márgenes.
  - *Analogía:* acomodar libros en una repisa: horizontal, vertical y con separadores.
  - *Ejemplo:* tres botones alineados en fila y centrados.

---

## Bloque 3 — Estado y reactividad

- **Estado con `useState`**
  - *Qué explicar:* el componente recuerda un valor entre dibujos de pantalla.
  - *Analogía:* la pizarra de un entrenador: guarda el marcador actual.
  - *Ejemplo:* llevar la cuenta de un interruptor encendido/apagado.

- **Valor y actualizador**
  - *Qué explicar:* el estado se lee por un lado y se cambia por una función, nunca a mano.
  - *Analogía:* leer el marcador y cambiarlo solo con el marcador en la mano.
  - *Ejemplo:* consultar el nivel de volumen y subirlo con la función correspondiente.

- **Re-render (redibujado)**
  - *Qué explicar:* al cambiar el estado, la pantalla se vuelve a dibujar con el nuevo valor.
  - *Analogía:* el marcador del estadio se actualiza apenas cambia el número.
  - *Ejemplo:* subir el volumen y ver la barra avanzar sola.

- **Eventos como funciones**
  - *Qué explicar:* conectar un toque con una acción del programa.
  - *Analogía:* el botón de un ascensor que llama a un piso.
  - *Ejemplo:* al tocar un botón, encender una luz.

- **Estado derivado**
  - *Qué explicar:* no guardar lo que se puede calcular; se obtiene a partir de otro dato.
  - *Analogía:* no anotar la edad si ya tienes la fecha de nacimiento.
  - *Ejemplo:* el mensaje "máximo alcanzado" se calcula desde el valor, no se guarda aparte.

- **Estado vs. props**
  - *Qué explicar:* el estado es propio del componente; las props llegan de afuera.
  - *Analogía:* lo que decides tú (estado) y lo que te encargan (props).
  - *Ejemplo:* un botón recibe su texto, pero decide internamente si está presionado.

- **Reiniciar estado**
  - *Qué explicar:* devolver el estado a su valor inicial.
  - *Analogía:* el botón de "nueva partida" de un videojuego.
  - *Ejemplo:* un temporizador que vuelve a cero.

- **Interfaz condicionada al estado**
  - *Qué explicar:* habilitar o bloquear acciones según el estado actual.
  - *Analogía:* una puerta que se cierra cuando ya hay mucha gente adentro.
  - *Ejemplo:* deshabilitar "subir" cuando el volumen ya está al máximo.

---

## Bloque 4 — Arquitectura y buenas prácticas

- **Separar lógica y presentación**
  - *Qué explicar:* la lógica vive aparte de la pantalla para no mezclar responsabilidades.
  - *Analogía:* el director de orquesta: coordina, no toca cada instrumento.
  - *Ejemplo:* un cálculo de precios separado del diseño de la tienda.

- **Código puro y testeable**
  - *Qué explicar:* una parte sin dependencias de la interfaz se puede probar por separado.
  - *Analogía:* probar el motor de un auto en el taller antes de manejarlo.
  - *Ejemplo:* verificar una fórmula sin abrir la aplicación.

- **Reutilización de componentes**
  - *Qué explicar:* el mismo componente sirve en varios lugares cambiando sus datos.
  - *Analogía:* el mismo molde de galletas con distinta masa.
  - *Ejemplo:* una tarjeta de producto usada para muchos productos.

- **Variantes y colores centralizados**
  - *Qué explicar:* definir los estilos en un solo lugar evita repetir y desordenar.
  - *Analogía:* un uniforme en varios colores, mismo diseño.
  - *Ejemplo:* un botón con versiones principal, secundaria y de peligro.

- **Duplicación de código (señal de alarma)**
  - *Qué explicar:* repetir el mismo bloque es incómodo de mantener y pide una abstracción.
  - *Analogía:* copiar la misma receta a mano cada vez en vez de tenerla en el recetario.
  - *Ejemplo:* escribir la misma lógica tres veces y sentir que debe reutilizarse.

- **Estructura del proyecto en Expo Router**
  - *Qué explicar:* separar las pantallas del código que no es pantalla.
  - *Analogía:* una casa con ambientes diferenciados: cocina, dormitorios, depósito.
  - *Ejemplo:* una carpeta solo para pantallas y otra para lógica y componentes.

- **Alias de importación**
  - *Qué explicar:* nombrar rutas largas con un apodo corto y legible.
  - *Analogía:* el apodo de una dirección larga.
  - *Ejemplo:* usar un atajo en lugar de una ruta relativa difícil de leer.

- **Tipado estricto**
  - *Qué explicar:* revisar los tipos antes de ejecutar para atrapar errores temprano.
  - *Analogía:* revisar la ortografía antes de enviar el mensaje.
  - *Ejemplo:* un chequeo que avisa de un dato con el tipo equivocado.

---

## Bloque 5 — Herramientas y flujo

- **Ejecutar en el celular**
  - *Qué explicar:* previsualizar la app en el dispositivo, incluso en redes restringidas.
  - *Analogía:* un ensayo general antes del estreno.

- **Ejecutar código fuera de la app**
  - *Qué explicar:* correr la parte lógica en la terminal para probarla rápido.
  - *Analogía:* probar el motor del auto antes de montarlo.

- **Scripts de trabajo**
  - *Qué explicar:* comandos cortos que automatizan tareas repetidas (probar, revisar).
  - *Analogía:* botones de acceso rápido en un control remoto.

- **Control de versiones en equipo**
  - *Qué explicar:* copiar el proyecto, trabajar en una rama propia, registrar cambios y
    proponer una mejora.
  - *Analogía:* una hoja de borrador propia antes de pasarla en limpio al cuaderno común.

- **Leer la ayuda del editor**
  - *Qué explicar:* consultar la documentación y la definición de una función sin salir
    del editor.
  - *Analogía:* el dorso de una caja de medicina: las indicaciones sin abrirla.
  - *Ejemplo:* pasar el cursor o abrir la definición para saber qué recibe una función.

---

*Refuerzo Aporte 1 · Programación Móvil — 3° BGU (UETS). Base conceptual para el podcast.*
