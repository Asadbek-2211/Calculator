const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");
const button_4 = document.getElementById("button_4");
const button_5 = document.getElementById("button_5");
const button_6 = document.getElementById("button_6");
const button_7 = document.getElementById("button_7");
const button_8 = document.getElementById("button_8");
const button_9 = document.getElementById("button_9");
const button_10 = document.getElementById("button_10");
const button_11 = document.getElementById("button_11");
const button_12 = document.getElementById("button_12");
const button_13 = document.getElementById("button_13");
const button_14 = document.getElementById("button_14");
const button_15 = document.getElementById("button_15");
const button_16 = document.getElementById("button_16");
const button_17 = document.getElementById("button_17");
const button_18 = document.getElementById("button_18");
const button_19 = document.getElementById("button_19");
const div = document.getElementById("div");

const buttons = document.querySelectorAll('button')

button_13.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_14.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_15.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_9.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});
button_10.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_11.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_5.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_6.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_7.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});

button_17.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});


button_18.addEventListener("click", (e) => {
  div.textContent += e.target.textContent;
});
button_1.addEventListener("click", (e) => {
    div.textContent = '';
  });
button_2.addEventListener("click", (e) => {
div.textContent += e.target.textContent;
});
button_3.addEventListener("click", (e) => {
div.textContent += e.target.textContent;
});
button_4.addEventListener("click", (e) => {
div.textContent += e.target.textContent;
});
button_8.addEventListener("click", (e) => {
div.textContent += e.target.textContent;
});
button_12.addEventListener("click", (e) => {
div.textContent += e.target.textContent;
});
button_16.addEventListener("click", (e) => {
div.textContent += e.target.textContent;
});
   
button_19.addEventListener(("click"), (e) => {
  console.log(eval(div.textContent));
  div.textContent = eval(div.textContent);

})


   