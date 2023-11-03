import React from "react";
import ReactDOM from "react-dom/client";
import YearSelector from "./YearSelector";
import Month from "./Month";
import "./index.css"

const monthNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Calendar extends React.Component
{
    constructor(props) 
    {
        super(props);
        const today = new Date()
        const year = today.getFullYear()
        const firstWeekdays = monthNumbers.map(month => new Date(year, month, 1).getDay())
        const daysInMonth = monthNumbers.map(month => new Date(year, month + 1, 0).getDate())

        this.state = {
            year: year,
            month: monthNumbers,
            name: monthNames,
            firstWeekday: firstWeekdays,
            dates: this.findMonthDates(firstWeekdays, daysInMonth)
        }
    }

    findMonthDates(firstWeekdays, daysInMonth)
    {
        let datesArray = [];
        for (let i = 0; i < monthNumbers.length; i++)
        {
            const dates = Array(firstWeekdays[i]).fill("").concat(Array.from({ length: daysInMonth[i] }, (_, i) => i + 1));
            datesArray.push(dates)
        }
        return datesArray;
    }

    nextYear()
    {
        let year = this.state.year + 1;
        const firstWeekdays = monthNumbers.map(month => new Date(year, month, 1).getDay())
        const daysInMonth = monthNumbers.map(month => new Date(year, month + 1, 0).getDate())

        this.setState({
            year: year,
            firstWeekday: firstWeekdays,
            dates: this.findMonthDates(firstWeekdays, daysInMonth)
        })
        console.log(this.state.dates);

    }

    previousYear()
    {
        let year = this.state.year - 1
        const firstWeekdays = monthNumbers.map(month => new Date(year, month, 1).getDay())
        const daysInMonth = monthNumbers.map(month => new Date(year, month + 1, 0).getDate())

        this.setState({
            year: year,
            firstWeekday: firstWeekdays,
            dates: this.findMonthDates(firstWeekdays, daysInMonth)
        })
        console.log(this.state.dates);

    }

    render()
    {
        return (
            <>
                <YearSelector value={this.state.year} previousYear={() => this.previousYear()} nextYear={() => this.nextYear()} />
                <div className="container">
                    {monthNames.map((monthName, i) => <Month value={monthName} dates={this.state.dates[i]} key={monthName} />)}
                </div>
            </>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calendar />);
