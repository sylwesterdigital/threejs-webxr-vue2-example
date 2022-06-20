var dataSet = {
  user_data: {},
  create_UUID: function () {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  },
  data: function (val) {
    return (typeof (val) === 'undefined' ? localStorage.userData : localStorage.userData = val);
  },
  
  genDataKeys: function () {
    if (!this.data()) {
      this.user_data.id = 'Anon' + Math.random() * 1000;
      this.user_data.uid = this.create_UUID();
      this.user_data.map = [];
      this.user_data.cat = {}
      //this.user_data.avatar = emojis.rand.give();
      this.user_data.mode = 'new';
      this.data(JSON.stringify(this.user_data));
    } else {
      this.user_data = JSON.parse(this.data());
      //console.log(' - generated this.user_data:', this.user_data.id)
      return this.user_data.map;
    }
    function updateUserData(s) {
      this.user_data.connid = s.id;
      this.data(JSON.stringify(this.user_data));
    }
    this.user_data.userList = {};
  },
  
  isLocalStorage: function () {
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  },
  
  setup: function () {
    if (this.isLocalStorage() === true) {
      console.log(' - localStorage available');
      this.genDataKeys();
    } else {
      alert(' x x x !!! - LOCAL STORAGE UNAVAILABLE - !!! x x x')
    }
    //console.log('dataSet setup');
  },
  
  getData: function () {
    return this.user_data;
  },
  getMap: function () {
    
  },
  updateMap: function (map) {
    this.user_data.map = map;
    this.data(JSON.stringify(this.user_data));
  },
  updateCat: function (r) {
    this.user_data.cat = r;
    this.data(JSON.stringify(this.user_data));
  }
  
}
export let DataSet = dataSet;