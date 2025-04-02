import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);

    const locations = [
        "18C, Near ganesh temple, pawar nagar 1",
        "19A, Near yash hospital, pawar nagar 1",
        "16N, Near pwd ground, pawar nagar 2",

    ]
    return (
        <div> 
            {
                locations.map(function(elem,idx){
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-centre my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{elem}</h4>
                </div>
                })
            }
            
            
        </div>
    )
}
export default LocationSearchPanel