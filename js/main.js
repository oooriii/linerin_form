
var vm = new Vue({
 el: '#vue-app',
 data: {
   articles:[],
   formArticles: [],
 },

 data () {
   return {
     articles:[],
     formArticles: [],
   }
 },
mounted () {
    this.loading = true;
    self = this;
    
    axios.get('formArticles.json')
    .then(response => (this.formArticles =  JSON.parse(response.data)).
 /*
    .then(function(response){
       console.log(response.data);
       self.formArticles = JSON.parse(response.data);
    })
  */
    .finally(function(){
      self.loading=false;

      console.log(self.data);

    });

},
});

/*
var vm = new Vue({
 el: '#vue-header',
 data: {
   isActiveBurger: false,
   loadingBtn: false,
   message: {
     missatge: '',
     status: '',
   },
 },
 methods:{
   // generals
   toggleBurger: function(){
       this.isActiveBurger = !this.isActiveBurger;
       //console.log('toggle');
   },
 },
});
*/
