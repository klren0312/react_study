function parseJSON(response){
  return response.json()
}

function checkStatus(response){
  if(response.status >= 200 && response.status < 500){
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function getCookie(name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) {
    return decodeURIComponent(arr[2]);
  } else {
    return null;
  }
}

// function getAuthHeader(user_token='test') {
//   return ({
//     headers: {
//       'Accept': 'application/json',
//       'Authorization':  user_token,
//       'Content-Type': 'application/json',
//     },
//   });
// }

export default  function request(options = {}){
  const Authorization = getCookie('access_token')
  const {data,url} = options
  options = {method:"post", ...options}
  delete options.url
  if(data){
    delete options.data
    options.body = JSON.stringify({
      data
    })
  }
  options.headers={
    Authorization,
    'Content-Type':'application/json;charset=UTF-8'
  }
  return fetch(url,options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err=>({err}))
}
