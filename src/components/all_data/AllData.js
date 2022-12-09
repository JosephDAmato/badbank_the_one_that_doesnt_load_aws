import React from "react";
import UserContext from "../context/Context";

function AllData (){
    const ctx= React.useContext(UserContext);

    return(
        <div>AllData<br/>
            {JSON.stringify(ctx)}
        </div>
    )
};

export default AllData;