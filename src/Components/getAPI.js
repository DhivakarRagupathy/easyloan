export const getAPI = async function (urlPart, params, onSuccess, onFailure,userToken,callback) {

    console.log("Get API Request")
  
    var url = "http://localhost:57761/api/"
  
    console.log(url + urlPart)

    try {
  
      let response = await fetch(url + urlPart, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+userToken,
          'Content-Type': 'application/json',
        }       
      });
  
      console.log("***********")
      console.log(response)
  
      let responseJson = await response;

      if (responseJson.ok) {
        console.log("ok")
        console.log(responseJson)
        onSuccess(responseJson)

        if(typeof callback === "function")
        callback(responseJson)
      }
      else {
        console.log("not ok")
  
        console.log(responseJson)
       
      }
  
    } catch (error) {
      console.error(error);
    }
  }