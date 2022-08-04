const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const code = createHexCode();
    document.body.style.backgroundColor = code;
    color.textContent = code;
})

const createHexCode = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * hex.length);
        hexCode += hex[randomNumber];
    }
    return hexCode;
}
