import React from 'react';
import styles from './scrollbar.module.css'
import { employees } from './data';
export default function Scrollbar(){
  
    return(
        <div className={styles.wrapper}>
        
           
         
          {employees.map((emp) => (
            <div className={styles.Card} key={emp.id}>
               <img src={emp.photo} alt='employeePic'/>
               <p>{emp.name},{emp.institution}</p>
               <p><bold>{emp.jobTitle}</bold></p>
               <p>{emp.yearsOfExperience} yrs of Exp</p>
               </div>
          ))}
          
   
        </div>

    );
}