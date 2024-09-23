export function menuHeader () {
    const menuHeadingContainer = document.createElement("div");
    menuHeadingContainer.className= "menu-header";
    const menuTitle = document.createElement("h1");
    menuHeadingContainer.appendChild(menuTitle);

    return menuHeadingContainer;
}

export function beverage () {
    const beveragesContainer = document.createElement("div");
    beveragesContainer.className= "beverages-container";
    const beveragesTitle = document.createElement("h1");
    beveragesTitle.textContent = "Beverages";
    const beveragesList = document.createElement("ul");
    beveragesList.className = "beverages-list";
    beveragesContainer.appendChild(beveragesTitle);
    beveragesContainer.appendChild(beveragesList);

    const beverages = [
        {
            name: "Fresh Orange Juice",
            description: "Made from 100% freshly squeezed oranges, providing a vitamin-packed boost to your day.",
            price: 3
        }, {
            name: "Apple & Carrot Juice",
            description: "A healthy, naturally sweet combination of crisp apples and fresh carrots, packed with" +
                " nutrients.",
            price: 4
        }, {
            name: "Chamomile & Honey Herbal Tea",
            description: "A soothing blend of chamomile flowers and natural honey, perfect for relaxation.",
            price: 5
        }
    ]

    beverages.forEach(beverage => {
        const beverageItem = document.createElement("li");
        const beverageName = document.createElement("h3");
        beverageName.textContent = beverage.name;
        const beverageDescription = document.createElement("p");
        beverageDescription.textContent = beverage.description;
        const beveragePrice = document.createElement("h4");
        beveragePrice.textContent = `$${beverage.price}`;
        beveragesList.appendChild(beverageItem);
        beverageItem.appendChild(beverageName);
        beverageItem.appendChild(beverageDescription);
        beverageItem.appendChild(beveragePrice);
    });

    return beveragesContainer;
}

export function side () {
    const sidesContainer = document.createElement("div");
    sidesContainer.className= "sides-container";
    const sidesTitle = document.createElement("h1");
    sidesTitle.textContent = "Sides";
    const sidesList = document.createElement("ul");
    sidesList.className = "beverages-list";
    sidesContainer.appendChild(sidesTitle);
    sidesContainer.appendChild(sidesList);

    const sides = [
        {
            name: "Cheesy Nachos",
            description: "Crispy tortilla chips topped with melted cheese, jalapeños, and a side of salsa and guacamole.",
            price: 5
        }, {
            name: "Mini Veggie Spring Rolls",
            description: "Crispy vegetable spring rolls served with a sweet chili dipping sauce.",
            price: 7
        }, {
            name: "Falafel Bites",
            description: "Crispy on the outside, tender on the inside, these falafel bites are served with a tangy" +
                " tahini sauce.",
            price: 6
        }
    ]

    sides.forEach(side => {
        const sideItem = document.createElement("li");
        const sideName = document.createElement("h3");
        sideName.textContent = side.name;
        const sideDescription = document.createElement("p");
        sideDescription.textContent = side.description;
        const sidePrice = document.createElement("h4");
        sidePrice.textContent = `$${side.price}`;
        sidesList.appendChild(sideItem);
        sideItem.appendChild(sideName);
        sideItem.appendChild(sideDescription);
        sideItem.appendChild(sidePrice);
    });

    return sidesContainer;
}

export function mainDish () {
    const mainDishesContainer = document.createElement("div");
    mainDishesContainer.className= "sides-container";
    const mainDishesTitle = document.createElement("h1");
    mainDishesTitle.textContent = "Main Dishes";
    const  mainDishesList = document.createElement("ul");
    mainDishesList.className = "beverages-list";
    mainDishesContainer.appendChild( mainDishesTitle);
    mainDishesContainer.appendChild( mainDishesList);

    const  mainDishes = [
        {
            name: "Grilled Chicken Shawarma Wrap",
            description: "Juicy, marinated chicken grilled to perfection and wrapped in warm flatbread with fresh" +
                " veggies and a creamy garlic sauce",
            price: 10
        }, {
            name: "Beef Burger",
            description: "A tender, halal beef patty topped with lettuce, tomato, and cheese, served on a soft bun" +
                " with a side of fries.",
            price: 13
        }, {
            name: "Chicken Caesar Salad",
            description: "Grilled chicken breast served over crisp romaine lettuce, tossed in a creamy Caesar" +
                " dressing with croutons and parmesan.",
            price: 11
        }, {
            name: "Falafel Wrap",
            description: "Crispy falafel balls wrapped in a warm pita with hummus, fresh vegetables, and a drizzle" +
                " of tahini sauce.",
            price: 9
        }, {
            name: "Spicy Grilled Salmon",
            description: "Fresh salmon fillet seasoned with a spicy blend of herbs, grilled to perfection, and" +
                " served with a side of steamed vegetables.",
            price: 16
        }, {
            name: "Veggie Quesadilla",
            description: "A warm tortilla filled with melted cheese, grilled peppers, onions, and mushrooms, served" +
                " with salsa and sour cream on the side.",
            price: 10
        }, {
            name: "Chicken Alfredo Pasta",
            description: "Tender grilled chicken tossed in a rich and creamy Alfredo sauce, served over fettuccine" +
                " and topped with fresh parsley.",
            price: 14
        }
    ]

    mainDishes.forEach( mainDish => {
        const  mainDishItem = document.createElement("li");
        const mainDishName = document.createElement("h3");
        mainDishName.textContent = mainDish.name;
        const mainDishDescription = document.createElement("p");
        mainDishDescription.textContent = mainDish.description;
        const mainDishPrice = document.createElement("h4");
        mainDishPrice.textContent = `$${mainDish.price}`;
        mainDishesList.appendChild(mainDishItem);
        mainDishItem.appendChild(mainDishName);
        mainDishItem.appendChild(mainDishDescription);
        mainDishItem.appendChild(mainDishPrice);
    });

    return mainDishesContainer;
}