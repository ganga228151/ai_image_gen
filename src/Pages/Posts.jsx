export const Posts =() =>{
    return (
        <div className="lg:flex flex-1 items-start justify-evenly lg:mx-20 mx-0 my-10 ">
           <section className="border p-5 rounded lg:mx-auto mx-3 mb-5 lg:w-[470px] w-[370px]">
            <h2 className="text-xl font-semibold text-gray-800"> Genrate image with prompt</h2>
            <p className="text-md my-1"> Write your prompt according to the image you want to genrate!</p>
            <form>
                <label> Author Name</label> <br />
                <input type="text" placeholder="Author Name..." className="py-3 px-4 outline-none border-2 w-full rounded" /> <br />
                <label> Prompt </label> <br />
                <textarea type="text" placeholder="Author Name..." className="py-3 px-4 outline-none border-2 w-full rounded" />
                <p> You can post the Ai generated Image to showcase in the community!</p>
               <div className="flex item-center justifi-center mx-auto w-1/2">
                 <button type="submit" className="w-full py-2 px-3 text center font-medium border-2 rounded bg-blue-500 cursor-pointer"> Genrate Image</button> </div>
                 </form>
           </section>
            
            <div className="flex items-center justify-center lg:w-[470px]  h-72 rounded bg-gray-400">
                <img src="" alt="" className="lg:w-full h-full w-[300px] rounded" />

            </div>
            
        </div>
    )
}