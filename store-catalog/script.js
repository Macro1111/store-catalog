document.getElementById("searchInput").addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const text = product.textContent.toLowerCase();
    product.style.display = text.includes(query) ? "block" : "none";
  });
});
