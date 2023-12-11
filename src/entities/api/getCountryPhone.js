// get api results
  export const getCountryPhone = (async (context) => {
    try {
        const res = await fetch(
            `http://dev.oneporttest.com/wp-json/oneport/v1/phone-code/en`,
            {
                method: 'GET',
            }
        );
        const data = await res.json();
        return data
    } catch (err) {
        console.log(err);
    }
    
  })