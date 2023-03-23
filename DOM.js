   const list = document.querySelector("#list");

   const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  
  const ingredientsList = ingredients.map((item) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = `${item}`;
    return li;
  });
  list.append(...ingredientsList);
  console.log(ingredientsList);
//   
// 

    const todoList = document.querySelector("#todoList");

    const tasks = [
        "Понеділок - Прибрати квартиру",
        "Вівторок - Курси JS",
        "Середа - Футбол",
        "Четвер - Підготуватися до кр",
        "П'ятниця - Написати кр",
        "Субота - погуляти з друзями",
        "Неділя - Відпочити"
    ];

    for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];
		const listItem = `<li class="task">${task}</li>`;
		todoList.insertAdjacentHTML("beforeend", listItem);
	}
    console.log(tasks);
// 
// 

    const imagesContainer = document.querySelector("#imagesContainer");

const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.style.width = "300px";
    imgElement.style.height = "200px";
    imgElement.style.margin = "20px";
    imgElement.style.cursor = "pointer";
imagesContainer.appendChild(imgElement);
});
