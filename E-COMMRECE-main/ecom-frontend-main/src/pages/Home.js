// import axios from 'axios';
// import React,{useEffect,useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
// import { useNavigate } from 'react-router-dom';
const data = [

    {
        img : "/images/shopping.jpg"
    },
    {
        img : "/images/shop.jpg"
    },
    
    {
        img : "/images/perfume-1.webp"
    },
    {
        img : "/images/BG.jpg"
    }
]
const Home = () => {
    // const [products,setProducts]=useState([]);
    // const[cart,setCart]=useState([])
    // const getAllProducts=async()=>{
    //     try{
    //         const response=await axios.get("http://localhost:8000/api/products/get-all");
    //         setProducts(response.data)
    //     }catch(error){

    //     }
    // }
    // useEffect(()=>{
    //     getAllProducts()

    // },[])
    // const navigate=useNavigate()
    // const buyerToken=localStorage.getItem("buyerToken")
    // useEffect(()=>{
    //     if(!buyerToken)
    //     {
    //         navigate("/login")
    //     }
    // })
    // const addtoCart=( product)=>{
    //     const updatedCart=JSON.parse(localStorage.getItem("cart"))||[];
    //     const existingCart=[...updatedCart,product];
    //     localStorage.setItem("cart",JSON.Stringify(existingCart));
    //     setCart(cart)
    // }

  return (
    <>
    <Carousel >
        {
            data.map((car)=>(
                <div>
                <img src = {car.img} style={{height:"600px",weight:"600px"}}/>
                </div>
            ))
        }

</Carousel>

</>
  )
}

export default Home