import { database } from 'database.js'

const locationsArray = database

export const displayLocations = () => {

let htmlString = '<article class="locationsList">'

    for (const place of locationsArray) {

        htmlString += `<section class="location card">
            <div class="location__name">${place.name}</div>
            <div class="location__address">${place.address}</div>
            <div class="location__phone">${place.phone}</div>
            <div class="location__mondayHours">'MONDAY: ${place.monday}'</div>
            <div class="location__weekdayHours">'TUESDAY-FRIDAY: ${place.week}'</div>
            <div class="location__saturdayHours">'SATURDAY: ${place.saturday}'</div>
            <div class="location__sundayHours">'SUNDAY: ${place.sunday}'</div>
        </section>
`
    }
    
    htmlString += `</article>`

    return htmlString
}