export var template = `
<div  class="topContainer">
  <div  class="topSection">
    <img src="" class="mainImage" />
    <div class="flexContainer centerText">
      <h1 class="title"></h1> <span> &nbsp;</span><span class="buildDate"></span>
    </div>
    <span class="blurb"></span>
  </div>
</div>
<div class="flexContainer imageColumn">
</div>


<style rel="stylesheet">
    .mainImage {
      max-width: 600px;
      height: auto;
    }

    .topContainer {
      display:flex;
      justify-content: center;
    }
    
    .topSection {
      height: auto;
      margin-bottom: 50px;
      max-width:600px;
    }

    .imageColumn {
      justify-content: space-evenly;
      max-width: 1235px;
      flex-flow: wrap row;
      margin:auto;
    }

    .imageColumn img {
      width: auto;
      max-height: 700px;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      object-fit: contain;
    }


    @media only screen and (max-width: 600px) {
      .imageColumn {
        max-width: 390px;
      }
      .imageColumn img{
        max-width: 390px;
      }
      .topSection{
        max-width: 390px;
      }
      .mainImage{
        max-width: 390px;
      }
    }

    .centerText {
      align-items: center;
      justify-content: space-between;
      padding-top: 15px;
      padding-bottom: 30px;
    }

    .centerText h1 {
      padding-top: 5px;
    }
  </style>
  `;