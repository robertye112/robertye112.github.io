var projecetdetail = require('./js/projecetdetailtemplate.js');

console.info("starting..");

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

var pathToImage = './images/projects/Vaucluse/';
const project = {
  title: 'VAUCLUSE',
  mainImage: [pathToImage + 'HIGH RES-7.jpg'],
  images: [
  '329cd8eb-0cdb-40e7-b101-db3db471a1ce.s3.jpg',
  '3801daf2-8f0a-459b-9d9e-23fb6a91078d.s3.jpg',
  '3cbc71aa-a3b1-4cdc-a4da-a30d10af661f.s3.jpg',
  '703422f3-1a19-463f-92ef-3694adef326d.s3.jpg',
  '74d70f03-d1af-460c-a76b-dd76ef746669.s3.jpg',
  '8e00d9a3-30b4-403e-83b7-84fde2a5cc9d.s3.jpg',
  '903afa21-3000-47a1-8a87-1c50168b0920.s3.jpg',
  'b2096ae7-d9e2-4def-b5c0-2a5eb308f734.s3.jpg',
  'c9eaf64e-5386-44a8-af52-3725d2946273.s3.jpg',
  'de0483f2-3366-4a93-bc43-07fbd5109c10.s3.jpg',
  'HIGH RES-10.jpg',
  'HIGH RES-3.jpg',
  'HIGH RES-4.jpg',
  'HIGH RES-5.jpg',
  'HIGH RES-6.jpg',
  '03442115-5a6a-4445-8247-f961fc837a6d.s3.jpg',
  'HIGH RES.jpg'],
  buildDate: '2016',
  blurb: ` 
Top floor apartment, extensive demolition including the removal of all internal masonry walls. Total rebuild and fit out. Timeline 3 months.`,
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
