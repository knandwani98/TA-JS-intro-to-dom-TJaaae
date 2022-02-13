        // <div class= "card">
        //   <div class="card-header">
        //     <img  src="C:\Users\DELL\Documents\JavaScript\TA-JS-intro-to-dom-TJaaae\block-BJaaef\code\game-of-thrones-eddard-stark.jpg" alt="">
        //     <h2>Name</h2>
        //   </div>
        //   <p>akgkcjccdncncncancdc;kbqakbck.bakjbkjbakbckbb;c;kajbk;ebkbe</p>
        //   <button class="btn">Learn More!</button>
        // </div>

let root = document.body.querySelector(".root");
let allPeople = got.houses.reduce((acc, cv) => {
        acc = acc.concat(cv.people);
        return acc;
}, []);

allPeople.forEach((char) => {
        let card = document.createElement("div");
        card.setAttribute ("class", "card");

        let cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header");
        
        let img = document.createElement("img");
        img.src = char.image;

        let h2 = document.createElement("h2");
        h2.innerText = char.name;

        cardHeader.append(img, h2);
        
        let p = document.createElement("p");
        p.innerText = char.description;

        let btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        btn.innerText = "Learn More!"
        btn.href = char.wikiLink;
        
        card.append (cardHeader, p, btn);
        root.append(card);
})