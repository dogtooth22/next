import { Injectable } from '@nestjs/common';
import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  /* getHello(): string {
    let ourTuple: [number, boolean, string];
    ourTuple = [5, false, 'Coding God was here'];
    console.log(ourTuple);
    return "Hola";
  } */
  getHello(): any {
    /* const testFolder = './src';
    const fs = require('fs');

    fs.readdirSync(testFolder).forEach(file => {
      console.log(file);
    });*/
    const file = createReadStream(join(process.cwd(), 'src\\main.ts'));
    return ["1", "2", "3"];
  }
}
