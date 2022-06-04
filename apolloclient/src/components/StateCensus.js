import {
    useQuery,
  
    gql
  
  } from "@apollo/client";
  
  const STATES = gql ` 
  query Census($statename:String!) {
    censusByState(statename: $statename) {
      _id
      city
      state
      census
    }
  }
  `;
  
  export function StateCensus({name}) {
    const statename = name;
    const {loading, error, data} = useQuery(STATES, {
      variables: {statename}
    })
    if(loading) return <p>loading.....</p>
    if(error) return <p> {error.message} </p>
    return data.censusByState.map(({_id,city,state,census}) => (
      <div key={_id}>
      <p>
        {city}, {state} : {census}
      </p>
      </div>
    ));
  
  }