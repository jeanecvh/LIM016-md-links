const totalAndUniqueOfLinksStats = (arrayOfLinks) => {
const totalLinks = arrayOfLinks.length;
const unique = arrayOfLinks.map((element)=>element.href);
const totalUnique = new Set(unique);
const allTotalUnique = totalUnique.size;
const totalAndUnique= `total: ${totalLinks} \nunique: ${allTotalUnique} `;
return totalAndUnique
};

const brokenOfLinksStats = (arrayOfLinks)=> {
  const broken = arrayOfLinks.filter((element)=>
  element.status<200 || element.status >= 400 | element.status === 'not found')
  const totalBroken = broken.length
  const statsBroken = `broken: ${totalBroken}`;
  return  statsBroken
}

const userHelper = ()=> {

  return `
  ***************************************** MD-LINKS HELP ***************************************************
    Debe ingresar la ruta del archivo ya sea relativa o absoluta, por ejemplo:
      md-links C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba o
      md-links carpeta_de_prueba
    Opciones validas:
      --stats
          Ejemplo:
            md-links carpeta_de_prueba --stats
            Total: 3
            Unique: 3
      --validate

      --stats --validate  o --validate --stats
          Ejemplo:
            md-links carpeta_de_prueba --stats --validate
            Total: 3
            Unique: 3`
  }


module.exports = {totalAndUniqueOfLinksStats, brokenOfLinksStats, userHelper };
