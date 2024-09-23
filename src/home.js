export function homeHeader () {
    const homeHeading = document.createElement("div");
    homeHeading.className = "home-heading-content";
    const homeTitle = document.createElement("h1");
    homeTitle.className = "home-title";
    homeTitle.textContent = "Yuya's Breakfast Bar";
    homeHeading.appendChild(homeTitle);

    return homeHeading;
}

export function cafeDescription () {
    const cafeDescriptionContainer = document.createElement("div");
    cafeDescriptionContainer.className = "description-content";
    const cafeDescriptionContent = document.createElement("p");
    cafeDescriptionContent.className = "home-description";
    cafeDescriptionContent.textContent = `Welcome to Yuya's Breakfast Bar, where fresh flavors and a cozy ambiance come together! Enjoy a delicious selection of breakfast favorites made from high-quality, locally sourced ingredients. Whether you're craving a classic meal or something new, our menu offers a variety of dishes to start your day right. Perfect for early risers, brunch lovers, and coffee enthusiasts, Yuya's Breakfast Bar is your go-to spot for a satisfying and delightful dining experience`;
    cafeDescriptionContainer.appendChild(cafeDescriptionContent);

    return cafeDescriptionContainer;
}

export function workingHours () {
    const workingHourContainer = document.createElement("div");
    workingHourContainer.className = "working-hour-container";
    const workingHourHeading = document.createElement("h3");
    workingHourHeading.textContent = "Working Hours";
    const hoursList = document.createElement("ul");
    hoursList.className = "hours-list";
    workingHourContainer.appendChild(workingHourHeading)
    workingHourContainer.appendChild(hoursList);

    const hours = [
        { day: "Sunday", time: "8am - 8pm" },
        { day: "Monday", time: "6am - 6pm" },
        { day: "Tuesday", time: "6am - 6pm" },
        { day: "Wednesday", time: "6am - 6pm" },
        { day: "Thursday", time: "6am - 10pm" },
        { day: "Friday", time: "6am - 10pm" },
        { day: "Saturday", time: "8am - 10pm" }
    ];

    hours.forEach (hour => {
        const listItem = document.createElement("li");
        listItem.textContent = `${hour.day}: ${hour.time}`;
        hoursList.append(listItem);
    });

    return workingHourContainer;
}

export function cafeLocation () {
    const cafeLocationContainer = document.createElement("div");
    cafeLocationContainer.className = "location-container";
    const cafeLocationHeading = document.createElement("h3");
    cafeLocationHeading.textContent = "Location";
    const cafeLocationDescription = document.createElement("p");
    cafeLocationDescription.textContent = "123 Forest Drive, Forestville, Maine";
    cafeLocationContainer.appendChild(cafeLocationHeading)
    cafeLocationContainer.appendChild(cafeLocationDescription);

    return cafeLocationContainer;
}
