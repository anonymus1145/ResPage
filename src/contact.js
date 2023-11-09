export default function contact(content) {
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
    btnList.id = "btn-list";
    
    //Create buttons
    let home = document.createElement("button");
    home.classList.add("rounded-2xl", "w-24","h-14", "hover:bg-stone-500", "font-semibold");
    home.id = "home";
    home.textContent = "Home";

    let menu = document.createElement("button");
    menu.classList.add("rounded-2xl", "w-24", "h-14","hover:bg-stone-500", "font-semibold");
    menu.id = "menu";
    menu.textContent = "Menu";

    let contact = document.createElement("button");
    contact.classList.add("rounded-2xl", "w-24","h-14", "hover:bg-stone-500", "font-semibold");
    contact.id = "contact";
    contact.textContent = "Contact";

    btnList.appendChild(home);
    btnList.appendChild(menu);
    btnList.appendChild(contact);

    logo.appendChild(btnList);


    //Create main
    let main = document.createElement("main");
    main.classList.add("rounded-3xl", "h-screen", "bg-center", "bg-cover");
    
    let form = document.createElement("form");
    form.classList.add("mx-auto", "max-w-2xl", "px-4", "sm:px-6", "lg:max-w-7xl", "lg:px-8", "mt-16");
    main.appendChild(form);

    let element1 = document.createElement("div");
    element1.classList.add("space-y-12");
    form.appendChild(element1);

    let element2 = document.createElement("div");
    element2.classList.add("border-b", "border-gray-900/10", "pb-12");
    element1.appendChild(element2);

    let h2 = document.createElement("h2");
    h2.classList.add("text-base", "font-semibold", "leading-7" ,"text-gray-900");
    h2.textContent = "Contact Us";
    element2.appendChild(h2);

    let element3 = document.createElement("div");
    element3.classList.add("mt-10", "grid", "grid-cols-1", "gap-x-6", "gap-y-8", "sm:grid-cols-6");
    element1.appendChild(element3);

    let element3_1 = document.createElement("div");
    element3_1.classList.add("col-span-full");
    element3.appendChild(element3_1);

    let label = document.createElement("label");
    label.classList.add("block", "text-sm", "font-medium", "leading-6", "text-gray-900");
    label.setAttribute("for", "about");
    label.textContent = "About";
    element3_1.appendChild(label);

    let mt_2 = document.createElement("div");
    mt_2.classList.add("mt-2");
    element3_1.appendChild(mt_2);

    let textarea = document.createElement("textarea");
    textarea.classList.add("block", "w-full", "rounded-md", "border-0", "border-gray-300", "py-1.5", "text-gray-900", "shadow-sm", "ring-1", "ring-inset", "ring-gray-300", "focus:ring-2", "focus:ring-inset", "focus:ring-indigo-600", "sm:text-sm", "sm:leading-6");
    textarea.setAttribute("id", "about");
    textarea.setAttribute("rows", "3");
    textarea.setAttribute("name", "about");
    mt_2.appendChild(textarea);

    let p = document.createElement("p");
    p.classList.add("mt-3", "text-sm", "text-grey-600", "leading-6");
    p.textContent = "Write a few sentences to contact us.";
    element3_1.appendChild(p);

    let elementBtn = document.createElement("div");
    elementBtn.classList.add("mt-6", "flex", "justify-center", "gap-x-6","items-center");
    main.appendChild(elementBtn);

    let btnCancel = document.createElement("button");
    btnCancel.classList.add("font-semibold", "text-sm", "leading-6", "text-gray-900", "hover:text-red-600", "hover:underline");
    btnCancel.textContent = "Cancel";
    btnCancel.setAttribute("type", "button");
    elementBtn.appendChild(btnCancel);

    let btnSubmit = document.createElement("button");
    btnSubmit.classList.add("rounded-md", "bg-indigo-600", "px-3" ,"py-2", "text-sm", "font-semibold", "text-black" ,"shadow-sm", "hover:bg-indigo-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600");
    btnSubmit.textContent = "Submit";
    btnSubmit.setAttribute("type", "submit");
    elementBtn.appendChild(btnSubmit);

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