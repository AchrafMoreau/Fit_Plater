import axios from "axios";
import { useEffect, useState } from "react";

// Step2.js
export default function Step2({ formData, handleInputChange, errors }) {

  const [smallTables, setSmallTables] = useState({
    goals: [],
    types: [],
    productivity: [],
    allergy: []
  });


  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/smallTable`)
      .then(({data})=> setSmallTables(data))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <div className="mb-2">
        <label htmlFor="activityLevel" className="block mb-2 text-sm font-medium text-gray-700">Activity Level</label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          {smallTables.productivity.map((elm)=> <option key={elm.id} value={elm.id}>{elm.productivity}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="allergies" className="block mb-2 text-sm font-medium text-gray-700">Allergies</label>
        <select
          type="text"
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          {smallTables.allergy.map((elm)=> <option key={elm.id} value={elm.id}>{elm.allergy}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-700">Sport Type</label>
        <select
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          {smallTables.types.map((elm)=> <option key={elm.id} value={elm.id}>{elm.type}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="musclePercentage" className="block mb-2 text-sm font-medium text-gray-700">Muscle Percentage %</label>
        <input
          type="number"
          id="musclePercentage"
          name="musclePercentage"
          value={formData.musclePercentage}
          onChange={handleInputChange}
          placeholder="Enter your Muscle Percentage"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="FatPercentage" className="block mb-2 text-sm font-medium text-gray-700">Fat Percentage %</label>
        <input
          type="number"
          id="FatPercentage"
          name="FatPercentage"
          value={formData.FatPercentage}
          onChange={handleInputChange}
          placeholder="Enter your Fat Percentage"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="fitnessGoal" className="block mb-2 text-sm font-medium text-gray-700">Fitness Goal</label>
        <select
          id="fitnessGoal"
          name="fitnessGoal"
          value={formData.fitnessGoal}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
            {smallTables.goals.map((elm)=> <option key={elm.id} value={elm.id}>{elm.goal}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter password"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleInputChange}
          placeholder="Confirm password"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        {errors.password_confirmation && <p className="mt-1 text-xs text-red-500">{errors.password_confirmation}</p>}
      </div>
    </>
  );
}
