class CalendarEvent {
  name;
  startDate;
  endDate;

  constructor(name, start, end) {
    this.name = name;
    this.startDate = start;
    this.endDate = end;
  }
  get timeRange() {
    return `${this.startDate.toLocaleString(
      "pt"
    )} - ${this.endDate.toLocaleString("pt")}`;
  }
  set start(dateString) {
    const convertToDate = new Date(dateString);

    if (convertToDate > this.endDate) {
      throw new Error("data inicial não pode ser após final");
    }
    this.startDate = new Date(dateString);
  }
  set end(dateString) {
    const convertToDate = new Date(dateString);

    if (convertToDate < this.endDate) {
      throw new Error("data final não pode ser antes da incial");
    }

    this.endDate = new Date(dateString);
  }

  postpone(minutes) {
    const msMinutes = 1000 * 60 * minutes;
    const msStartDate = this.startDate.getTime() + msMinutes;
    const msEndDate = this.endDate.getTime() + msMinutes;
    this.startDate = new Date(msStartDate);
    this.endDate = new Date(msEndDate);
  }
}

const msTenSeconds = 1000 * 10;
const msTenMinutes = 1000 * 60 * 10;

const currentDate = new Date();

const myEvent = new CalendarEvent(
  "festa de aniversário",
  new Date(msTenSeconds),
  new Date(msTenMinutes)
);

const events = [myEvent];
console.log(myEvent);

setInterval(() => {
  const currentDate = new Date();
  const eventRunning = events.find(e);
  events.some((e) => currentDate >= e.startDate && currentDate <= e.endDate);

  if (eventRunning) console.log("Tens um evento a decorrer");
}, 1000);
