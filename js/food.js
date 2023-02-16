const API_KEY = "L%2Fb%2BfQ9y55je7IXprugDIh9H%2F2k29xdC4W4IqCo36EPBgUz8DVdtezAHCrk4aRyQaZgMrrM%2BRQRSINADGG4NgQ%3D%3D";

let bread_name = "마들렌";
let items_num = 0;

get_data();

async function get_data() {
  const url = `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey=${API_KEY}&desc_kor=${bread_name}&numOfRows=10&type=json`;
  const response = await fetch(url);
  data = await response.json();
  console.log("data", data); 
  api_data(data);
}

function api_data(data) {
  document.querySelector("#product_name").innerText = `${data.body.items[items_num].DESC_KOR}`;
  document.querySelector("#product_serv").innerText = `${data.body.items[items_num].SERVING_WT}g`;
  document.querySelector("#product_info1").innerText = `${data.body.items[items_num].NUTR_CONT1}kcal`;
  document.querySelector("#product_info2").innerText = `${data.body.items[items_num].NUTR_CONT2}g`;
  document.querySelector("#product_info3").innerText = `${data.body.items[items_num].NUTR_CONT3}g`;
  document.querySelector("#product_info4").innerText = `${data.body.items[items_num].NUTR_CONT4}g`;
  document.querySelector("#product_info5").innerText = `${data.body.items[items_num].NUTR_CONT5}g`;
  document.querySelector("#product_info6").innerText = `${data.body.items[items_num].NUTR_CONT6}mg`;
  document.querySelector("#product_info7").innerText = `${data.body.items[items_num].NUTR_CONT7}mg`;
  document.querySelector("#product_info8").innerText = `${data.body.items[items_num].NUTR_CONT8}g`;
  document.querySelector("#product_info9").innerText = `${data.body.items[items_num].NUTR_CONT9}g`;
}
