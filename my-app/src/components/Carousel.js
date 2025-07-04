import React from 'react'

export default function Carousel() {
    return (
        <div>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://media.istockphoto.com/id/1487956741/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=2048x2048&w=is&k=20&c=2xOTQlOwQFpKxTy5OqBLhoIKJo8zKvC37PgUNbfEAvk=" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                            </form>
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
    )
}
