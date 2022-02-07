import React,{useState, useEffect} from "react";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import {Carousel, PageItem} from 'react-bootstrap';


function Home()
{
    
    
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const [loading, setLoading] = useState(false);
    var compountedMounted = true;
    
    useEffect(()=>{
        setLoading(true);
        const getMovies = async() => {
           const response =  await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "89f55a5b49mshcecedde8d4ed5c7p1ff11cjsn322aa0c411e0"
            }
        })
        .then(response => response.json())
        .then((data) => {
            const list = data.d;
            setData(list);
          })
        .catch(err => {
            console.error(err);
        });
           if(compountedMounted)
           {
               console.log();
           }
           return () =>
           {
            compountedMounted = false;
           }
        } 
        getMovies();
    },[]);
    const ShowMovies = () =>
    {
       return( <>
           {
                data.map((item) =>
                {
                    console.log(item);
                    const name = item.l;
                    const poster = item.i.imageUrl;
                    return(
                        <>
                            <div className = "col-md-3 py-2" >
                                <button className="card h-100 text-center p-4 "  >
                                    <img src= {poster} className="card-img-top" alt="..."  />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                    </div>
                                </button>
                            </div>
                        
                       </>
                    )
                    

                })
            }

       </> )
       console.log(data);
    
    }
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 text-center "
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Streaming Movies</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 text-center"
     src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Streaming Movies</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 text-center"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Streaming Movies</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <div>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center text-white">Latest Movies</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <ShowMovies/>
            </div>
        </div>
    </div>
  )
}

export default Home
