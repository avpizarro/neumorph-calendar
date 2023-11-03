import Weekdays from "./Weekdays";
import MonthSelector from "./MonthSelector";

function Month(props)
{
    return (
        <div className="month" id={props.value}>
            <MonthSelector value={props.value}
                previousMonth={props.previousMonth}
                nextMonth={props.nextMonth}
            />
            <div className="month-body">
                <Weekdays />
                <div className="dates">
                    {props.dates.map((item, i) => <span key={i}>{item}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Month;