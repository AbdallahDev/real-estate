import { estates } from "/properties/estate-data.js";
import { defaultEstate } from "/properties/estate-default-data.js";

const listEl = document.getElementById('list')

function renderEstatesHtml(estateData = [defaultEstate]) {
    return estateData.map(estate => {
        const { image, location: loc, price, description: desc, area } = estate

        return `
                <section class="card">
                    <img src="images/profiles/${image}" alt="${desc}" class="image">
                    <div class="details">
                        <div class="location bold-details">${loc}</div>
                        <div class="price bold-details">${price} JOD</div>
                        <div class="description">${desc}</div>
                        <div class="area bold-details">
                            ${calculateArea(area)} m<sup>2</sup>
                        </div>
                    </div>
                </section>
                `}).join("")
}

function calculateArea(area) {
    return area.reduce((acc, curVal) => acc + curVal, 0)
}

listEl.innerHTML = renderEstatesHtml()