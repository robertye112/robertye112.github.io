var projecetdetail = require('./js/projecetdetailtemplate.js');

console.info("starting..");

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

var pathToImage = './images/projects/lindfield/';
const project = {
  title: 'LINDFIELD',
  mainImage: [pathToImage + 'image12.jpg'],
  images: ['image12.jpg','image14.jpg','image4.jpg','image7.jpg'],
  buildDate: '2015/2016',
  blurb: `
  Replacement of all existing windows with custom made Western Red Cedar joinery. Extensive structural roof changes and construction of alfresco area with Vergola. Timeline 6 months.`,
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
