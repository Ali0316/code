const userdata = {
    name: 'Ali',
    nameGetter: function getName(){return this.name},
    status: function callingFunction(){return this.nameGetter()},
}

console.log(userdata.status());