export const postAPI = async function (urlPart, params, onSuccess, onFailure,userToken) {

  console.log("API Request")

  var url = "https://vtest02.azurewebsites.net/api/"

  console.log(url + urlPart)



  var stringifiedParams = JSON.stringify(params)

  try {

    let response = await fetch(url + urlPart, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+userToken
      },
      body: stringifiedParams
    });

    console.log("***********")
    console.log(response)

    let responseJson = await response;




    if (responseJson.ok) {
      console.log("ok")
      onSuccess(JSON.parse(responseJson._bodyText))

    }
    else {
      console.log("not ok")

      console.log(responseJson)
      onFailure()
    }

  } catch (error) {
    console.error(error);
  }
}