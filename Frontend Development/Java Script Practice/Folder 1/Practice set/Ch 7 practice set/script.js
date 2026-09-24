// Q # 1
document.getElementsByTagName("nav")[0].style.background = "blue"
// document.getElementsByTagName('ul')[0].firstElementChild.style.color = "red"

document.getElementsByTagName("ul")[0].firstElementChild.style.color = "yellow"
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "yellow"

Array.from(document.querySelectorAll("li")).forEach(co => co.style.background = "cyan")