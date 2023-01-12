import React from "react";
import {pdetails} from "./pdetails.js";

const SubTable = (props) => {
    
    

    return(<>
            <table id="childTable">
                <tbody>
                    <tr></tr>
                {pdetails.map((pdItem, index)=> {
                    console.log(pdItem[props.id],'prps rec')
                    return(<tr><td>{pdItem[props.id]?.npi}</td><td>Add Additional NPIs</td><td>Delete</td></tr>);
                    // pdItem[props.id]?.recipients.map((recItem, index)=> {
                    //     console.log(recItem, 'rec')
                    // })

                    // let pd = pdItem[props.id];
                    // if(pd !== undefined) {
                    //     return(<>
                    //     <tr><td>{pd.recipients[index].firstname+ ', '+pd.recipients[index].lastname}</td><td></td><td></td><td></td></tr>
                    //     </>)
                    // }
                })}
                
                </tbody>
            </table>
        </>
    )
}

export default SubTable;