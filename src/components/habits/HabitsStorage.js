export const loadHabits = () => {
    const habits = JSON.parse(localStorage.getItem("habits"));
    return habits ? habits : [];
  };
  
  export const loadEvents = () => {
    const events = JSON.parse(localStorage.getItem("events"));
    return events ? events : [];
  };
  
  export const saveHabits = (habits) => {
    localStorage.setItem("habits", JSON.stringify(habits));
  };
  
  export const saveEvents = (events) => {
    localStorage.setItem("events", JSON.stringify(events));
  };
  
  export const clearStorage = () => {
    localStorage.removeItem("habits");
    localStorage.removeItem("events");
  };
  