import { FaSearch } from "react-icons/fa";
import { useState } from "react";
export const Home =()=>{
    const image=[{
        imageUrl:"https://as1.ftcdn.net/jpg/06/93/22/06/1000_F_693220603_no0jYJyV9nai4AKBtTV1uZB1HphZdTna.jpg",
        author: "Ganga Prasad Yadav",
        prompt: "A beautyful leopard",
    },
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",
        author: "Anshika",
        prompt: "A beautyful leopard",
    },
    {
        imageUrl:"https://i0.wp.com/picjumbo.com/wp-content/uploads/tiger-eyes-looking-from-the-bushes-free-image.jpeg?h=800&quality=80",
        author: "Ganga Prasad",
        prompt: "A beautyful leopard",
    },
];

    const [searchTerm,setSearchTerm]=useState();
    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }
    const filteredImages = searchTerm
    ? image.filter((image) => {
        return Object.values(image).some((value) => value.includes(searchTerm));
      })
    : image;
console.log(filteredImages);  

    return(
        <div className="container flex flex-col items-center justify-center mx-auto">
            {/* for top heading and search bar */}
            <div className="my-8">
                <h2 className="sm:text-4xl text-3xl md:text-auto text-center font-semibold text-gray-950">Expolor popular posts in the Community!</h2>
                <h3 className="sm:text-3xl text-2xl font-semibold text-gray-700 text-center">Genrate with AI By HLP</h3>
                <form className="flex gap-2 mx-auto sm:w-full w-5/6 p-2 my-5 border-2 border-gray-300 rounded-md">
                    <button> <FaSearch className="text-xl cursor-pointer" />
                    </button>
                    <input 
                    type="text" 
                placeholder="search for a post"
                name="prompt"
                className="w-full outline-none p-2 rounded-md" onChange={handleChange}/></form>
            </div>
            {/*for images */}
            <div className="flex flex-wrap gap-5 items-center justify-center"> 
                {
                   filteredImages?.map((item,index)=>{
                        return (
                            <div key={index}
                            className="flex flex-col item-center justify-center">
                                <div>
                                    <img src={item.imageUrl} alt={item.prompt} className="w-[400px] h-[300px]"/></div>
                                    {/* div for description */}
                                    <div className="flex item-center justify-between gap-20 -mt-12 text-white">
                                        {/*author and prompt div */}
                                        <div>
                                            <p>{item.author}</p>
                                            <p>{item.prompt}</p>
                                    </div>
                                    {/*div for download */}
                                    <div>Download</div>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
            
        </div>
    )
}