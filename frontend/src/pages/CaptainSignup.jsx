import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

      const navigate = useNavigate()

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})

      const [ vehicleColor, setVehicleColor ] = useState('')
      const [ vehiclePlate, setVehiclePlate ] = useState('')
      const [ vehicleCapacity, setVehicleCapacity ] = useState('')
      const [ vehicleType, setVehicleType ] = useState('')

      const { captain, setCaptain } = React.useContext(CaptainDataContext)  


      const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
          fullname:{
            firstname:firstName,
            lastname:lastName
          },
          email:email,
          password:password,
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType

          }
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if (response.status === 201) {
          const data = response.data
          setCaptain(prevCaptain => ({ ...prevCaptain, token: data.token }));

          navigate('/captain-home')
        }
    
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
        
      }

    return (
        <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-4'  src="data:image/jpeg;base64,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" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>

      <h3 className='text-lg w-full font-medium mb-2'>What's our captain name</h3>
      <div className='flex gap-4 mb-6'>
      <input 
       required
       className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
       type="text" 
       placeholder='First name'
       value={firstName}
       onChange={(e)=>{
       setFirstName(e.target.value)
       }}
       />
       <input 
       required
       className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base' 
       type="text" 
       placeholder='Last name' 
       value={lastName}
       onChange={(e)=>{
       setLastName(e.target.value)
       }}
       />
      </div>


      <h3 className='text-lg font-medium mb-2'>What's our captain email</h3> 
       <input 
       required
       value={email}
       onChange={(e)=>{
       setEmail(e.target.value)
       }}
       className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
       type="email" 
       placeholder='email@example.com' />

       <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

       <input 
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
        value={password}
        onChange={(e)=>{
        setPassword(e.target.value)
       }}
       required type="password" 
       placeholder='password' 
       />

        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
    <button
     className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm' 
     >Create Captain Account</button>
    </form>
      <p className='text-center'>Already have account? <Link to='/captain-login' className='text-blue-600'>login here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from free travel and its affiliates to the number provided.</p>
        </div>
    </div>
    )
}

export default CaptainSignup