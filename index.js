fetch("data.json")
.then(response => response.json())
.then(myGames => loadGames(myGames));

function loadGames(myGames) {
    

    // for (var i = 0; i<myGames.mario_games.length; i++){
        let mainContainer = document.getElementById("game1");
        let title = myGames.mario_games[0].gameName;
        let price = myGames.mario_games[0].gamePrice;
        let text = myGames.mario_games[0].gameDescription;
        let url = myGames.mario_games[0].pircureUrl;
        let div = document.createElement("div");
        div.innerHTML = `<h3 style="color: whitesmoke">${title}</h3><p class="card-text" style="color: whitesmoke"> ${text} <br>
        <strong>Retail Price on Release:  </strong>$${price}</p>`;
        mainContainer.appendChild(div);

        let mainContainer2 = document.getElementById("game2");
        let title2 = myGames.mario_games[1].gameName;
        let price2 = myGames.mario_games[1].gamePrice;
        let text2 = myGames.mario_games[1].gameDescription;
        let url2 = myGames.mario_games[1].pircureUrl;
        let div2 = document.createElement("div");
        div2.innerHTML = `<h3 style="color: whitesmoke">${title2}</h3><p class="card-text" style="color: whitesmoke"> ${text2} <br>
        <strong>Retail Price on Release:  </strong>$${price2}</p>`;
        mainContainer2.appendChild(div2);

        let mainContainer3 = document.getElementById("game3");
        let title3 = myGames.mario_games[2].gameName;
        let price3 = myGames.mario_games[2].gamePrice;
        let text3 = myGames.mario_games[2].gameDescription;
        let url3 = myGames.mario_games[2].pircureUrl;
        let div3 = document.createElement("div");
        div3.innerHTML = `<h3 style="color: whitesmoke">${title3}</h3><p class="card-text" style="color: whitesmoke"> ${text3} <br>
        <strong>Retail Price on Release:  </strong>$${price3}</p>`;
        mainContainer3.appendChild(div3);

        let mainContainer4 = document.getElementById("game4");
        let title4 = myGames.mario_games[3].gameName;
        let price4 = myGames.mario_games[3].gamePrice;
        let text4 = myGames.mario_games[3].gameDescription;
        let url4 = myGames.mario_games[3].pircureUrl;
        let div4 = document.createElement("div");
        div4.innerHTML = `<h3 style="color: whitesmoke">${title4}</h3><p class="card-text" style="color: whitesmoke"> ${text4} <br>
        <strong>Retail Price on Release:  </strong>$${price4}</p>`;
        mainContainer4.appendChild(div4);

        let mainContainer5 = document.getElementById("game5");
        let title5 = myGames.mario_games[4].gameName;
        let price5 = myGames.mario_games[4].gamePrice;
        let text5 = myGames.mario_games[4].gameDescription;
        let url5 = myGames.mario_games[4].pircureUrl;
        let div5 = document.createElement("div");
        div5.innerHTML = `<h3 style="color: whitesmoke">${title5}</h3><p class="card-text" style="color: whitesmoke"> ${text5} <br>
        <strong>Retail Price on Release:  </strong>$${price5}</p>`;
        mainContainer5.appendChild(div5);

        let mainContainer6 = document.getElementById("game6");
        let title6 = myGames.mario_games[5].gameName;
        let price6 = myGames.mario_games[5].gamePrice;
        let text6 = myGames.mario_games[5].gameDescription;
        let url6 = myGames.mario_games[5].pircureUrl;
        let div6 = document.createElement("div");
        div6.innerHTML = `<h3 style="color: whitesmoke">${title6}</h3><p class="card-text" style="color: whitesmoke"> ${text6} <br>
        <strong>Retail Price on Release:  </strong>$${price6}</p>`;
        mainContainer6.appendChild(div6);
    //}
}
        
        


        