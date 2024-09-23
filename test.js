



let input = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");



let getRes = async(BASE_URL) => {
    let jsonRes = await fetch(BASE_URL);
    let res = jsonRes.json();
    return res;
}

let getVal = (res, from, to, value) => {
    for(data in res){
        if(data == from){
            for(dest in res[data]){
                if(dest == to){
                    let inrVal = res[data][dest];
                    return value*inrVal;
                }
            } 
        }
    }
}


btn.addEventListener("click", async (evt) => {
    let from = document.querySelector(".from").value;
    let to = document.querySelector(".to").value;
    let value = input.value;
    const BASE_URL = `https://latest.currency-api.pages.dev/v1/currencies/${from}.json`;
    
    evt.preventDefault();
    let res = await getRes(BASE_URL);
    let exchangedVal = getVal(res, from, to, value);

    let p = document.querySelector("p");
    p.innerText = `Exchanged Value is = ${exchangedVal.toFixed(2)}`;
});









