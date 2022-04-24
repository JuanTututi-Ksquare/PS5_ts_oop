import { Activity } from "./Activity.js";
import { ChangeRoutine } from "./ChangeRoutine.js";
import { Profile } from "./Profile.js";

const fetchData = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  );
  const data = await res.json();
  return data;
};

window.onload = () => {
  const active = "daily";
  const profileComponent = new Profile();
  const activityComponent = new Activity();
  
  fetchData().then(result => {
    profileComponent.create(active);
    result.forEach((activity) => {
      activityComponent.create(activity, active); 
    });
    evtListener();
  });
  
};

const evtListener = () => {
  const dailyButton = document.querySelector(".daily-button");
  const weeklyButton = document.querySelector(".weekly-button");
  const monthlyButton = document.querySelector(".monthly-button");
  const routineObj = new ChangeRoutine();

  dailyButton.addEventListener("click", (evt) => {
    routineObj.change("daily", evt.target);
  });

  weeklyButton.addEventListener("click", (evt) => {
    routineObj.change("weekly", evt.target);
  });

  monthlyButton.addEventListener("click", (evt) => {
    routineObj.change("monthly", evt.target);
  });
}


