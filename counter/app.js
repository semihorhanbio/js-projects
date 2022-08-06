let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")) {
            count++;
        } else if(styles.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }
        
        //change color of the value variable
        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});