export default function fetchMock(url) {
  const response = getResponseMock(url)
  const delay = 1000
  return new Promise(resolve => {
    setTimeout(resolve, delay, response)
  })
}

function getResponseMock(url) {
  let data
  if (url.startsWith('http://fubar.com/person/')) {
    data = {
      val1: 1,
      val2: 2
    }
  } else if (url.startsWith('http://fubar.com/facility/')) {
    data = {
      val3: 3,
      val4: 4
    }
  } else if (url.startsWith('http://fubar.com/exposure/')) {
    data = {
      val5: 5
    }
  }
  return {
    json: () => Promise.resolve(data)
  }
}
