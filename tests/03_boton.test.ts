import fs from 'fs';
import path from 'path';

console.log('=================================================================');
console.log('🥊 EJECUTANDO PRUEBAS: RETO 03 — BotonContador (Pressable + variantes)');
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

const filePath = path.resolve(process.cwd(), 'src/components/BotonContador.tsx');
assert(fs.existsSync(filePath), 'El archivo src/components/BotonContador.tsx existe');

const content = fs.readFileSync(filePath, 'utf-8');
const cleanCode = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');

console.log('🔍 Verificando tipado de props y variantes...');
assert(/type\s+BotonVariante\s*=/.test(cleanCode), 'Declara el tipo BotonVariante');
const variantType = (cleanCode.match(/type\s+BotonVariante\s*=\s*([^;]+);/) || [])[1] || '';
assert(
  ['primary', 'danger', 'secondary'].every((v) => variantType.includes(`'${v}'`)),
  "BotonVariante incluye 'primary' | 'danger' | 'secondary'"
);
assert(/interface\s+BotonContadorProps/.test(cleanCode), 'Declara la interface BotonContadorProps');
assert(/label\s*:\s*string/.test(cleanCode), 'Tipa label: string');
assert(/onPress\s*:\s*\(\)\s*=>\s*void/.test(cleanCode), 'Tipa onPress: () => void');
assert(/variante\s*\?\s*:\s*BotonVariante/.test(cleanCode), 'Tipa variante?: BotonVariante');
assert(/disabled\s*\?\s*:\s*boolean/.test(cleanCode), 'Tipa disabled?: boolean');

console.log('\n🔍 Verificando Pressable, variantes y feedback táctil...');
assert(/<Pressable/.test(cleanCode), 'Usa <Pressable> en lugar de <View>');
assert(/onPress=\{onPress\}/.test(cleanCode), 'Conecta onPress');
assert(/disabled=\{disabled\}/.test(cleanCode), 'Conecta disabled');
assert(cleanCode.includes('#FDE047'), "Variante primary con amarillo '#FDE047'");
assert(cleanCode.includes('#38BDF8'), "Variante secondary con cian '#38BDF8'");
assert(cleanCode.includes('#F43F5E'), "Variante danger con rosa '#F43F5E'");
assert(/pressed/.test(cleanCode), 'Usa el estado pressed para dar feedback táctil');

console.log('\n-----------------------------------------------------------------');
if (testsFallidos === 0) {
  console.log('🎉 ¡FELICITACIONES! Reto 03 superado con éxito. (1.00 / 1.00 pt)');
  console.log('-----------------------------------------------------------------\n');
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Revisa src/components/BotonContador.tsx.`);
  console.log('-----------------------------------------------------------------\n');
  process.exit(1);
}
