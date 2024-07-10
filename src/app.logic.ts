import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const multiplication = (base: number, limit: number, s: boolean) => {
    let cont: number = 1;
    let text:string = '';
    text += `================================
    Tabla del ${base}\n================================\n`;
    while (cont <= limit) {
        text += `${base} x ${cont} = ${base*cont}\n`;
        cont++;
    }
    if (s) console.log(text);
    const outputPath = 'outputs';
    fs.mkdirSync(outputPath, { recursive: true });
    fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, text);
    console.log('File created!');   
}

const { b, l, s} = yarg;

multiplication(b, l, s);
