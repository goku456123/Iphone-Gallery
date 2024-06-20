const iphones = [
    {
        name: "IPhone",
        camera: "2 MP",
        display: "3.5 inch",
        processor: "412 MHz ARM 11",
        battery: "1400 mAh",
        image: "iphone1.jpg"
    },
    {
        name: "IPhone 3G",
        camera: "2 MP",
        display: "3.5 inch",
        processor: "412 MHz ARM 11",
        battery: "1220 mAh",
        image: "iphone3g.jpg"
    },
    {
        name: "IPhone 4",
        camera: "5 MP",
        display: "3.5 inch",
        processor: "1 GHz Cortex-A8",
        battery: "1420 mAh",
        image: "iphone4.jpg"
    },
    {
        name: "IPhone 5",
        camera: "8 MP",
        display: "4 inch",
        processor: "1.3 GHz Dual-Core Swift",
        battery: "1440 mAh",
        image: "iphone5.jpg"
    },
    {
        name: "IPhone 6",
        camera: "8 MP",
        display: "4.7 inch",
        processor: "1.4 GHz Dual-Core Cyclone",
        battery: "1810 mAh",
        image: "iphone6.jpg"
    },
    {
        name: "IPhone 7",
        camera: "12 MP",
        display: "4.7 inch",
        processor: "2.34 GHz Quad-Core Fusion",
        battery: "1960 mAh",
        image: "iphone7.jpg"
    },
    {
        name: "IPhone 8",
        camera: "12 MP",
        display: "4.7 inch",
        processor: "2.39 GHz Hexa-Core Fusion",
        battery: "1821 mAh",
        image: "iphone8.jpg"
    },
    {
        name: "IPhone X",
        camera: "12 MP Dual",
        display: "5.8 inch OLED",
        processor: "2.39 GHz Hexa-Core Fusion",
        battery: "2716 mAh",
        image: "iphonex.jpg"
    },
    {
        name: "IPhone 11",
        camera: "12 MP Dual",
        display: "6.1 inch Liquid Retina",
        processor: "2.65 GHz Hexa-Core Fusion",
        battery: "3110 mAh",
        image: "iphone11.jpg"
    },
    {
        name: "IPhone 12",
        camera: "12 MP Dual",
        display: "6.1 inch Super Retina XDR",
        processor: "3.1 GHz Hexa-Core Fusion",
        battery: "2815 mAh",
        image: "iphone12.jpg"
    },
    {
        name: "IPhone 13",
        camera: "12 MP Dual",
        display: "6.1 inch Super Retina XDR",
        processor: "3.1 GHz Hexa-Core Fusion",
        battery: "3240 mAh",
        image: "iphone13.jpg"
    },
    {
        name: "IPhone 14",
        camera: "12 MP Dual",
        display: "6.1 inch Super Retina XDR",
        processor: "3.2 GHz Hexa-Core Fusion",
        battery: "3279 mAh",
        image: "iphone14.jpg"
    },
    {
        name: "IPhone 15",
        camera: "48 MP Triple",
        display: "6.1 inch Super Retina XDR",
        processor: "3.46 GHz Hexa-Core Fusion",
        battery: "3500 mAh",
        image: "iphone15.jpg"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const iphoneList = document.getElementById("iphone-list");
    const homeContent = document.getElementById("home-content");
    const homeBtn = document.getElementById("home-btn");
    const iphonesBtn = document.getElementById("iphones-btn");

    // Function to display iPhone list
    function displayIphones() {
        // Clear home content if it's visible
        homeContent.style.display = "none";

        // Show the iPhone list
        iphoneList.style.display = "grid";
    }

    // Populate iPhone list
    iphones.forEach(iphone => {
        const iphoneCard = document.createElement("div");
        iphoneCard.classList.add("iphone-card");

        iphoneCard.innerHTML = `
            <img src="${iphone.image}" alt="${iphone.name}">
            <h3>${iphone.name}</h3>
            <p><strong>Camera:</strong> ${iphone.camera}</p>
            <p><strong>Display:</strong> ${iphone.display}</p>
            <p><strong>Processor:</strong> ${iphone.processor}</p>
            <p><strong>Battery:</strong> ${iphone.battery}</p>
        `;

        iphoneList.appendChild(iphoneCard);
    });

    // Event listeners for buttons
    homeBtn.addEventListener("click", () => {
        homeContent.style.display = "flex";
        iphoneList.style.display = "none";
    });

    iphonesBtn.addEventListener("click", displayIphones);
});

