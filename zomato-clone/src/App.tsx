import { useState , useEffect , useRef} from "react";
import { CountUp } from "countup.js";
import Swal from "sweetalert2";

function App() {
  
  // adding function for filterate
  const [activeone, setActiveone] = useState<boolean>(false);
  const [activetwo, setActivetwo] = useState<boolean>(false);

  type Item = {
       name: string,
  };

  const [data , setData] = useState<Item[]>([
        {name: "ZupEat"}
  ]);

useEffect(() => {
          const internal = setInterval(() => {
                setData((prev) => prev[0].name === "ZupEat" ? [{name: "50% off"}] : [{name: "ZupEat"}]);
          },3000);

          return () => clearInterval(internal);
}, []);

type Itemdata = {
      name: string
}

const [videotext , setVideoText] = useState<Itemdata[]>([
        {name: "Order your favourites"}
  ]);

useEffect(() => {
          const internal = setInterval(() => {
                setVideoText((prevdata) => prevdata[0].name === "Order your favourites" ? [{name: "& enjoy 50% off"}] : [{name: "Order your favourites"}]);
          },3000);

          return () => clearInterval(internal);
}, []);

// food filter buttons images data
 type Foodfilter = {
      name: string,
      img: string
 }

 const[foodfilter , setFoodfilter] = useState<Foodfilter[]>([])

 useEffect(() => {
          setFoodfilter([
                       { name: "All", img: "/public/foodfilter/all.webp" },
                       { name: "Chaat", img: "/public/foodfilter/chaat.webp" },
                       { name: "South Indian", img: "/public/foodfilter/southindian.png" },
                       { name: "Chinese", img: "/public/foodfilter/chinese.webp" },
                       { name: "Dessert", img: "/public/foodfilter/desserts.webp" },
          ])
 },[])

// filter buttons data
 type Filter = {
      name: string
 }

 const[filterbut , setFilterbut] = useState<Filter[]>([])

 useEffect(() => {
           setFilterbut(([
                       {name: "Filters ▼"},
                       {name: "Under 30 mins"},
                       {name: "New to you"},
                       {name: "Great offers"},
                       {name: "Rating 4.0+"}
           ]))
 },[])

//  restaurant data 1-3
 type Data = {
      img: string
      restaurant: string,
      time: number,
      km: number,
      rating: string
 }

 const[resdataone , setResdataone] = useState<Data[]>([])

 useEffect(() => {
          setResdataone(() => ([
                       {img: "/public/restaurantfoodimg/dataisha.webp", restaurant: "Sri Isha Tiffins", time: 25, km: 2.4, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datamumbai.webp", restaurant: "Mumbai Pav Co - MPC", time: 30, km: 2.3, rating: "4+"},
                       {img: "/public/restaurantfoodimg/dataladu.avif", restaurant: "Ladu Gopal Cafe", time: 35, km: 4.6, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datafalahaal.png", restaurant: "Falahaar & Kota Kachori", time: 40, km: 1.9, rating: "4+"}
          ]))
 })


//  restaurant data 2-3
  type Datatwo = {
      img: string
      restaurant: string,
      time: number,
      km: number,
      rating: string
 }

 const[resdatatwo , setResdatatwo] = useState<Datatwo[]>([])

 useEffect(() => {
          setResdatatwo(() => ([
                       {img: "/public/restaurantfoodimg/datadumping.jpg", restaurant: "Dumping Hood", time: 25, km: 1.2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datafiltercoffee.webp", restaurant: "The Filter Coffee", time: 30, km: 2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datafrozen.png", restaurant: "Frozen Bottle", time: 20, km: 1.3, rating: "3.9+"},
                       {img: "/public/restaurantfoodimg/dataladdo.webp", restaurant: "Laddos", time: 20, km: 1.3, rating: "4+"}
          ]))
 })


//  restaurant data 3-3
  type Datathree = {
      img: string
      restaurant: string,
      time: number,
      km: number,
      rating: string
 }

 const[resdatathree , setResdatathree] = useState<Datathree[]>([])

 useEffect(() => {
          setResdatathree(() => ([
                       {img: "/public/restaurantfoodimg/datafresh.webp", restaurant: "Just Fresh Point", time: 30, km: 2.2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/dataamaar.webp", restaurant: "Amaar Kashi", time: 25, km: 1, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datachole.png", restaurant: "Shyamji's Chole", time: 30, km: 2.2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datapallavi.webp", restaurant: "Pallavi Restaurant", time: 25, km: 1, rating: "4+"}
          ]))
 })

// search functionality
 type allRestaurant = {
      img: string,
      restaurant: string,
      time: number,
      km: number,
      rating: string
 }

const [searchQuery, setSearchQuery] = useState<allRestaurant[]>([]);
const [searchInput, setSearchInput] = useState<string>("");

useEffect(() => {
          setSearchQuery([
                       {img: "/public/restaurantfoodimg/dataisha.webp", restaurant: "Sri Isha Tiffins", time: 25, km: 2.4, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datamumbai.webp", restaurant: "Mumbai Pav Co - MPC", time: 30, km: 2.3, rating: "4+"},
                       {img: "/public/restaurantfoodimg/dataladu.avif", restaurant: "Ladu Gopal Cafe", time: 35, km: 4.6, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datafalahaal.png", restaurant: "Falahaar & Kota Kachori", time: 40, km: 1.9, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datadumping.jpg", restaurant: "Dumping Hood", time: 25, km: 1.2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datafiltercoffee.webp", restaurant: "The Filter Coffee", time: 30, km: 2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datafrozen.png", restaurant: "Frozen Bottle", time: 20, km: 1.3, rating: "3.9+"},
                       {img: "/public/restaurantfoodimg/dataladdo.webp", restaurant: "Laddos", time: 20, km: 1.3, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datafresh.webp", restaurant: "Just Fresh Point", time: 30, km: 2.2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/dataamaar.webp", restaurant: "Amaar Kashi", time: 25, km: 1, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datachole.png", restaurant: "Shyamji's Chole", time: 30, km: 2.2, rating: "4+"},
                       {img: "/public/restaurantfoodimg/datapallavi.webp", restaurant: "Pallavi Restaurant", time: 25, km: 1, rating: "4+"}

          ])
})

const filteredRestaurants = searchQuery.filter((item) =>
           {
            if(searchInput.length < 1){
              return false;
            }else{
             return item.restaurant.toLowerCase().includes(searchInput.toLowerCase());
            }
           }
);

 const numberRef = useRef<HTMLSpanElement | null>(null);

 useEffect(() => {
  if (numberRef.current) {
    const count = new CountUp(numberRef.current, 10000, {
      duration: 10
    });
    count.start();
   }
}, []);

const numberReftwo = useRef<HTMLSpanElement | null>(null);

 useEffect(() => {
  if (numberReftwo.current) {
    const count = new CountUp(numberReftwo.current, 5000, {
      duration: 10
    });
    count.start();
   }
}, []);

const numberRefthree = useRef<HTMLSpanElement | null>(null);

 useEffect(() => {
  if (numberRefthree.current) {
    const count = new CountUp(numberRefthree.current, 15000, {
      duration: 10
    });
    count.start();
   }
}, []);

 type testimonialData = {
      img: string,
      name: string,
      review: string,
      rating: number
 }

 const[testimonialdata , setTestimonialdata] = useState<testimonialData[]>([])

 useEffect(() => {
          setTestimonialdata([
                            {img: "/public/datauser/datauserone.jpg", name: "rohit kumar", review: "Great food and quick delivery", rating: 4}, 
                            {img: "/public/datauser/datausertwo.jpg", name: "subham kumar", review: "Great food and quick delivery", rating: 4},
                            {img: "/public/datauser/datauserthree.jpg", name: "sanu Kumar", review: "Great food and quick delivery", rating: 4},
                            {img: "/public/datauser/datauserfour.jpg", name: "ritik Kumar", review: "Great food and quick delivery", rating: 4},
                            {img: "/public/datauser/datauserfive.jpeg", name: "sanjay Kumar", review: "Great food and quick delivery", rating: 4},
                            {img: "/public/datauser/datausersix.jpg", name: "ritu kumari", review: "Great food and quick delivery", rating: 4},
                            {img: "/public/datauser/datauserseven.jpg", name: "aadya kumari", review: "Great food and quick delivery", rating: 4},
                            {img: "/public/datauser/datausereight.jpg", name: "nisha kumari", review: "Great food and quick delivery", rating: 4},      
          ])
 })

 type Inputdata = {
      name?: string,
      email?: string,
      message?: string
 }

 const[inputdata , setInputdata] = useState<Inputdata>()
 const[error , setError] = useState<Inputdata>()

 const handler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setInputdata((prev) => ({...prev , [e.target.name]: e.target.value}))
 }

 const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // validation
        if(!inputdata?.name || !inputdata?.email || !inputdata?.message){
           setError({name: "All fields are mandatory"});
           console.log(error);
           return;
        }else{
            setError({name: "Success"});
            console.log(inputdata);
        }
 }

 type Subscribe = {
      email: string
 }

 const [subscribe , setSubscribe] = useState<Subscribe>({email: ""})

 const subhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubscribe({ ...subscribe , [e.target.name]: e.target.value})
 }

 const subsCribe = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
      
      // validation
      if(!subscribe?.email){
          Swal.fire({ 
                title: 'Subscribed Failed',
                text: `Please enter your email to subscribe`,
                icon: 'error',
          });
          return
      }else{
          Swal.fire({ 
                title: 'Subscribed Successfully',
                text: `You have subscribed with ${subscribe.email}`,
                icon: 'success',
          });
      }
 }

 const handleFeatureNotReady = () => {
  Swal.fire({
    title: "🚧 Feature Coming Soon!",
    html: `
      <p style="font-size: 16px;">
        This section is still under work.<br/>
        Sorry for the incomplete feature!  
      </p>
    `,
    icon: "info",
    confirmButtonText: "Got it!",
    confirmButtonColor: "#ff4d4d",
    background: "#1a1a1a",
    color: "#fff",
    showClass: {
      popup: "animate__animated animate__fadeInDown"
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp"
    }
  });
};

  return (
         <>
           {/* zomato project */}
<div className="w-full bg-white select-none">
  {/* nav */}
  <nav id="navback" className="w-full h-screen">

    {/* top nav */}
    <div className="w-full h-[100px] px-4 flex items-center justify-between flex-wrap">
      {/* Location */}
      <section className="flex items-center gap-1">
        <svg
          className="w-7 h-7 font-bold text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <button onClick={handleFeatureNotReady} className="tracking-wide text-lg cursor-pointer">Home ▼</button>
      </section>

      {/* Wallet + User */}
      <div className="flex items-center gap-4">
        {/* wallet */}
        <button onClick={handleFeatureNotReady} className="text-2xl text-red-400 flex items-center gap-1 cursor-pointer">
          <svg
            className="w-7 h-7 font-bold text-red-500 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v7A2.5 2.5 0 0 1 18.5 18h-13A2.5 2.5 0 0 1 3 15.5v-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 10.5a0.75 0.75 0 100 1.5 0.75 0.75 0 000-1.5z" />
          </svg>
        </button>

        {/* user */}
        <button onClick={handleFeatureNotReady} className="text-2xl text-red-400 flex items-center gap-1 cursor-pointer">
          <svg
            className="w-7 h-7 font-bold text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.5 20c1.2-3.2 4.7-5.5 9.5-5.5s8.3 2.3 9.5 5.5" />
          </svg>
        </button>
      </div>
    </div>

    {/* hero */}
    <section className="w-full h-[400px] grid place-content-center py-10">
      <section className="flex justify-center items-center text-center">
        {data.map((item, index) => (
          <p className="text-[25px] md:text-6xl font-bold text-red-400 tracking-wider uppercase" key={index}>{item.name}</p>
        ))}
      </section>
      <section>
        <p className="text-[30px] md:text-7xl font-bold text-yellow-400 tracking-widest uppercase text-center">order now</p>
      </section>
    </section>

    {/* explore button */}
    <section className="w-full flex justify-center items-center">
      <button onClick={handleFeatureNotReady} className="w-[200px] h-12 border-2 border-red-400 bg-transparent text-slate-100 text-lg font-medium tracking-wide rounded-2xl hover:border-red-500 hover:text-red-500 hover:scale-105 transition-all cursor-pointer">Explore ▼</button>
    </section>
  </nav>

  {/* search + filters */}
  <section className="w-full h-auto py-4 flex flex-col md:flex-row justify-center items-center gap-3 px-4 sticky top-0 bg-transparent backdrop-blur-lg z-50 shadow-md shadow-white">
    <input
      type="text"
      placeholder="search ex: pizza burger"
      className="w-full md:w-[600px] h-[50px] text-black rounded-2xl border-2 border-black outline-0 pl-5 tracking-wider"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
    <button className="w-full md:w-[150px] h-[50px] text-black border-2 border-red-400 rounded-2xl tracking-wide cursor-pointer">Search</button>

    <button
      onClick={() => setActiveone(!activeone)}
      className={`w-full md:w-[100px] h-[50px] px-3 py-1 rounded-2xl border tracking-wider cursor-pointer
      ${activeone ? "bg-green-800 text-white border-2 border-red-400"
                 : "bg-transparent text-black border-2 border-red-400"}
    `}
    >
      Veg
    </button>

    <button
      onClick={() => setActivetwo(!activetwo)}
      className={`w-full md:w-[100px] h-[50px] px-3 py-1 rounded-2xl border tracking-wider cursor-pointer
      ${activetwo ? "bg-green-800 text-white border-2 border-red-400"
                 : "bg-transparent text-black border-2 border-red-400"}
    `}
    >
      Healthy
    </button>
  </section>

  {/* food filter buttons images */}
  <div className="mt-20 h-auto w-full flex flex-wrap justify-center items-center gap-12 px-4 py-6">
    {foodfilter.map((item, index) =>
      <div key={index}>
        <div className="grid place-content-center gap-8">
          <button onClick={handleFeatureNotReady} className="cursor-pointer">
            <img src={item.img} alt={item.name} className="w-[250px] h-[120px] hover:scale-105 transition-all ease-in-out duration-200" />
          </button>
          <button className="text-md text-slate-600 font-normal cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-green-800 transition-all">
            {item.name}
          </button>
        </div>
      </div>
    )}
  </div>

  {/* filter buttons */}
  <div className="w-full flex flex-wrap justify-center items-center gap-4 md:gap-12 py-6 px-4">
    {filterbut.map((item, index) =>
      <button onClick={handleFeatureNotReady} key={index} className="w-[250px] h-10 border-2 border-gray-600 rounded-2xl hover:border-white hover:bg-green-800 hover:text-white transition-all cursor-pointer">
        {item.name}
      </button>
    )}
  </div>

  {/* search results */}
  <div className="mt-20 h-auto w-full px-4">

    <div className="flex flex-wrap justify-center gap-6">
      {filteredRestaurants.map((item, index) =>
        <div key={index} className="w-[315px] h-[315px] border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
          <button className="cursor-pointer">
            <img src={item.img} alt={item.restaurant} className="w-[315px] h-[200px] rounded-2xl hover:scale-110 transition-all" />
          </button>
          <p className="text-2xl font-semibold text-black pl-3">{item.restaurant}</p>
          <p className="text-md text-slate-600 pl-3">{item.time} mins</p>
          <p className="text-md text-slate-600 pl-3">{item.km} km</p>
          <p className="text-md font-bold text-green-800 pl-3 flex items-center justify-between pr-3">
            {item.rating}
            <span className="w-[150px] h-5 text-red-400 border border-black rounded-2xl flex justify-center items-center hover:scale-105">
              <button onClick={handleFeatureNotReady} className="w-full h-full flex justify-center items-center cursor-pointer">Order Now</button>
            </span>
          </p>
        </div>
      )}
    </div>
  </div>

  {/* all restaurant title */}
  <div className="mt-20 h-[50px] w-full pl-4 md:pl-10 flex items-center">
    <p className="text-2xl font-normal text-slate-800 uppercase tracking-wide">all restaurant</p>
  </div>

  {/* restaurant repeated sections */}
  {[resdataone, resdatatwo, resdatathree, resdataone, resdatathree, resdatatwo, resdataone, resdatathree , resdatatwo, resdataone].map((list, idx) => (
    <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 py-6 px-4">
      {list.map((item, index) =>
        <div key={index} className="w-full grid place-content-center">
          <div className="w-[315px] h-[315px] border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <button className="cursor-pointer">
              <img src={item.img} alt={item.restaurant} className="w-[315px] h-[200px] rounded-2xl hover:scale-110 transition-all" />
            </button>
            <p className="text-2xl font-semibold text-black pl-3">{item.restaurant}</p>
            <p className="text-md text-slate-600 pl-3">{item.time} mins</p>
            <p className="text-md text-slate-600 pl-3">{item.km} km</p>
            <p className="text-lg font-bold text-green-800 pl-3 flex items-center justify-between pr-3">
              {item.rating}
              <span className="w-[150px] h-5 text-red-400 border border-black rounded-2xl flex justify-center items-center hover:scale-105">
                <button onClick={handleFeatureNotReady} className="w-full h-full text-sm cursor-pointer flex justify-center items-center">Order Now</button>
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  ))}
  {/* add video */}
  <div className="mt-[200px] h-screen w-full flex justify-center items-center gap-5 px-4">
  <section className="text-5xl md:text-5xl sm:text-3xl text-black font-semibold uppercase tracking-wide text-center">
    {videotext.map((item, index) => 
      <section key={index} className="flex justify-center items-center">
        <p>
          Hungry <span className="text-yellow-600">{item.name}</span>
        </p>
      </section>
    )}

    <section className="w-full h-[600px] flex justify-center items-center">
      <video
        src="/video/zomatovideo.webm"
        autoPlay
        loop
        muted
        className="
          w-[1000px] h-[450px]
          md:w-[800px] md:h-[400px]
          sm:w-[90%] sm:h-[250px]
          object-cover border-4 border-red-600
        "
      ></video>
    </section>
  </section>
</div>

{/* why choose us */}
<div className="mt-15 h-auto">
  <section className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-6">
    <p className="text-4xl font-semibold text-black uppercase tracking-wide text-center">
      why choose us?
    </p>

    <section className="
      h-auto w-full 
      flex flex-wrap 
      justify-center items-center 
      gap-6 md:gap-[50px] 
      text-center
    ">
      <h2 className="text-lg font-bold text-yellow-600">
        <span className="text-2xl text-red-400" ref={numberRef}></span>
        <span className="text-2xl font-normal text-slate-500"> + Ratings</span>
      </h2>

      <h2 className="text-lg font-bold text-yellow-600">
        <span className="text-2xl text-red-400" ref={numberReftwo}></span>
        <span className="text-2xl font-normal text-slate-500"> + Partner Restaurants</span>
      </h2>

      <h2 className="text-lg font-bold text-yellow-600">
        <span className="text-2xl text-red-400" ref={numberRefthree}></span>
        <span className="text-2xl font-normal text-slate-500"> + Orders Delivered</span>
      </h2>
    </section>
  </section>
</div>

{/* testimonials */}
<div className="mt-10 min-h-screen w-full px-4">
  <section className="w-full flex justify-center items-center mb-6">
    <p className="text-4xl font-semibold tracking-wide uppercase">testimonial</p>
  </section>

  <div className="w-full min-h-[300px] flex flex-wrap justify-center items-start gap-8 sm:gap-10 md:gap-12 lg:gap-15 py-6">
    {testimonialdata.map((item, index) => (
      <div key={index} className="flex justify-center items-center">
        <div className="w-[300px] sm:w-[315px] h-auto p-4 rounded-2xl shadow-sm flex flex-col gap-3 bg-white">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-[180px] sm:h-[200px] rounded-2xl object-cover"
          />
          <section>
            <p className="text-lg font-medium text-red-400 uppercase">{item.name}</p>
            <p className="text-md text-slate-800 font-normal">{item.review}</p>
            <p className="text-md text-green-800 font-bold">{item.rating}+</p>
          </section>
        </div>
      </div>
    ))}
  </div>
</div>

{/* contact form */}
<div
  id="contactback"
  className="mt-10 min-h-screen w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[200px] px-4 py-6"
>
     {/* section 1 */}
     <section className="text-white flex flex-col items-start text-center md:text-left">
        <h2 className="text-2xl font-semibold text-white uppercase">contact us</h2>

        <section className="w-full md:w-[400px] max-w-full grid gap-2">
          <p>Have questions or need assistance with your orders? We're here to help anytime.</p>

          <p>
            <strong>Email:</strong> support@zupeat.com <br />
            <strong>Phone:</strong> +91 91421 58588 <br />
            <strong>Address:</strong> Koramangala, Bengaluru India
          </p>

          <p>Stay connected with us on social media for exclusive offers and delicious updates</p>
        </section>
      </section>

     {/* section 2 */}
     <div className="flex justify-center items-center w-full md:w-auto">
         <form onSubmit={submitHandler} className="w-full max-w-[320px] grid place-content-center gap-1">
               <label className="text-white font-medium tracking-wide" htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                name="name"
                value={inputdata?.name}
                onChange={handler}
                placeholder="Your name..."
                className="w-full h-10 text-white border-2 border-red-200 rounded-lg outline-0 pl-3 mb-4"
                />

                <label className="text-white font-medium tracking-wide" htmlFor="name">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                value={inputdata?.email}
                onChange={handler}
                placeholder="Your email..."
                className="w-full h-10 text-white border-2 border-red-200 rounded-lg outline-0 pl-3 mb-4"
                />

                <label className="text-white font-medium tracking-wide" htmlFor="message">Message</label>
                <textarea
                id="message" 
                name="message" 
                value={inputdata?.message}
                onChange={handler}
                placeholder="Your message..."
                className="w-full h-40 text-white border-2 border-red-200 rounded-lg outline-0 pl-3 pt-2"
                ></textarea>

                <input 
                type="submit"
                value="Submit"
                className="w-full h-10 border-2 border-red-200 outline-0 rounded-md text-white font-medium uppercase"
                />

                {error?.name && (
                       <section className="w-full h-10 flex items-center pl-5 border border-red-400 outline-0 rounded-md">
                        <p className="text-md font-normal text-red-200">{error.name}</p>
                       </section>
                )}
         </form>
     </div>
</div>

{/* footer */}
<div className="w-full h-auto bg-black px-4 py-6">
  <div className="w-full h-full flex flex-col justify-center items-center">
    <div
      className="
        w-full 
        flex flex-col md:flex-row 
        justify-between 
        items-start 
        py-8 
        px-2 md:px-6 
        gap-10
      "
    >
      {/* section 1 */}
      <section className="text-white flex flex-col items-start max-w-full md:max-w-[400px]">
        <h2 className="text-2xl font-semibold text-white uppercase">ZupEat</h2>

        <section className="w-full md:w-[400px]">
          <p>Discover delicious meals from your favorite restaurants with fast delivery and great deals.</p>
          <p>Order pizza, burgers, sushi, and more with just a few clicks on our easy-to-use platform.</p>
          <p>Join millions of happy customers who trust ZupEat for their daily food cravings.</p>
        </section>
      </section>

      {/* section 2 */}
      <section className="text-white flex flex-col items-start max-w-full md:max-w-[400px]">
        <h2 className="text-2xl font-semibold text-white uppercase">contact</h2>

        <section className="w-full md:w-[400px]">
          <p>Have questions or need assistance with your orders? We're here to help anytime.</p>

          <p>
            <strong>Email:</strong> support@zupeat.com <br />
            <strong>Phone:</strong> +91 91421 58588 <br />
            <strong>Address:</strong> Koramangala, Bengaluru India
          </p>

          <p>Stay connected with us on social media for exclusive offers and delicious updates</p>
        </section>
      </section>

      {/* section 3 */}
      <section className="text-white flex flex-col gap-2 items-start w-full md:w-auto">
        <form onSubmit={subsCribe} className="w-full grid place-content-center gap-4">
          <input 
            type="email"
            id="email"
            name="email"
            onChange={subhandleChange}
            className="w-full md:w-[350px] h-[45px] border-2 border-white rounded-full pl-5 outline-0"
            placeholder="xyz@gmail.com"
          />
          <input 
            type="submit"
            value="Subscribe" 
            className="w-[150px] h-[45px] border-2 border-white rounded-full outline-0"
          />
        </form>
      </section>
    </div>
  </div>

  {/* bottom */}
  <section className="h-auto py-4 w-full bg-black flex flex-wrap justify-center items-center text-center">
    <p className="text-white">© 2024 ZupEat. All rights reserved.</p>
  </section>
</div>
  {/* main div */}
</div>
         </>
  )
}

export default App
