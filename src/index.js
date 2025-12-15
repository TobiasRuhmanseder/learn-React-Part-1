import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className='header'>
            <h1> Fast React Pizza Co.</h1 >
        </header>
    );

}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our menu</h2>
            <ul className='pizzas'>
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
            {/* <Pizza name='Pizza Spinaci' ingredients='Tomato' photoName="pizzas/spinaci.jpg" price={10} /> */}

        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const inverval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(inverval);
    }, []);

    return (
        <footer className='footer'>
            {time}. We‘re currently {isOpen ? "open" : "closed"}!
        </footer>
    );
}

function Pizza(probs) {
    console.log(probs)
    return (
        <li className='pizza'>
            <div>
                <img src={probs.pizzaObj.photoName} alt={probs.pizzaObj.name}></img>
                <h3>{probs.pizzaObj.name}</h3>
                <p>{probs.pizzaObj.ingredients}</p>
            </div>
        </li>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
// React.StrictMode = it render twice, to check for errors or if an old version is currently running
