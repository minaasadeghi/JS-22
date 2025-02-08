const numba = document.getElementById("numba");
const wisdom = document.getElementById("wisdom");
const magicBtn = document.getElementById("magic-btn");

async function getBrainJuice() {
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        numba.textContent = data.slip.id;
        wisdom.textContent = `"${data.slip.advice}"`;
    } catch (oops) {
        wisdom.textContent = "Something went wrong! Try again.";
        console.error("Error fetching wisdom:", oops);
    }
}

magicBtn.addEventListener("click", getBrainJuice);

getBrainJuice();
