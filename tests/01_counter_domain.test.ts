import {
  calcularValor,
  estadoUI,
  type ContadorConfig,
} from '../src/domain/counter';

console.log('=================================================================');
console.log('🥊 EJECUTANDO PRUEBAS: RETO 01 — Dominio del Contador (TypeScript)');
console.log('=================================================================\n');

let testsFallidos = 0;

function assert(condicion: boolean, descripcion: string, pista?: string) {
  if (condicion) {
    console.log(`  ✅ [PASÓ]: ${descripcion}`);
  } else {
    console.log(`  ❌ [FALLÓ]: ${descripcion}`);
    if (pista) console.log(`     👉 PISTA: ${pista}`);
    testsFallidos++;
  }
}

const base: ContadorConfig = { valor: 5, paso: 1, minimo: 0, maximo: 10 };

assert(
  calcularValor(base, 'incrementar') === 6,
  'incrementar con paso 1: 5 => 6',
  'Suma config.paso en calcularValor'
);
assert(
  calcularValor(base, 'decrementar') === 4,
  'decrementar con paso 1: 5 => 4',
  'Resta config.paso en calcularValor'
);

const paso5: ContadorConfig = { valor: 3, paso: 5, minimo: 0, maximo: 10 };
assert(
  calcularValor(paso5, 'incrementar') === 8,
  'respeta el paso configurable: 3 + 5 => 8'
);

const enMinimo: ContadorConfig = { valor: 0, paso: 1, minimo: 0, maximo: 10 };
assert(
  calcularValor(enMinimo, 'decrementar') === 0,
  'clamping inferior: no baja de minimo (0)'
);

const enMaximo: ContadorConfig = { valor: 10, paso: 1, minimo: 0, maximo: 10 };
assert(
  calcularValor(enMaximo, 'incrementar') === 10,
  'clamping superior: no sube de maximo (10)'
);

console.log('\n🔍 Verificando la unión discriminada de estadoUI...');
assert(estadoUI(0, base) === 'MINIMO', "estadoUI(0) => 'MINIMO'");
assert(estadoUI(5, base) === 'IDLE', "estadoUI(5) => 'IDLE'");
assert(estadoUI(10, base) === 'MAXIMO', "estadoUI(10) => 'MAXIMO'");

console.log('\n-----------------------------------------------------------------');
if (testsFallidos === 0) {
  console.log('🎉 ¡FELICITACIONES! Reto 01 superado con éxito. (1.00 / 1.00 pt)');
  console.log('-----------------------------------------------------------------\n');
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa src/domain/counter.ts.`);
  console.log('-----------------------------------------------------------------\n');
  process.exit(1);
}
