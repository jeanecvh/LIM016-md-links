#!/usr/bin/env node

const {mdLinks} = require('./mdLinks');
const {totalLinks, uniqueLinks, brokenOfLinksStats} = require('./stats');
const {userHelp} = require('./help');

const [, , ...args] = process.argv;

if(args.length === 0) {
    console.error('Ingrese la ruta de un archivo');
  }

if (args.length === 1){
    mdLinks(args[0], { validate:false })
    .then(res=>res.forEach(e=> console.log(`\nhrefmd-links: ${e.href}\ntext: ${e.text}\nfile: ${e.file}\n`)))
    .catch(err => console.log(err));
}

if(args.length === 2){
  switch (args[1]) {
      case '--validate':
          mdLinks(args[0], { validate: true })
          .then(res => res.forEach(e =>
              console.log(`\nhref: ${e.href} \ntext: ${e.text} \nfile: ${e.file} \nstatus: ${e.status} \nmessage: ${e.message}`)))
          .catch(err => console.log(err));
      break;

      case '--stats':
          mdLinks(args[0], { validate: true })
          .then(res=> console.log(
`Total: ${totalLinks(res)}
Unique: ${uniqueLinks(res)}`
           ))
          .catch(err => console.log(err));
      break;

      case '--help':
          console.log(`${userHelp()}`);
      break;

      default: console.log('Lo siento el comando no existe, puedes ver las opciones mediante el comando "--help" \nRecuerda usarlo de la siguiente manera "md-links (ruta) --help"');
      break;
  };

};

if(args.length === 3){
  if ((args[1] === "--stats" && args[2] === "--validate") ||
  (args[1] === "--validate" && args[2] === "--stats")) {
      mdLinks(arguments[0], { validate: true })
          .then(res=> console.log(
`Total: ${totalLinks(res)}
Unique: ${uniqueLinks(res)}
Broken: ${brokenOfLinksStats(res)}`
          ))
          .catch(err => console.log(err));
  } else{
      console.log(colors.brightRed('Lo siento el comando no existe, puedes ver las opciones mediante el comando "--help" \nRecuerda usarlo de la siguiente manera "md-links (ruta) "--help"'))
  }
}
