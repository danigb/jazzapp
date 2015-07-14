let route = function(root, name, params) {
  let hash = '/#' + root + '/' + name
  if (params) hash += '/' + params
  return hash
}

export default route
