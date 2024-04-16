import React, { useEffect, useState } from 'react';
import Naresh from 'axios'

export const Exercise = ({r}) => {
    const [a, b] = useState([])



    const Full = async () => {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            params: { limit: `${r}` },
            headers: {
                // 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await Naresh.request(options);
            console.log(response.data);
            b(response.data)

        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        Full();
    }, [r])


    










    return (
        <div>


            <h2 className='text-center  fw-bold pb-5 pt-3' style={{ color: "GREEN", border: "2px solid white", backgroundColor: "white" }}>BODYPARTS</h2>
            <div className='container'>
                <div className='row ms-5'>
                    {
                        a && a.map(data =>
                            <div className='col-lg-4 pb-5 ps-5'>

                                <div class="card mt-4" style={{ width: "18rem" }} id='main-body'>
                                    <div class="card-body  pt-4 pb-4 ">
                                        <h3 class="card-title ps-3">BODYPART: {data.bodyPart.toUpperCase()}</h3>
                                        <h6 className='card-text ms-3'>TARGET : {data.target.toUpperCase()}</h6>
                                        <img src={data.gifUrl} controls style={{ width: "100%" }} />
                                        <h5 className='mt-3 card-text'>INSTRUCTIONS Name : {data.name}</h5>
                                        <h5 className='mt-3 mb-3 card-text'>INSTRUCTIONS</h5>
                                        <p>1.{data.instructions[0]}</p>
                                        <p>2.{data.instructions[1]}</p>
                                        <p>3.{data.instructions[2]}</p>
                                        <p>4.{data.instructions[3]}</p>
                                        <p>5.{data.instructions[4]}</p>

                                        <h6 className='card-text mt-4'>EQUIPMENT : {data.equipment}</h6>
                                        <p>SECONDARY MUSCLES :{data.secondaryMuscles[0]} {data.secondaryMuscles[1]}</p>

                                    </div>
                                </div>

                            </div>
                        )
                    }

                </div>
            </div>


        </div>
    )
}
