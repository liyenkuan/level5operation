
let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];
  //ticketName(新增套票名稱),ticketImgUrl(新增套票圖片),ticketRegion(新增景點第區),ticketPrice(套票金額),ticketNum(套票組數),
  //ticketRate(套票星級),ticketDescription(套票描述)
  //新增功能
  const Attractions = document.querySelector("ul");
  let PackageName =  document.getElementById("ticketName");
  let PackageImgUrl =  document.getElementById("ticketImgUrl");
  let PackageRegion =  document.getElementById("ticketRegion");
  let PackagePrice =  document.getElementById("ticketPrice");
  let PackageNum =  document.getElementById("ticketNum");
  let PackageRate =  document.getElementById("ticketRate");
  let PackageDescription =  document.getElementById("ticketDescription");
  // console.log(PackageName);
  // console.log(PackageImgUrl);
  // console.log(PackageRegion);
  // console.log(PackagePrice);
  // console.log(PackageNum);
  // console.log(PackageRate);
  // console.log(PackageDescription);
  let submitBtn = document.querySelector(".addTicket-btn");
  //console.log(submitBtn);
  function addPackage(){
    let obj = {};
    let name = PackageName.value;
    let imgUrl = PackageImgUrl.value;
    let area = PackageRegion.value;
    let price = PackagePrice .value;
    let group = PackageNum.value;
    let rate = PackageRate.value;
    let description =PackageDescription.value;
    let id = data.length;
    if(name == null || name == undefined || name == '' || imgUrl == null || imgUrl == undefined || imgUrl == '' ){
      alert("請輸入值");
    }else{
      console.log(id);
    obj = {
      id,
      name,
      imgUrl,
      area,
      description,
      group,
      price,
      rate,
    }
    data.push(obj);
    cardPPut();
    console.log(obj);
    // console.log(packName);//取直
    // console.log(packImgUrl);//取直
    // console.log(packRegion);//取直
    // console.log(packPrice);//取直
    // console.log(packNum);//取直
    // console.log(packRate);//取直
    // console.log(packDescription);//取直

    }
    
}
submitBtn.addEventListener("click", addPackage);
function cardPPut(){
  //const Attractions = document.querySelector("ul");
  let addhtml = '';
  data.forEach(function(item,index){
    //console.log(item);
    // let carddata =[item];
    // console.log(carddata);
    let attadd = ` <li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src=${item.imgUrl} alt="">
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price"> ${item.price}</span>
            </p>
          </div>
        </div>
      </li>`;
    addhtml += attadd;
  });
   Attractions.innerHTML=addhtml;
 // console.log(addhtml);
}
cardPPut();
//regionSearch地區搜尋
let region = document.querySelector(".regionSearch");
let regionNum =  document.querySelector("#searchResult-text");
console.log(regionNum);
function Selectorregion(){

  let revalue = region.value;
  let redata =data.filter(reda => reda.area == revalue );
  console.log(redata);
  if(redata == undefined || redata == null || redata== ''){
    regionNum.innerHTML = `本次搜尋共 ${data.length} 筆資料`;
    cardPPut();
    return;
  }else{
    showCard(redata);
  }
}
function showCard(redata){
  let showhtml = '';
  redata.forEach(function(item){
    regionNum.innerHTML = `本次搜尋共 ${redata.length} 筆資料`;
    let filterregion =  ` <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src=${item.imgUrl} alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
          ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num">  ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price"> ${item.price}</span>
        </p>
      </div>
    </div>
  </li>`;
  showhtml += filterregion;
  });
  Attractions.innerHTML = showhtml;
}
region.addEventListener("click",Selectorregion);


 