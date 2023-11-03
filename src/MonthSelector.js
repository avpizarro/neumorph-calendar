function MonthSelector(props)
{
    return (
        <div className="month-header">
            <button className="previous" onClick={props.previousMonth}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <span className="month-name">{props.value}</span>
            <button className="next" onClick={props.nextMonth}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
    );
}

export default MonthSelector;