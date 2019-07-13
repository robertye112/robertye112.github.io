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

var pathToImage = './images/projects/Sylvania/';
const project = {
  title: 'SYLVANIA',
  mainImage: [pathToImage + '9M5A4923-Edit.jpg'],
  images: ['9M5A0639.jpg',
    '9M5A0679.jpg',
    '9M5A0683.jpg',
    '9M5A0706.jpg',
    '9M5A4913-Edit.jpg',
    '9M5A4923-Edit.jpg',
    '9M5A4938-Edit-Edit.jpg',
    '9M5A4954-Edit.jpg',
    '9M5A4970-Edit.jpg',
    '9M5A4992-Edit.jpg',
    '9M5A5002-Edit.jpg',
    '9M5A5036-Edit.jpg',
    '9M5A5039.jpg',
    '9M5A5057.jpg',
    '9M5A5084.jpg',
    '9M5A5108.jpg',
    '9M5A5124.jpg',
    '9M5A5137.jpg',
    '9M5A5158.jpg',
    '9M5A9305-Edit.jpg',
    'DSC_0414.jpg'
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