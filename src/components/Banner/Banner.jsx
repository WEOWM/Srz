import React from 'react'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="Asset/pubg-1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    {/* <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Banner