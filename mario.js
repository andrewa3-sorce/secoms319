fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })

function appendData(data) {
    let mainContainer = document.getElementById("cardList");
    let page = data["Mario"];
    for (let gameName in page) {
        let game = page[gameName];

        let divOuter = document.createElement("div");
        divOuter.classList.add("col", "bg-dark");

        let div = document.createElement("div");
        div.classList.add("card", "shadow-sm", "bg-dark");

        let img = document.createElement("img");
        img.src = "./images/" + game["imageName"];
        div.appendChild(img);

        let innerDiv = document.createElement("div");
        innerDiv.classList.add("card-body");

        let p = document.createElement("p");
        p.innerHTML = `${game["description"]}`;
        p.classList.add("card-text");

        let btnContainer = document.createElement("div");
        btnContainer.classList.add("d-flex", "justify-content-between", "align-items-center");

        let btns = document.createElement("div");
        btns.classList.add("btn-group");

        let siteBtn = document.createElement("a");
        siteBtn.href = game["websiteLink"];
        siteBtn.target = "_blank";
        siteBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        siteBtn.innerHTML = "Wiki";

        let buyBtn = document.createElement("a");
        buyBtn.href = game["buyLink"];
        buyBtn.target = "_blank";
        buyBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buyBtn.innerHTML = "Buy";

        let year = document.createElement("small");
        year.classList.add("card-text");
        year.innerHTML = "Release Year: " + game["year"];

        let price = document.createElement("small");
        price.classList.add("card-text");
        price.innerHTML = "Original Price: $" + game["price"];

        btns.appendChild(siteBtn);
        btns.appendChild(buyBtn);
        btnContainer.appendChild(price);
        btnContainer.appendChild(year);
        btnContainer.appendChild(btns);
        innerDiv.appendChild(p);
        innerDiv.appendChild(btnContainer);
        div.appendChild(innerDiv);
        divOuter.appendChild(div);
        mainContainer.appendChild(divOuter);
    } // end of for
} // end of function appendData