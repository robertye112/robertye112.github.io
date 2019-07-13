var projecetdetail = require('./js/projecetdetailtemplate.js');

console.info("starting..");

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

var pathToImage = './images/projects/NorthNarrabeen/';
const project = {
  title: 'NORTH NARRABEEN',
  mainImage: [pathToImage + '13print.jpg'],
  images: [
  '14print.jpg',
  '18print.jpg',
  '9print.jpg'],
  buildDate: '2015',
  blurb: ` 
  Internal alterations including removal of several internal walls. Structural roof works, decorative burnished topping slab. 3 phase mains power upgrade, interior fit out. Timeline 3 months.`,
};


document.querySelector('#projectDetailContainer').innerHTML = projecetdetail.template;
document.querySelector('.mainImage').src = project.mainImage;
document.querySelector('.buildDate').innerHTML = project.buildDate;
document.querySelector('.title').innerHTML = project.title;
document.querySelector('.blurb').innerHTML = project.blurb;
var i;
for (i = 0; i < project.images.length - 1; i++) {
  var elem = document.createElement("img");
  elem.setAttribute("src", pathToImage + project.images[i]);
  document.querySelector('.imageColumn').appendChild(elem);
}
