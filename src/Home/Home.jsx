// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import { useEffect, useState } from "react";

const Home = () => {
  // const [filterData,setFilterData]= useState([]);
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  const categoriesData = useLoaderData();
  useEffect(() => {
    setData(categoriesData);
  }, [categoriesData]);
  
  const submitHandler = (e)=>{
    e.preventDefault();
    const filteredData = categoriesData.filter(card => card.category.toLocaleLowerCase() === inputValue.toLocaleLowerCase());
    setData(filteredData);
  }
  const handleSearch = (e) => {
    setInputValue(e.target.value.toLocaleLowerCase());
  };
  
  return (
    <div className="">
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/q9FstNq/headerbg.jpg)",
        }}
      >
        <div className="bg-[#fffffff2] hero-overlay opacity-50 z-10 "></div>
        <div className="z-10">
          <div className="">
            <h1 className="mb-5 text-5xl text-red font-bold text-center">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div>
            <form onSubmit={submitHandler} className="flex w-[80%] mx-auto">
              <input
              onChange={handleSearch} 
                name="name"
                type="text"
                placeholder="search"
                className="input w-full rounded-l-full"
              />
              <div>
                <button
                  type="submit"
                  name="search"
                  className="btn hover:bg-[#FF444A] border-0 bg-[#FF444A] text-white  rounded-r-full"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto my-20">
        {data.map((card) => (
          <Category key={card.id} card={card}></Category>
        ))}
      </div>
    </div>
  );
};

export default Home;
