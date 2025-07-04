import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {

    
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();


        setFoodItem(response[0]);
        setFoodCat(response[1]);

        //console.log(response[0],response[1]);

    }

    useEffect(() => {
        loadData()
    }, [])






    return (
        <div>
            <div><Navbar /></div>
            <div style={{maxWidth: "900px",margin:"auto"}}>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://media.istockphoto.com/id/1487956741/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=2048x2048&w=is&k=20&c=2xOTQlOwQFpKxTy5OqBLhoIKJo8zKvC37PgUNbfEAvk=" className="d-block w-100 height:50px" alt="..."></img>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="d-flex justify-content-center">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
                                    <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://media.istockphoto.com/id/1471844577/photo/delicious-double-burger-with-french-fries-and-vegetables-on-wooden-cutting-board.jpg?s=2048x2048&w=is&k=20&c=8BI4UQkeEyMJok6q_a6ue1sK-juWwOWTY9X1NVS9X0w=" className="d-block w-100" alt="..."></img>
                            <div className="carousel-caption d-none d-md-block">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg" className="d-block w-100" alt="..."></img>
                            <div className="carousel-caption d-none d-md-block">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                                <hr />
                                {foodItem !== []
                                    ?
                                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='cols-12 col-md-6 col-lg-3'>
                                                    <Card foodItem={filterItems}
                                                        options={filterItems.options[0]}
                                                        
                                                    />
                                                </div>
                                            )
                                        }
                                        ) : <div> "No Such Data Found"</div>}

                            </div>

                            )
                        }) : ""

                }


            </div>

            <div><Footer /></div>
        </div>
    )
}
