class Activity {
  create = (activity, active) => {
    // Get container
    const appContainer = document.querySelector(".app");

    // Create elements
    // Containers
    const activityElement = document.createElement("div");
    const activityHeader = document.createElement("div");
    const activityBody = document.createElement("div");
    const activityTitle = document.createElement("div");

    // Elements
    const activityImage = document.createElement("img");
    const activityName = document.createElement("p");
    const activityOptions = document.createElement("a");
    const activityTime = document.createElement("h4");
    const activityRecent = document.createElement("p");

    // Assign attributes
    activityElement.classList.add("activity");
    activityElement.classList.add("flex");
    activityElement.classList.add("flex-column");

    activityHeader.classList.add("activity-header");
    activityHeader.classList.add(
      activity.title.toLowerCase().replace(" ", "-")
    );
    activityHeader.classList.add("flex");
    activityHeader.classList.add("flex-column");

    activityBody.classList.add("activity-body");
    activityBody.classList.add("bg-primary");
    activityBody.classList.add("flex");
    activityBody.classList.add("flex-column");

    activityTitle.classList.add("activity-title");
    activityTitle.classList.add("flex");
    activityTitle.classList.add("flex-row");

    // Assign values
    activityImage.src = `./IMG/${activity.title}.png`;
    activityName.innerHTML = activity.title;
    activityOptions.innerHTML = "...";
    activityTime.innerHTML = activity.timeframes[active].current + "hrs";
    activityRecent.innerHTML = `Last Week - ${activity.timeframes[active].previous}hrs`;

    // Append elements
    activityHeader.appendChild(activityImage);

    activityTitle.appendChild(activityName);
    activityTitle.appendChild(activityOptions);

    activityBody.appendChild(activityTitle);
    activityBody.appendChild(activityTime);
    activityBody.appendChild(activityRecent);

    activityElement.appendChild(activityHeader);
    activityElement.appendChild(activityBody);

    appContainer.appendChild(activityElement);
  };
}

export { Activity };
