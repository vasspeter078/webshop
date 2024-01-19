import Iphone15 from './iphone15.png';
import SamsungS23 from './samsungs23.png';
import XiaomiRedmiNote12 from './xiaomiredminote12.png';
import SamsungGalaxyA54 from './samsunggalaxya54.png';
import MacBookAir13 from './macbookair13.png';
import ASUSROGStrix17 from './asusrogstrixg17.png';
import DellInspiron3511 from './dellinspiron3511.png';
import AirPods2 from './airpods2.png';
import SonyWH1000XM4 from './sonywh-1000xm4.png';

export const data = [
    {
        id: 1,
        name: "Iphone 15",
        price: 400000,
        category: "mobile",
        amount: 400,
        image: Iphone15
    },
    {
        id: 2,
        name: "Samsung S23",
        price: 350000,
        category: "mobile",
        amount: 300,
        image: SamsungS23
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note 12",
        price: 100000,
        category: "mobile",
        amount: 1000,
        image: XiaomiRedmiNote12
    },
    {
        id: 4,
        name: "Samsung Galaxy A54",
        price: 150000,
        category: "mobile",
        amount: 100,
        image: SamsungGalaxyA54
    },
    {
        id: 5,
        name: "MacBook Air 13",
        price: 400000,
        category: "laptop",
        amount: 53,
        image: MacBookAir13
    },
    {
        id: 6,
        name: "ASUS ROG Strix G17",
        price: 400000,
        category: "laptop",
        amount: 31,
        image: ASUSROGStrix17
    },
    {
        id: 7,
        name: "Dell Inspiron 3511",
        price: 150000,
        category: "laptop",
        amount: 120,
        image: DellInspiron3511
    },
    {
        id: 8,
        name: "AirPods 2",
        price: 50000,
        category: "earphones",
        amount: 700,
        image: AirPods2
    },
    {
        id: 9,
        name: "Sony WH-1000XM4",
        price: 100000,
        category: "earphones",
        amount: 300,
        image: SonyWH1000XM4
    }
]

export function searchByText(text) {
    const lowerCaseText = text.toLowerCase();
    let result = []
    for (let i = 0; i < data.length; ++i) {
        const lowerCaseName = data[i].name.toLowerCase();
        if (lowerCaseName.includes(lowerCaseText)) {
            result.push(data[i]);
        }
        if (data[i].category === lowerCaseText) {
            result.push(data[i]);
        }
    }
    return result;
}

export function searchByCategory(category) {
    let result = []
    for (let i = 0; i < data.length; ++i) {
        if (data[i].category === category) {
            result.push(data[i]);
        }
    }
    return result;
}