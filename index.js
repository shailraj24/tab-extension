// let myLeads = ["shailraj", "mitraj" , "harshraj"]
let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

// for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }

function renderLeads() {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItem += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
         ${myLeads[i]}
        </a>
    </li>
        `;
  }
  ulEl.innerHTML = listItem;
}
