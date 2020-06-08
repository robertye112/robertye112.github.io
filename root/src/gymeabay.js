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

var pathToImage = './images/projects/GymeaBay/';
const project = {
  title: 'GYMEA BAY',
  mainImage: [pathToImage + 'DJI_0864.jpg'],
  images: ['9M5A7443-Edit.jpg',
  '9M5A7451-Edit.jpg',
  '9M5A7455-Edit.jpg',
  '9M5A7461.jpg',
  '9M5A7471.jpg',
  '9M5A7507.jpg',
  '9M5A7516.jpg'
  ],
  buildDate: '2019',
  blurb: `Total Refurbishment of levels 1, 2 and 3. Extensive demolition and structural steel works, new roof structure with tapered exposed eaves, 
  new double glazed windows and doors throughout. 6 month construction timeline.`,
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