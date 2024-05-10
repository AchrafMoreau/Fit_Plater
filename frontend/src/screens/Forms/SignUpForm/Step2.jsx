const Step2 = ({ formData, handleInputChange }) => {
  return (
    <>
      <div className="mb-2">
        <label htmlFor="activityLevel" className="block mb-2 text-sm font-medium text-gray-700">Activity Level</label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={formData.activityLevel || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          <option value="morning">example</option>
          <option value="evening">example</option>
        </select>
        <p className="mt-1 text-xs text-red-500"></p>
      </div>

      <div className="mb-2">
        <label htmlFor="FavIngredients" className="block mb-2 text-sm font-medium text-gray-700">Favorite Ingredients</label>
        <input
          type="text"
          id="FavIngredients"
          name="FavIngredients"
          value={formData.FavIngredients || ''}
          onChange={handleInputChange}
          placeholder="Enter favorite ingredients"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        <p className="mt-1 text-xs text-red-500"></p>
      </div>

      <div className="mb-2">
        <label htmlFor="dietaryRestrictions" className="block mb-2 text-sm font-medium text-gray-700">Dietary Restrictions</label>
        <input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          value={formData.dietaryRestrictions || ''}
          onChange={handleInputChange}
          placeholder="Enter dietary restrictions"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        <p className="mt-1 text-xs text-red-500"></p>
      </div>

      <div className="mb-2">
        <label htmlFor="MealTiming" className="block mb-2 text-sm font-medium text-gray-700">Meal Timing Preferences</label>
        <select
          id="MealTiming"
          name="MealTiming"
          value={formData.MealTiming || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          <option value="morning">morning person</option>
          <option value="evening">evening person</option>
        </select>
        <p className="mt-1 text-xs text-red-500"></p>
      </div>

      <div className="mb-2">
        <label htmlFor="fitnessGoal" className="block mb-2 text-sm font-medium text-gray-700">Fitness Goal</label>
        <select
          id="fitnessGoal"
          name="fitnessGoal"
          value={formData.fitnessGoal || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          <option value="morning">example</option>
          <option value="evening">example</option>
        </select>
        <p className="mt-1 text-xs text-red-500"></p>
      </div>

      <div className="mb-2">
        <label htmlFor="dietaryPreferences" className="block mb-2 text-sm font-medium text-gray-700">Dietary Preferences</label>
        <select
          id="dietaryPreferences"
          name="dietaryPreferences"
          value={formData.dietaryPreferences || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          <option value="morning">example</option>
          <option value="evening">example</option>
        </select>
        <p className="mt-1 text-xs text-red-500"></p>
      </div>

      <div className="mb-2">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password || ''}
          onChange={handleInputChange}
          placeholder="Enter password"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        <p className="mt-1 text-xs text-red-500"></p>
      </div>

      <div className="mb-2">
        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword || ''}
          onChange={handleInputChange}
          placeholder="Confirm password"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        <p className="mt-1 text-xs text-red-500"></p>
      </div>
    </>
  );
}
 
export default Step2;