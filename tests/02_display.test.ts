import fs from 'fs';
import path from 'path';

console.log('=================================================================');
console.log('🥊 EJECUTANDO PRUEBAS: RETO 02 — ContadorDisplay (props tipadas)');
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

const filePath = path.resolve(process.cwd(), 'src/components/ContadorDisplay.tsx');
assert(fs.existsSync(filePath), 'El archivo src/components/ContadorDisplay.tsx existe');

const content = fs.readFileSync(filePath, 'utf-8');
const cleanCode = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');

console.log('🔍 Verificando props tipadas del componente...');
assert(/interface\s+ContadorDisplayProps/.test(cleanCode), 'Declara la interface ContadorDisplayProps');
assert(/valor\s*:\s*number/.test(cleanCode), 'Tipa la prop valor: number');
assert(
  /etiqueta\s*\?\s*:\s*string/.test(cleanCode),
  'Tipa la prop opcional etiqueta?: string',
  "Declara: etiqueta?: string;"
);

console.log('\n🔍 Verificando render y reutilización...');
assert(/<Text[\s\S]*\{valor\}/.test(cleanCode), 'Renderiza el valor dentro de un <Text>');
assert(
  /\{\s*etiqueta/.test(cleanCode),
  'Renderiza la etiqueta dentro de un <Text> cuando existe',
  'Agrega: {etiqueta ? <Text style={styles.etiqueta}>{etiqueta}</Text> : null}'
);
assert(!/useState|useEffect/.test(cleanCode), 'No usa hooks: es un componente presentacional (dummy)');
assert(/StyleSheet\.create/.test(cleanCode), 'Usa StyleSheet.create para los estilos');

console.log('\n-----------------------------------------------------------------');
if (testsFallidos === 0) {
  console.log('🎉 ¡FELICITACIONES! Reto 02 superado con éxito. (1.00 / 1.00 pt)');
  console.log('-----------------------------------------------------------------\n');
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Revisa src/components/ContadorDisplay.tsx.`);
  console.log('-----------------------------------------------------------------\n');
  process.exit(1);
}
