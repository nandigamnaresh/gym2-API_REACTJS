import React, { useEffect, useState } from 'react';
import Naresh1 from 'axios'

function Equipment() {
    const [a, b]=useState();

    const Data = async () => {

        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
            params: { limit: '10' },
            headers: {
                // 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await Naresh1.request(options);
            console.log(response.data);
            b(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect (()=>{
        Data()
    },[])




    return (
        <div>

            <div className='container-fluid'>
                <h3 className='ms-5 ps-5 mt-4'>EQUIPMENT LIST</h3>
                <div className='row mt-5 p-5 ms-5 w-25 m-auto' style={{border:"2px solid red"}}>

                    {
                       a&& a.map(data=>
                            <div>
                            
                                <div className='col-lg-12  fw-bolder'>

                                    <ul>
                                        <li>{data.toUpperCase()}</li>
                                    </ul>

                                </div>
                    
                        
                            </div>
                        
                        )

                    }
                </div>
            </div>

        </div>
    )
}

export default Equipment