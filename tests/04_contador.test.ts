import fs from 'fs';
import path from 'path';

console.log('=================================================================');
console.log('🥊 EJECUTANDO PRUEBAS: RETO 04 — Contenedor con useState');
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

const filePath = path.resolve(process.cwd(), 'src/app/index.tsx');
assert(fs.existsSync(filePath), 'El archivo src/app/index.tsx existe');

const content = fs.readFileSync(filePath, 'utf-8');
const cleanCode = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');

console.log('🔍 Verificando importación del dominio y el estado...');
assert(
  /from\s+['"]@\/domain\/counter['"]/.test(cleanCode),
  'Importa el dominio con el alias @/domain/counter'
);
assert(
  /const\s*\[\s*valor\s*,\s*setValor\s*\]\s*=\s*useState/.test(cleanCode),
  'Declara el estado reactivo [valor, setValor] con useState'
);
assert(/useState/.test(cleanCode), "Usa el hook 'useState'");

console.log('\n🔍 Verificando los manejadores (reutilizando el dominio)...');
assert(
  /setValor\s*\(\s*calcularValor/.test(cleanCode),
  'incrementar/decrementar usan setValor(calcularValor(...))',
  "No sumes a mano: setValor(calcularValor(config, 'incrementar'))"
);
assert(
  /setValor\s*\(\s*0\s*\)/.test(cleanCode),
  'reiniciar usa setValor(0)',
  'Dentro de reiniciar: setValor(0)'
);
assert(/estadoUI/.test(cleanCode), 'Usa estadoUI para deshabilitar los botones en los límites');

console.log('\n🔍 Verificando el ensamblaje de la UI...');
assert(/<ContadorDisplay/.test(cleanCode), 'Renderiza <ContadorDisplay>');
assert(/<BotonContador/.test(cleanCode), 'Renderiza <BotonContador>');

console.log('\n-----------------------------------------------------------------');
if (testsFallidos === 0) {
  console.log('🎉 ¡FELICITACIONES! Reto 04 superado con éxito. (1.00 / 1.00 pt)');
  console.log('-----------------------------------------------------------------\n');
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Revisa src/app/index.tsx.`);
  console.log('-----------------------------------------------------------------\n');
  process.exit(1);
}
