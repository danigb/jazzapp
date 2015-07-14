let Router = {
  getRoot() {
    console.log(this.props)
    return this.props.params.root.replace('sharp', '#')
  },
  routeTo(root, name, params) {
    let hash = root +  '/' + name
    if (params) hash += '/' + params
    hash = hash.replace(/#/, 'sharp')
    return '/#' + hash
  }
}

export default Router
