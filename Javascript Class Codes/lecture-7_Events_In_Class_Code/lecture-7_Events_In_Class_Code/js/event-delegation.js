document.addEventListener("DOMContentLoaded", function () {
  const shoppingList = document.getElementById("shoppingList");

  shoppingList.addEventListener("click", function (e) {
    e.preventDefault();  // Prevents navigation
    alert("Item clicked, but navigation prevented!");
    e.target.closest("li").remove();
  });
});
