import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = ({text, value}) => {
    return(<li>{text} {value}</li>)
}

const Statistics = ({good, neutral, bad}) => {
        return(
            <div>
                <ul>
                    <StatisticLine text="Good:" value={good}/>
                    <StatisticLine text="Neutral:" value={neutral}/>
                    <StatisticLine text="Bad:" value={bad}/>
                    <StatisticLine text="All:" value={good+bad+neutral}/>
                    <StatisticLine text="Average:" value={(good-bad)/(good+bad+neutral)}/>
                    <StatisticLine text="Positive:" value={(good/(good+bad+neutral))*100+"%"} />
                </ul>
            </div>
        )

}
const Button =({event, text}) => {
    return (<button onClick={event}>{text}</button>)

}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    if(good+bad+neutral===0){
        return (
            <div>
                <h1>Give feedback</h1>

                <Button event={() => setGood(good+1)}text="Good"/>
                <Button event={() => setNeutral(neutral+1)}text="Bad"/>
                <Button event={() => setBad(bad+1)}text="Bad"/>

                <p>No feedback given</p>
        </div>
        )
    }
    return (
        <div>
            <h1>Give feedback</h1>

            <Button event={() => setGood(good+1)}text="Good"/>
            <Button event={() => setNeutral(neutral+1)}text="Bad"/>
            <Button event={() => setBad(bad+1)}text="Bad"/>

            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )

}

ReactDOM.render(<App />,
    document.getElementById('root')
)

