// function parseJSON(response){
//   return response.json()
// }

function checkStatus(response){
  if(response.status >= 200 && response.status < 500){
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}
/**
 * request the data
 * @param {*data,*url,*method} options 
 */
export default function request(options={}){
  const {data,url} = options
  options = {...options}
  options.mode = 'cors'
  delete options.url
  if(data){
    delete options.data
    options.body = JSON.stringify(data)
  }
  options.headers={
    'Content-Type':'application/json'
  }
  return fetch(url,options,{credentials:'include'})
    .then(checkStatus)
    // .then(parseJSON)
    .catch(err=>({err}))
}