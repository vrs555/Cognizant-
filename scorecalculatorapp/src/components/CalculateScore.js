import "../stylesheets/mystyle.css";

const percentToDecimal = (decimal) => {
    return decimal.toFixed(2) + '%';
};

const calcScore = (total, goal) => {
    return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, Total, goal }) => {
    return (
        <div className="formatstyle">

            <h1>
                <font color="Brown">Student Details</font>
            </h1>

            <div className="Name">
                <b>Name : </b>{Name}
            </div>

            <div className="School">
                <b>School : </b>{School}
            </div>

            <div className="Total">
                <b>Total : </b>{Total} Marks
            </div>

            <div className="Score">
                <b>Average Score : </b>{calcScore(Total, goal)}
            </div>

        </div>
    );
};