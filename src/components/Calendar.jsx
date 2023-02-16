import React from "react";
import Event from './Event';

const Calendar = () => {
    return(
        <div className = "Calendar">
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <Event event='Web Dev' location ='Rm. 325' color ='green'/>
                    <td></td>
                    <Event event='Wed Dev' location = 'Rm. 325' color ='green'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <Event event='Wed Dev' location ='Rm. 325' color ='green'/>
                    <td></td>
                    <Event event='Wed Dev' location ='Rm. 325' color ='green'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <Event event='Job Search' location ='online' color ='pink'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Job Search' location ='online' color ='pink'/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <Event event='Job Search' location ='online' color ='pink'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Job Search' location ='online' color ='pink'/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <Event event= 'Coding Practice' location ='Leetcode' color ='blue'/>
                    <td></td>
                    <Event event='Coding Practice' location ='HackerRank' color ='blue'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td></td>
                    <Event event= 'Coding Practice' location ='Leetcode' color ='blue'/>
                    <td></td>
                    <Event event='Coding Practice' location ='HackerRank' color ='blue'/>
                    <td></td>           
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Web Dev' location ='Rm. 325' color ='green'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
        </table>
    </div>
    )
}

export default Calendar;