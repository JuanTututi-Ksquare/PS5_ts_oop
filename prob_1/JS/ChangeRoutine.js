import { Activity } from "./Activity.js";

class ChangeRoutine {
  change = (routine, evtButton) => {
    const activityComponent = new Activity();
    const activities = document.querySelectorAll(".activity");
    const activeButton = document.querySelector(".active");
    const fetchData = async () => {
      const res = await fetch(
        "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
      );
      const data = await res.json();
      return data;
    };

    activeButton.classList.remove("active");
    evtButton.classList.add("active");

    activities.forEach((element) => {
      element.remove();
    });

    fetchData().then((result) => {
      result.forEach((activity) => {
        activityComponent.create(activity, routine);
      });
    });
  };
}

export { ChangeRoutine };
