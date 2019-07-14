// Get-ChildItem -Recurse -File |
// Group-Object -Property Directory |
// ForEach-Object {
//     @(
//         $_.Group |
//         Resolve-Path -Relative |   # make relative path
//         ForEach-Object Substring 2 # cut '.\' part
//     )-join','
// }

var projecetdetail = require('./js/projecetdetailtemplate.js');

console.info("starting..");

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

var pathToImage = './images/projects/Sylvania87/';
const project = {
  title: '87 SYLVANIA',
  mainImage: [pathToImage + '11.jpg'],
  images: [
  '10.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.JPG',
  '8.jpg',
  '9.jpg'
  ],
  buildDate: '2017/2018',
  blurb: `New build construction on challenging sloping site. Extensive rock excavation. Four main
  living levels with
  splits on each of the levels. Landscaping including pool. Project timeline 10 months`,
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