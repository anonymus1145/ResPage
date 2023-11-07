// HTML on-load event
// src/page-load.js

export default function onLoad(content) {

    //Create header
    let header = document.createElement("header");
    header.classList.add("grid", "grid-rows-1", "bg-stone-300", "h-28", "rounded-3xl");

    //Create upbar
    let upbar = document.createElement("div");
    upbar.id = "upbar";
    upbar.classList.add("flex", "my-8");
    //Attach upbar to header
    header.appendChild(upbar);

    //Create logo
    let logo = document.createElement("div");
    logo.id = "logo";
    logo.classList.add("flex", "gap-4", "place-items-center", "mx-auto", "ml-18");
    //Attach logo to upbar
    upbar.appendChild(logo);

    //Create symbol
    let symbol = document.createElement("span");
    symbol.classList.add("material-symbols-outlined", "style", "font-size", "color", "#a0690b");
    symbol.textContent = "lunch_dining";
    symbol.style.fontSize = "76px";
    //Attach symbol to logo
    logo.appendChild(symbol);

    //Create text
    let text = document.createElement("div");
    text.classList.add("text-center");
    //Attach text to logo
    logo.appendChild(text);

    let title = document.createElement("strong");
    title.classList.add("text-2xl", "font-mono", "italic", "text-yellow-600");
    title.textContent = "FlashTour";
    let paragraph = document.createElement("p");
    paragraph.classList.add("font-mono", "italic", "mt-2");
    paragraph.textContent = "Best Food In Town";
    //Attach title to text
    text.appendChild(title);
    text.appendChild(paragraph);

    //Jump over search bar for now
    //Create btn-list
    let btnList = document.createElement("btn-list");
    btnList.classList.add("flex", "gap-2", "text-lg", "ml-48");
    
    //Create buttons
    let home = document.createElement("button");
    home.classList.add("rounded-2xl", "w-24","h-14", "hover:bg-stone-500", "font-semibold");
    home.textContent = "Home";

    let menu = document.createElement("button");
    menu.classList.add("rounded-2xl", "w-24", "h-14","hover:bg-stone-500", "font-semibold");
    menu.textContent = "Menu";

    let contact = document.createElement("button");
    contact.classList.add("rounded-2xl", "w-24","h-14", "hover:bg-stone-500", "font-semibold");
    contact.textContent = "Contact";

    let about = document.createElement("button");
    about.classList.add("rounded-2xl", "w-24","h-14", "hover:bg-stone-500", "font-semibold");
    about.textContent = "About";

    btnList.appendChild(home);
    btnList.appendChild(menu);
    btnList.appendChild(contact);
    btnList.appendChild(about);

    logo.appendChild(btnList);


    //Create main
    let main = document.createElement("main");
    main.classList.add("rounded-3xl", "h-screen", "bg-center", "bg-cover");
    main.style.backgroundImage = "url('/img/kura-w-bulce.jpg')";


    //Create footer
    let footer = document.createElement("footer");
    
    let div1 = document.createElement("div");
    div1.classList.add("rounded-t-lg", "h-auto", "bg-stone-300");
    footer.appendChild(div1);

    let div2 = document.createElement("div");
    div2.classList.add("flex", "items-center", "justify-center", "py-4", "gap-2");
    div1.appendChild(div2);

    let copyright = document.createElement("p");
    copyright.classList.add("font-semibold");
    copyright.textContent = "Copyright © " + new Date().getFullYear() + " Anonymus1145";
    div2.appendChild(copyright);

    let github = document.createElement("i");
    github.classList.add("fa", "fa-github", "hover:text-yellow-600");
    github.style.fontSize = "36px";
    github.addEventListener("click", () => {
        window.open("https://github.com/Anonymus1145");
    })
    div2.appendChild(github);

    let linkedin = document.createElement("i");
    linkedin.classList.add("fa", "fa-linkedin-square", "hover:text-yellow-600");
    linkedin.style.fontSize = "36px";
    linkedin.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/daniel-besliu-440ab413a/");
    })
    div2.appendChild(linkedin);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}