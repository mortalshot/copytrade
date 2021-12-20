// LICENSE-CARD HEADER HEIGHT START
let licenseCardHeading = document.querySelectorAll('.license-card__heading');

if (licenseCardHeading.length > 0) {
    let heightAttr = 0;

    for (let index = 0; index < licenseCardHeading.length; index++) {
        const element = licenseCardHeading[index];

        if (heightAttr < element.clientHeight) {
            heightAttr = element.clientHeight;
        }
        
        element.style.height = heightAttr + 'px';
    }
}
// LICENSE-CARD HEADER HEIGHT END
