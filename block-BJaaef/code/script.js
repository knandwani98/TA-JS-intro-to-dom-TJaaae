        // <div class= "card">
        //   <div class="card-header">
        //     <img  src="C:\Users\DELL\Documents\JavaScript\TA-JS-intro-to-dom-TJaaae\block-BJaaef\code\game-of-thrones-eddard-stark.jpg" alt="">
        //     <h2>Name</h2>
        //   </div>
        //   <p>akgkcjccdncncncancdc;kbqakbck.bakjbkjbakbckbb;c;kajbk;ebkbe</p>
        //   <button class="btn">Learn More!</button>
        // </div>

let root = document.body.querySelector(".root");
let allPeople = got.houses.map(house => house.people).forEach(arr => {
        arr.forEach(person => person.name);        
});

got.houses.forEach((house) => {
        let card = document.createElement("div");
        card.setAttribute ("class", "card");

        let cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header");
        
        let img = document.createElement("img");
        img.src = house.people.forEach(char => {
                char.image;
        });
        let h2 = document.createElement("h2");
        h2.innerText = house.people.

        cardHeader.append(img, h2);
        
        let p = document.createElement("p");
        p.innerText = house.people.forEach(char => {
                char.description;
        });
        let btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        btn.innerText = "Learn More!"
        btn.href = house.people.forEach(char => {
                char.wikiLink;
        });

        card.append (cardHeader, p, btn);
        root.append(card);
})