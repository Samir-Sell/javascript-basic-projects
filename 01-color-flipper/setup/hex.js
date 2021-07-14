const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get button
const button = document.getElementById("btn")

// Get background color of container
const color = document.querySelector(".color");



button.addEventListener("click", function(){
    random_hex = random().join('');
    console.log(random_hex)
    document.body.style.backgroundColor = random_hex
    button.textContent = random_hex
    color.textContent = random_hex
})

function random(){
    let hex_pattern = ["#"]
    for (let i= 0; i <=5; i++) {
        var value = hex[Math.floor(Math.random() * hex.length)];
        
        hex_pattern.push(value);
    }
    return hex_pattern;
}