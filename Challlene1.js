const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`12/16/${currentYear}`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`04/01/${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`12/26/${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`01/01/${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`08/09/${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`09/24/${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`12/25/${currentYear} 00:00`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`06/16/${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`03/21/${currentYear}`)
    },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

const copied = { ...holidays[christmas] }; // Create a shallow copy of the holiday
copied.name = 'X-mas';
copied.date.setHours(0, 0, 0, 0); // Set time to midnight
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);
if (isEarlier) {
    holidays[christmas] = copied; // Apply changes to holidays object
}

console.log('ID change:', holidays[christmas].id !== copied.id ? copied.id : false);
console.log('Name change:', holidays[christmas].name !== copied.name ? copied.name : false);
console.log('Date change:', holidays[christmas].date !== copied.date ? copied.date.toLocaleDateString() : false);

const firstHolidayTimestamp = Math.min(
    ...Object.values(holidays).map(holiday => holiday.date.getTime())
);

const lastHolidayTimestamp = Math.max(
    ...Object.values(holidays).map(holiday => holiday.date.getTime())
);

const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

const formatDateString = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

console.log(formatDateString(firstHolidayDate));
console.log(formatDateString(lastHolidayDate));

const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHolidayDate = holidays[randomHolidayIndex].date;
console.log(formatDateString(randomHolidayDate));
