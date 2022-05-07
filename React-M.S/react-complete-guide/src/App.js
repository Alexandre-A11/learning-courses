import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            ide: "e1",
            title: "Toiled Paper",
            amount: 94.12,
            date: new Date(2022, 5, 5),
        },
        {
            ide: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2022, 5, 4),
        },
        {
            ide: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2022, 5, 3),
        },
        {
            ide: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2022, 5, 2),
        },
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses item={expenses} />
        </div>
    );
};

export default App;
