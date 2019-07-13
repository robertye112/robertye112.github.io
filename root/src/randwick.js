var projecetdetail = require('./js/projecetdetailtemplate.js');

console.info("starting..");

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

var pathToImage = './images/projects/Randwick/';
const project = {
  title: 'RANDWICK',
  mainImage: [pathToImage + '19.jpg'],
  images: ['15.jpg',
  '12.jpg',
  '20.jpg',
  '02.jpg',
  '20140627_080747_resized.jpg'],
  buildDate: '2014',
  blurb: ` 
Total rebuild of the rear of the house, underpinning of existing masonry walls, extensive steel works. Large light weight first floor addition. Timeline 6 months.`,
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
