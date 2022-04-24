class Profile {
  create = (active) => {
    // Get container
    const appContainer = document.querySelector(".app");
    
    // Create elements
      // Containers
    const profileContainer = document.createElement("div");
    const profileHeader = document.createElement("div");
    const profileOption = document.createElement("div");
      
      // Elements
    const profilePicture = document.createElement("img");
    const profileLabel = document.createElement("h3");
    const profileName = document.createElement("h4");

    const dailyButton = document.createElement("a");
    const weeklyButton = document.createElement("a");
    const monthlyButton = document.createElement("a");

    // Assign attributes
    profileContainer.classList.add("flex");
    profileContainer.classList.add("flex-column");
    profileContainer.classList.add("profile");

    profileHeader.classList.add("flex");
    profileHeader.classList.add("flex-column");
    profileHeader.classList.add("profile-header");

    profileOption.classList.add("flex");
    profileOption.classList.add("flex-column");
    profileOption.classList.add("profile-option");
    profileOption.classList.add("bg-primary");

    profilePicture.classList.add("profile-picture");
    profileLabel.classList.add("profile-label");
    profileName.classList.add("profile-name");

    dailyButton.classList.add("daily-button");
    weeklyButton.classList.add("weekly-button");
    monthlyButton.classList.add("monthly-button");

    switch (active) {
      case "daily":
        dailyButton.classList.add("active");
        break;
      case "weekly":
        weeklyButton.classList.add("active");
        break;
      case "monthly":
        monthlyButton.classList.add("active");
        break;
      default:
        break;
    }

    dailyButton.target = "_blank";
    weeklyButton.target = "_blank";
    monthlyButton.target = "_blank";

    // Assign values
    profilePicture.src = "./IMG/profile.jpg";
    profileLabel.innerHTML = "Report for";
    profileName.innerHTML = "Heath Andrew Ledger";

    dailyButton.innerHTML = "Daily";
    weeklyButton.innerHTML = "Weekly";
    monthlyButton.innerHTML = "Monthly";

    // Append elements
    profileHeader.appendChild(profilePicture);
    profileHeader.appendChild(profileLabel);
    profileHeader.appendChild(profileName);

    profileOption.appendChild(dailyButton);
    profileOption.appendChild(weeklyButton);
    profileOption.appendChild(monthlyButton);

    profileContainer.appendChild(profileHeader);
    profileContainer.appendChild(profileOption);

    appContainer.appendChild(profileContainer);
  };
}

export { Profile };
