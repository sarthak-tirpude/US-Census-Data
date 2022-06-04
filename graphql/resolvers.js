const Census = require('../model/census');

module.exports = {
  

  /**
   * QUERY Census Data - 
   * @returns city(with state) and population 
   * { city, population}
   * @query
   * 
     {
      censusdata{_id, city, state, census}
     }
   */
  
  censusdata: async () => {
    try {
      const data = await Census.find()
      return data.map(d => {
        return {
          ...d._doc,
          _id: d.id,
        }
      })
    } catch (error) {
      throw error
    }
  },
/**
   * QUERY Census Data by state- 
   * @returns city, state and population 
   * { city, state, population}
   * @query
   * 
     {
      censusByState(statename:"New York"){
          _id
          city
          state
          census
          
      }
}

   */
  censusByState: async ({statename}) => {
    try {
      const data = await Census.find({ state: statename })
      return data.map(d => {
        return {
          ...d._doc,
          _id: d.id,
        }
      })
    } catch (error) {
      throw error
    }
  },

  findByCity: async ({cityname}) => {
    return await Census.find({ city: cityname });
  }
  
};