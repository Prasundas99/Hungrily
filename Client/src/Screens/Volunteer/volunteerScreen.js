import React from 'react';
import data from '../../mockData/data';

import RequestCard from '../../Components/RequestCard/RequestCard';
import { id } from 'prelude-ls';

const volunteerScreen = () => {
    return (
        <>
            hi
            {data.foodRequestsRecieved.map((foodReq) => {
                return <RequestCard key={foodReq.id} foodRequest={foodReq} />;
            })}
        </>
    );
};

export default volunteerScreen;
