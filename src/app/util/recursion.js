class ToTree {
  index = {};
  constructor(arr) {
    arr.forEach(element => {
      if (!this.index[`${element.parentId}`]) {
        this.index[`${element.parentId}`] = [];
      }
      this.index[`${element.parentId}`] = this.index[
        `${element.parentId}`
      ].concat(element);
    });
  }
  formatTree(pid = "null") {
    return this.index[`${pid}`].map(element => {
      return Object.assign({}, element, {
        children: this.index[element.id] ? this.formatTree(element.id) : []
      });
    });
  }
  isLeafTree(id) {
    const leaf = true;
    if (Obiect.keys(index).length > 1) {
      return this.index[`${id}`] ? false : true;
    }
  }
}

export default ToTree;
