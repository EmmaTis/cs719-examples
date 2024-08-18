const addButton = document.querySelector("#addButton");
const numberList = document.querySelector("#numberList");

/**
 * This is using the arrow function syntax to define an anonymous function which will be called
 * when the button is clicked. See:
 *
 * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
 */
addButton.addEventListener("click", () => {
  // Generate a random number between 0 and 99
  const randomNumber = Math.floor(Math.random() * 100);
  numberList.innerHTML = "";
  // numberList.innerHTML = "";：这行代码会清空 #numberList 的所有内容。这样，页面上的所有 <li> 元素都会被删除。

  // Create a new <li> and set its innerHTML
  const listItem = document.createElement("li");
  listItem.innerHTML = `Random Number: ${randomNumber}`;

  // Add the new <li> to the #numberList
  numberList.appendChild(listItem);
});
