let API_URL = "https://cat-fact.herokuapp.com/facts";

document.getElementById("getFatcs").addEventListener("click", async (e) => {
  try {
    const data = await fetch(API_URL);

    if (data.status === 200) {
      const result = await data.json();
      console.log(result);

      let cards = document.getElementById("userCards");
      cards.innerHTML = "";
      let cardData = "";

      result.forEach((item, index) => {
        cardData += `<div class="col-md-4 mt-3">
            <div class="card">
            <div class="card-body">
            <p>${item.text}</p>
            <h6 class="text-center">Created AT</h6>
            <p class="text-center">${new Date(item.createdAt).toLocaleString()}</p> 
            </div> 
            </div>
        </div>`;
      });

      cards.innerHTML = cardData;
    }
  } catch (e) {
    console.log(e);
  }
});
