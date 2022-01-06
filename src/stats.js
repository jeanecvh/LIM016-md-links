const totalLinks = (arrayLinks) => arrayLinks.map((element) => element.href).length;

const uniqueLinks = (arrayLinks) => {
  const linksSet = new Set ([]);// almacena valores únicos irrepetibles
  arrayLinks.forEach((element) => linksSet.add(element.href));
  return linksSet.size
};

const brokenOfLinksStats = (arrayOfLinks)=> {
  const broken = arrayOfLinks.filter((element)=>
  element.status<200 || element.status >= 400 || element.message === 'FAIL')
  const totalBroken = broken.length
  return  totalBroken
}

module.exports = {totalLinks, uniqueLinks, brokenOfLinksStats};
