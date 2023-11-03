function YearSelector(props)
{
    return (
        <div className="year">
            <button className="previous" onClick={props.previousYear}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <span className="year-name">{props.value}</span>
            <button className="next" onClick={props.nextYear}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
    );
}

export default YearSelector;