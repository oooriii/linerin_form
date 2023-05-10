/****
lines port
****/
Vue.component('port', {
    props:{
		port: '',
		id: Number,
    },
	template: `
<span class="mr-1 mt-1 pl-1 btn btn-outline-dark" title="delete" @click="del">
{{port}} <span class="pr-1">x</span>
</span>
	`,
	data () {
	    return {
			
		}
	},
	methods:{
		del: function(){
			this.$emit('del', this.id);
		},

	},
	computed:{

	},
  mounted (){

         },

});

/****
lines hot
****/
Vue.component('line-hot', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>	
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td>{{line.subtype}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td class="length" v-if="line.width!='other'">{{line.width}}</td>
	<td class="length" v-else>{{line.width_other}}</td>
	<td class="length" v-if="line.length!='other'">{{line.length}}</td>
	<td class="length" v-else>{{line.length_other}}</td>
	<td class="length">{{line.oiling}}</td>
	<td class="number">{{line.thickness}}</td>
</tr>
	`,
	data () {
	    return {
			type: "HOT ROLLED",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});
/****
lines hot
****/
Vue.component('line-cold', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>	
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td>{{line.subtype}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td class="length" v-if="line.width!='other'">{{line.width}}</td>
	<td class="length" v-else>{{line.width_other}}</td>
	<td class="length" v-if="line.length!='other'">{{line.length}}</td>
	<td class="length" v-else>{{line.length_other}}</td>
	<td class="length">{{line.oiling}}</td>
	<td class="number">{{line.thickness}}</td>
</tr>
	`,
	data () {
	    return {
			type: "COLD ROLLED",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});

/****
lines col
****/
Vue.component('line-galvanized', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>	
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td>{{line.subtype}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td class="length" v-if="line.width!='other'">{{line.width}}</td>
	<td class="length" v-else>{{line.width_other}}</td>
	<td class="length" v-if="line.length!='other'">{{line.length}}</td>
	<td class="length" v-else>{{line.length_other}}</td>
	<td class="length">{{line.zing}}</td>
	<td class="length">{{line.oiling}}</td>
	<td class="number">{{line.thickness}}</td>
</tr>
	`,
	data () {
	    return {
			type: "GALVANIZED",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});

/****
lines rebar
****/
Vue.component('line-rebar', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td class="grade" v-if="line.grade!='other'">{{line.grade}}</td>
	<td class="grade" v-else>{{line.grade_other}}</td>
	<td class="length">{{line.length}}</td>
	<td class="number">{{line.diameter}}</td>
</tr>
	`,
	data () {
	    return {
			type: "REBAR",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});
/****
lines wire rod
****/
Vue.component('line-wire-rod', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td class="grade" v-if="line.grade!='other'">{{line.grade}}</td>
	<td class="grade" v-else>{{line.grade_other}}</td>
	<td class="number">{{line.diameter}}</td>
</tr>
	`,
	data () {
	    return {
			type: "WIRE ROD",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});
/****
lines merchant
****/
Vue.component('line-merchant1', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr v-if="line.subtype!='Flat Bars' && line.subtype!='Equal Angles'">
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>	
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td class="grade">{{line.subtype}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td v-if="line.length!='other'" class="number">{{line.length}}</td>
	<td v-else class="number">{{line.length_other}}</td>
	<td>{{line.size}}</td>
</tr>
	`,
	data () {
	    return {
			type: "MERCHANTS",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});
Vue.component('line-merchant2', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr v-if="line.subtype=='Flat Bars' || line.subtype=='Equal Angles'">
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>	
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td class="grade">{{line.subtype}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td v-if="line.length!='other'" class="number">{{line.length}}</td>
	<td v-else class="number">{{line.length_other}}</td>
	<td>{{line.d1}}</td>
	<td>{{line.d2}}</td>
</tr>
	`,
	data () {
	    return {
			type: "MERCHANTS",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});
/****
lines beam
****/
Vue.component('line-beam', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>	
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td class="grade" v-if="line.grade!='other'">{{line.grade}}</td>
	<td class="grade" v-else>{{line.grade_other}}</td>
	<td v-if="line.length!='other'" class="number">{{line.length}}</td>
	<td v-else class="number">{{line.length_other}}</td>
	<td>{{line.product}}</td>
</tr>
	`,
	data () {
	    return {
			type: "BEAM",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});
/****
lines cement
****/
Vue.component('line-cement', {
    props:{
		linies: Object,
		line: Object,
		id: Number,
    },
	template: `
<tr>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td class="type" v-if="line.cement_type!='other'">{{line.cement_type}}</td>
	<td class="type" v-else>{{line.cement_type_other}}</td>
	<td class="grade">{{line.format}}</td>
</tr>
	`,
	data () {
	    return {
			type: "CEMENT",
		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});
Vue.component('lines-articles', {
    props:{
		//linies: Array,
		linies: Object,
    },
	template: `
<div class="col-12 col-md-6 lines-articles p-0">
<h3>Lines articles</h3>
	<section v-if="linies['REBAR'].length > 0">
	<h4>REBAR</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>grade</th><th>length</th><th>diameter</th></tr>
				<line-rebar v-for="(line, id) in linies['REBAR']" :key="id" :linies="linies" :line="line" :id="id"></line-rebar>
			</table>
	</section>

	<section v-if="linies['WIRE ROD'].length > 0">
	<h4>WIRE ROD</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>grade</th><th>diameter</th></tr>
				<line-wire-rod v-for="(line, id) in linies['WIRE ROD']" :key="id" :linies="linies" :line="line" :id="id"></line-wire-rod>
			</table>
	</section>

	<section v-if="linies['MERCHANTS'].length > 0">
	<h4>MERCHANT BARS</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>subtype</th><th>grade</th><th>length</th><th>size</th></tr>
				<line-merchant1 v-for="(line, id) in linies['MERCHANTS']" :key="id" :linies="linies" :line="line" :id="id"></line-merchant1>
			</table>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>subtype</th><th>grade</th><th>length</th><th>a</th><th>s</th></tr>
				<!--
				<line-merchant2 v-for="(line, id) in _.find(linies['MERCHANTS'], function(o) { return o.subtype=='Flat Bars'; })" :key="id" :linies="linies" :line="line" :id="id"></line-merchant2>
				-->
				<line-merchant2 v-for="(line, id) in linies['MERCHANTS']" :key="id" :linies="linies" :line="line" :id="id"></line-merchant2>
			</table>
	</section>

	<section v-if="linies['BEAM'].length > 0">
	<h4>BEAMS</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>grade</th><th>length</th><th>product</th></tr>
				<line-beam v-for="(line, id) in linies['BEAM']" :key="id" :linies="linies" :line="line" :id="id"></line-beam>
			</table>
	</section>
	
	<section v-if="linies['GALVANIZED'].length > 0">
	<h4>GALVANIZED</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>subtype</th><th>grade</th><th>width</th><th>length</th><th>zing</th><th>oiling</th><th>thick</th></tr>
				<line-galvanized v-for="(line, id) in linies['GALVANIZED']" :key="id" :linies="linies" :line="line" :id="id"></line-galvanized>
			</table>
	</section>
	
	<section v-if="linies['HOT ROLLED'].length > 0">
	<h4>HOT ROLLED</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>subtype</th><th>grade</th><th>width</th><th>length</th><th>oiling</th><th>thick</th></tr>
				<line-hot v-for="(line, id) in linies['HOT ROLLED']" :key="id" :linies="linies" :line="line" :id="id"></line-hot>
			</table>
	</section>	
	

	<section v-if="linies['COLD ROLLED'].length > 0">
	<h4>COLD ROLLED</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>subtype</th><th>grade</th><th>width</th><th>length</th><th>oiling</th><th>thick</th></tr>
				<line-cold v-for="(line, id) in linies['COLD ROLLED']" :key="id" :linies="linies" :line="line" :id="id"></line-cold>
			</table>
	</section>		


	<section v-if="linies['CEMENT'].length > 0">
	<h4>CEMENT</h4>
			<table>
				<tr><th></th><th>quantity</th><th>unit</th><th>type</th><th>format</th></tr>
				<line-cement v-for="(line, id) in linies['CEMENT']" :key="id" :linies="linies" :line="line" :id="id"></line-cement>
			</table>
	</section>
</div>
	`,
	data () {
	    return {

		}
	},
	methods:{
		del: function(type,index){
			      this.linies[type].splice(index,1);
			      // funca
			      //this.$forceUpdate();
		},

	},
	computed:{

	},
  mounted (){

         },

});


/*****
REBAR
*****/
Vue.component('rebar-form', {
    props:{
		article: Object,
		articles: Object,
    },
	template: `
<div>

	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Steel Grade</h3>
		<div>
			<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades" @click="setValue('grade',g)">{{g}}</div>
			<div class="btn btn-outline-dark col-5 col-md-3  m-1 pl-0 pr-0" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other</div>
		</div>

		<div class="pl-1" v-if="this.article.grade=='other'" >
			<input type="text" v-model="article.grade_other" placeholder="Please enter grade"/>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12 row pl-0" v-if="article.grade">
			<div class="col-12 col-md-6">
				<h3 id="grade" class="pl-1 mt-1">Length</h3>
				<div class="row pl-3">
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
				</div>
				<div class="pl-1" v-if="this.article.length=='other'" >
					<input type="text" v-model="article.length_other" placeholder="Please enter length"/>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<h3 class="pl-1 mt-1">Unit</h3>
				<div class="row pl-3">
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
				</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 pl-0" v-if="article.unit && article.length">
			<h3 id="length" class="pl-1 mt-1">Diameters (mm)</h3>
			<p class="pl-1">Plis select all the Diameters you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
			<div class="row pl-3">
				<div class="btn btn-outline-dark col-2 col-md-1 m-1 pl-0 pr-0" :class="{active:article.diameter==d}" v-for="d in diameters" @click="addDiameter(d)">{{d}}</div>
			</div>
		</div>
	</transition>

</div>
	`,
	data () {
	    return {
			grades: [
/*
				"BS4449 GR B500B",
				"NFA 35-080-1 B 500B",
				"ASTM A615 GR 60",
*/				
				"B500B",
				"ASTM GR60",
				//"Other grade - please specify",
			],
			lengths: [
//				"In 12 meters standard bar length",
				//"In other length (please specify)",
//				"In coils",
				"12m",
				"Coils",
			],
			unities: [
				"MT",
				"KGS",
//				"PCS",
			],
			diameters: [
				6,
				8,
				10,
				12,
				14,
				16,
				20,
				25,
				28,
				32,
				40,
			],
			other: false,

		}
	},
	methods:{
		addDiameter: function(d){
			//console.log("dia: "+d);
			// patch x copiar obj enlloc d'agafar referència
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.diameter = d;
			this.articles['REBAR'].push(this.newArt);

			this.$emit('new-element');

		},

		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();
			
			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},

	},
	computed:{

	},
  mounted (){
      this.article.unit = 'MT';
  },

});
/*****
WIRED ROD
*****/
Vue.component('merchant-bars-form', {
    props:{
		article: Object,
		articles: Object,
    },
	template: `
<div>

	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Subtypes</h3>
		<div>
			<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.subtype==s}" v-for="s in subtypes" @click="setValue('subtype',s)">{{s}}</div>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12 pl-0" v-if="article.subtype">
			<h3 id="subtype" class="pl-1 mt-1">Steel Grade</h3>
			<div class="row pl-3">
				<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades" @click="setValue('grade',g)">{{g}}</div>
				<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other</div>
			</div>

			<div class="pl-1" v-if="this.article.grade=='other'" >
				<input type="text" v-model="article.grade_other" placeholder="Please enter grade"/>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 row pl-0" v-if="article.grade">
			<div class="col-12 col-md-6">
				<h3 id="grade" class="pl-1 mt-1">Length</h3>
				<div class="row pl-3">
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
				</div>
				<div class="pl-1" v-if="this.article.length=='other'" >
					<input type="text" v-model="article.length_other" placeholder="Please enter length"/>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<h3 class="pl-1 mt-1">Unit</h3>
				<div class="row pl-3">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
				</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 p-0" v-if="article.subtype && article.grade && article.length && article.unit">
			<h3 id="length" class="pl-1 mt-1">{{sizes[article.subtype].label}} (mm)</h3>
			<!-- flat i angle bars - 2 dimensions -->
			<div v-if="article.subtype == 'Flat Bars' || article.subtype == 'Equal Angles'" class="row">
				<div class="col-12">
					<img class="aux-sizes" :src="sizes[article.subtype].img"/>
				</div>
				<div class="col-12">
					<h4 class="pl-1 mt-1">{{sizes[article.subtype].label1}}</h4>
					<div>
					<!--
						<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.d1==d1}" v-for="d1 in Object.keys(this.sizes[article.subtype].values)" @click="setValue('d1',d1)">{{d1}}</div>
					-->
						<div class="btn btn-outline-dark m-1 pl-0 pr-0" :class="[{active:article.d1==d1}, article.subtype == 'Equal Angles' ? 'col-3 col-md-2' : 'col-2']" v-for="d1 in Object.keys(this.sizes[article.subtype].values)" @click="setValue('d1',d1)">{{d1}}</div>
					</div>
				</div>

			</div>
			<div v-else>
			<p class="pl-1">Plis select all the Sizes you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
			<!--
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.size==s}" v-for="s in sizes[article.subtype].values" @click="addProduct('size',s)">{{s}}</div>
			-->
				<div class="btn btn-outline-dark m-1 pl-0 pr-0" :class="[{active:article.size==s}, article.subtype == 'T Bars' ? 'col-5 col-md-2' : 'col-2']" v-for="s in sizes[article.subtype].values" @click="addProduct('size',s)">{{s}}</div>
			</div>
		</div>

	</transition>
	<transition name="fade">
		<div class="col-12 p-0" v-show="article.subtype && article.grade && article.length && article.unit && article.d1">
			<!-- flat i angle bars - 2 dimensions -->
			<div v-if="article.subtype == 'Flat Bars' || article.subtype == 'Equal Angles'" class="row">
				<div class="col-12">
					<h4 id="d1" ref="d2" class="pl-1 mt-1">{{sizes[article.subtype].label2}}</h4>
			<p class="pl-1">Plis select all the Sizes you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
					<div>
						<div class="btn btn-outline-dark col-2 col-md-1 m-1 pl-0 pr-0" :class="{active:article.d2==d2}" v-for="d2 in this.sizes[this.article.subtype].values[this.article.d1]" @click="addProduct('d2',d2)">{{d2}}</div>
					</div>
				</div>

			</div>
		</div>

	</transition>

</div>

	`,
	data () {
	    return {
			grades: [
				"S275JR",
        		"S355JR",
				//"Other grade - please specify",
			],
      	  subtypes: [
        "Flat Bars",
        "Equal Angles",
        "Square Bars",
        "Round Bars",
        "T Bars",
      ],
     	 subtype: "",
    	 lengths: [
				"6m",
				"12m",
		],
		unities: [
			"MT",
//        	"PCS",
		],
      sizes: {

        "Flat Bars": {
            label: "Sizes",
			label1: "B",
			label2: "S",
			//img: "imgs/flat.png",
			img: "https://oooriii.github.io/linerin_form/imgs/flat.png",
			s: [3,4,5,6,8,10,12,16,20,25,30,35,40,50],
            values: {
				'10': [3,4,5],
				'12': [3,4,5,6],
				'14': [3,4,5,6,8],
				'15': [3,4,5,6,8,10],
				'16': [3,4,5,6,8,10],
				'18': [3,4,5,6,8,10],
				'20': [3,4,5,6,8,10],
				'25': [3,4,5,6,8,10,12],
				'30': [3,4,5,6,8,10,12,16,20],
				'35': [3,4,5,6,8,10,12,16,20],
				'40': [3,4,5,6,8,10,12,16,20,25],
				'45': [4,5,6,8,10,12,16,20,25],
				'50': [4,5,6,8,10,12,16,20,25,30],
				'60': [6,8,10,12,16,20,25,30],
				'70': [6,8,10,12,16,20,25,30],
				'80': [6,8,10,12,16,20,25,30],
				'90': [6,8,10,12,16,20,25,30],
				'100': [6,8,10,12,16,20,25,30],
				'110': [8,10,12,16,20,25,30],
				'120': [8,10,12,16,20,25,30],
				'130': [8,10,12,16,20,25,30],
				'140': [8,10,12,16,20,25,30],
				'150': [8,10,12,16,20,25,30],
				'160': [10,12,16,20,25,30],
				'170': [10,12,16,20,25,30],
				'180': [10,12,16,20,25,30],
				'190': [10,12,16,20,25,30],
				'200': [10,12,16,20,25,30,35,40,50],
				'210': [10,12,16,20,25,30,35,40,50],
				'220': [10,12,16,20,25,30,35,40,50],
				'230': [10,12,16,20,25,30,35,40,50],
				'240': [10,12,16,20,25,30,35,40,50],
				'250': [10,12,16,20,25,30,35,40,50],
			},
        },

        "Equal Angles": {
            label: "Sizes",
			label1: "A",
			label2: "S",
			//img: "imgs/equal_angles.png",
			img: "https://oooriii.github.io/linerin_form/imgs/equal_angles.png",
			s: [2.3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,22,24,25,26,28],
            values: {
				'20x20': [2.3,3,4],
				'25x25': [2.3,3,4,5],
				'30x30': [2.3,3,4,5],
				'35x35': [2.3,3,4,5,6],
				'38x38': [2.3,3,4,5,6],
				'40x40': [2.3,3,4,5,6],
				'45x45': [3,4,5,6,7],
				'50x50': [3,4,5,6,7,8,9],
				'55x55': [4,5,6,7,8,9,10],
				'60x60': [4,5,6,7,8,9,10],
				'65x65': [4,5,6,7,8,9,10,11],
				'70x70': [4,5,6,7,8,9,10,11],
				'75x75': [5,6,7,8,9,10,11,12],
				'80x80': [6,7,8,9,10,11,12],
				'90x90': [6,7,8,9,10,11,12],
				'100x100': [7,8,9,10,11,12],
				'110x110': [7,8,9,10,11,12],
				'120x120': [8,9,10,11,12,13,14,15],
				'125x125': [8,9,10,11,12,13,14,15,16],
				'130x130': [8,9,10,11,12,13,14,15,16],
				'140x140': [10,11,12,13,14,15,16,18,20,22,24,25,26,28],
				'150x150': [10,11,12,13,14,15,16,18,20,22,24,25,26,28],
				'160x160': [10,11,12,13,14,15,16,18,20,22,24,25,26,28],
				'180x180': [10,11,12,13,14,15,16,18,20,22,24,25,26,28],
				'200x200': [10,11,12,13,14,15,16,18,20,22,24,25,26,28],
			},
        },
        "Square Bars": {
          label: "Sizes",
          values: [
            "8x8",
            "10x10",
            "12x12",
            "14x14",
            "16x16",
            "18x18",
            "20x20",
            "22x22",
            "25x25",
            "30x30",
            "35x35",
            "40x40",
            "45x45",
            "50x50",
            "60x60",
            "70x70",
            "80x80",
          ],
        },
        "Round Bars": {
          label: "Diameter",
          values: [
            "4.5",
            "5.0",
            "5.5",
            "6.0",
            "6.5",
            "7.0",
            "8.0",
            "9.0",
            "10.0",
            "11.0",
            "11.5",
            "12.0",
            "13.0",
            "14.0",
            "15.0",
            "16.0",
            "18.0",
            "19.0",
            "20.0",
            "22.0",
            "24.0",
            "25.0",
            "26.0",
            "28.0",
            "30.0",
            "32.0",
            "35.0",
            "36.0",
            "38.0",
            "40.0",
            "42.0",
            "45.0",
            "48.0",
            "50.0",
            "52.0",
            "54.0",
            "55.0",
            "56.0",
            "58.0",
            "60.0",
          ],
        },
        "T Bars": {
          label: "Sizes",
          values: [
            "20x20x3",
            "25x25x3",
            "25x25x3,5",
            "30x30x3",
            "30x30x4",
            "35x35x4",
            "35x35x4,5",
            "40x40x4",
            "40x40x5",
            "45x45x5,5",
            "50x50x5",
            "50x50x6",
            "60x60x7",
            "70x70x8",
            "80x80x9",
            "90x90x10",
            "100x100x11",
            "120x120x13",
            "140x140x15",
          ],
	  	},

      },


			newArt: {},

		}
	},
	methods:{


		setValue: function(variable,val){
			this.article[variable]=val;

			if(variable=='subtype'){
				this.subtype=val;
				this.article.d1 = null;
				this.article.d2 = null;
			}

			this.$forceUpdate();

/*
			// focus - cal fo´çar i fer truquet
			if(variable=='d1'){
				//this.article[variable]=val;
				p = document.getElementById('p');
        		p.style.visibility = 'visible';
				setTimeout(function(){
						p.focus();
				}, 500);

				//document.getElementById('p').focus();
				//this.article['d1']=val;
				setTimeout(function(){
					p.style.visibility = 'hidden';
				}, 1000);
				//this.$forceUpdate();
			}
*/
			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},

		addProduct: function(variable,val){
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt[variable] = val;
			this.articles['MERCHANTS'].push(this.newArt);

			this.$emit('new-element');
		},

	},
	computed:{
		dim2: function(){
			//console.log(this.sizes[this.subtype].s);
			//return this.sizes[this.subtype].s;
			//console.log(this.sizes[this.article.subtype].s);
			//return this.sizes[this.article.subtype].s;
			console.log(this.sizes[this.article.subtype].values[this.article.d1]);
			return this.sizes[this.article.subtype].values[this.article.d1];
		},
	},
  mounted (){
	  this.article.unit = 'MT';
	  //console.log(this.sizes['Flat Bars'].s);
	  //console.log(Object.keys(this.sizes['Flat Bars'].values));
  },

});

/*****
WIRED ROD
*****/
Vue.component('wire-rod-form', {
    props:{
		article: Object,
		articles: Object,
    },
	template: `
<div>
	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Steel Grade</h3>
		<div>
			<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades" @click="setValue('grade',g)">{{g}}</div>
			<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other</div>
		</div>

		<div class="pl-1 mt-1" v-if="this.article.grade=='other'" >
			<input type="text" v-model="article.grade_other" placeholder="Please enter grade"/>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12 p-0" v-if="article.grade">
			<h3 id="grade" class="pl-1 mt-1">Diameters (mm)</h3>
			<p class="pl-1">Plis select all the Diameters you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
			<div class="row pl-3">
				<div class="btn btn-outline-dark col-2 col-md-1 m-1 pl-0 pr-0" :class="{active:article.diameter==d}" v-for="d in diameters" @click="addDiameter(d)">{{d}}</div>
			</div>
		</div>
	</transition>

	<transition name="fade" v-if="this.article.grade">
		<div>
			<h3 class="pl-1 mt-1">Unit:</h3><div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0 active">{{article.unit}}</div>
		</div>
	  </transition>
</div>
	`,
	data () {
	    return {
			grades: [
				"SAE1006",
				"SAE1008",
				"SAE1010",
				"SAE1012",
				"SAE1015",
				"SAE1018",
				//"Other grade - please specify",
			],

			unities: [
				"MT",
			],
			diameters: [
				5.5,
				6,
				6.5,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
			],
			newArt: {},
		}
	},
	methods:{
		addDiameter: function(d){
			//console.log("dia: "+d);
			// patch x copiar obj enlloc d'agafar referència
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.diameter = d;
			this.articles['WIRE ROD'].push(this.newArt);

			this.$emit('new-element');

		},

		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();

			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},

	},
	computed:{

	},
  mounted (){
	  this.article.unit = 'MT';
  },

});

/*****
BEAMS
*****/
Vue.component('beam-form', {
    props:{
		article: Object,
		articles: Object,
    },
	template: `
<div>
	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Steel Grade</h3>
		<div>
			<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in qualities" @click="setValue('grade',g)">{{g}}</div>
			<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other</div>
		</div>
		<transition name="fade">
			<div class="pl-1 mt-1" v-if="this.article.grade=='other'" >
				<input type="text" v-model="article.grade_other" placeholder="Please enter grade"/>
			</div>
		</transition>
	</div>

	<transition name="fade">
		<div class="col-12 row" v-if="article.grade">
			<div class="col-12 col-md-6 p-0">
				<h3 id="grade" class="pl-1 mt-1">Length</h3>
				<div class="row pl-3">
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
				</div>
				<div class="pl-1" v-if="this.article.length=='other'" >
					<input type="text" v-model="article.length_other" placeholder="Please enter length"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0">
				<h3 class="pl-1 mt-1">Unit</h3>
				<div class="row pl-3">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
				</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 p-0" v-if="article.length">
			<h3 id="length" class="pl-1 mt-1">Subtypes</h3>
			<div class="row pl-3">
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.subtype==s}" v-for="s in subtypes" @click="setValue('subtype',s)">{{s}}</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 p-0" v-if="article.subtype">
			<h3 id="subtype" class="pl-1 mt-1">Product</h3>
			<p class="pl-1">Plis select all the products you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
			<div class="row pl-3">
				<div class="btn btn-outline-dark col-3 col-md-2 m-1 pl-0 pr-0" :class="{active:article.product==p}" v-for="p in products[article.subtype]" @click="selectProduct(p)">{{p}}</div>
			</div>
		</div>
	</transition>


</div>
	`,
	data () {
	    return {
			qualities: [
				"S275JR",
				"S355JR",
			],
			lengths: [
				"6m",
				"12m",
			],
			unities: [
				"MT",
				"PCS",
			],
			subtypes:[
				"UPN",
				"UPE",
				"IPN",
				"IPE",
				"HEA",
				"HEB",
				"HL",
			],
			products:{
				UPN: [
					"UPN 50",
					"UPN 65",
					"UPN 80",
					"UPN 100",
					"UPN 120",
					"UPN 140",
					"UPN 160",
					"UPN 180",
					"UPN 200",
					"UPN 220",
					"UPN 240",
					"UPN 260",
					"UPN 280",
					"UPN 300",
					"UPN 320",
					"UPN 350",
					"UPN 380",
					"UPN 400",
				],
				UPE: [
					"UPE 80",
					"UPE 100",
					"UPE 120",
					"UPE 140",
					"UPE 160",
					"UPE 180",
					"UPE 200",
					"UPE 220",
					"UPE 240",
					"UPE 270",
					"UPE 300",
					"UPE 330",
					"UPE 360",
					"UPE 400",
				],
				IPN: [
					"IPN 80",
					"IPN 100",
					"IPN 120",
					"IPN 140",
					"IPN 160",
					"IPN 180",
					"IPN 200",
					"IPN 220",
					"IPN 240",
					"IPN 260",
					"IPN 280",
					"IPN 300",
					"IPN 320",
					"IPN 340",
					"IPN 360",
					"IPN 380",
					"IPN 400",
					"IPN 450",
					"IPN 500",
					"IPN 550",
					"IPN 600",
				],
				IPE: [
					"IPE 80",
					"IPE 100",
					"IPE 120",
					"IPE 140",
					"IPE 160",
					"IPE 180",
					"IPE 200",
					"IPE 220",
					"IPE 240",
					"IPE 270",
					"IPE 300",
					"IPE 330",
					"IPE 360",
					"IPE 400",
					"IPE 450",
					"IPE 500",
					"IPE 550",
					"IPE 600",
					"IPE 750 x 134",
					"IPE 750 x 147",
					"IPE 750 x 173",
					"IPE 750 x 196",
					"IPE 750 x 220",
				],
				HEA: [
					"HEA 100",
					"HEA 120",
					"HEA 140",
					"HEA 160",
					"HEA 180",
					"HEA 200",
					"HEA 220",
					"HEA 240",
					"HEA 260",
					"HEA 280",
					"HEA 300",
					"HEA 320",
					"HEA 340",
					"HEA 360",
					"HEA 400",
					"HEA 450",
					"HEA 500",
					"HEA 550",
					"HEA 600",
					"HE 600 x 337",
					"HE 600 x 399",
					"HEA 650",
					"HE 650 x 343",
					"HE 650 x 407",
					"HEA 700",
					"HE 700 x 352",
					"HE 700 x 418",
					"HEA 800",
					"HE 800 x 373",
					"HE 800 x 444",
					"HEA 900",
					"HE 900 x 391",
					"HE 900 x 466",
					"HEA 1000",
					"HE 1000 x 249",
					"HE 1000 x 393",
					"HE 1000 x 415",
					"HE 1000 x 438",
					"HE 1000 x 494",
					"HE 1000 x 584",
				],
				HEB: [
					"HEB 100",
					"HEB 120",
					"HEB 140",
					"HEB 160",
					"HEB 180",
					"HEB 200",
					"HEB 220",
					"HEB 240",
					"HEB 260",
					"HEB 280",
					"HEB 300",
					"HEB 320",
					"HEB 340",
					"HEB 360",
					"HEB 400",
					"HEB 450",
					"HEB 500",
					"HEB 550",
					"HEB 600",
					"HE 600 x 337",
					"HE 600 x 399",
					"HEB 650",
					"HE 650 x 343",
					"HE 650 x 407",
					"HEB 700",
					"HE 700 x 352",
					"HE 700 x 418",
					"HEB 800",
					"HE 800 x 373",
					"HE 800 x 444",
					"HEB 900",
					"HE 900 x 391",
					"HE 900 x 466",
					"HEB 1000",
					"HE 1000 x 249",
					"HE 1000 x 393",
					"HE 1000 x 415",
					"HE 1000 x 438",
					"HE 1000 x 494",
					"HE 1000 x 584",
				],
				HL: [
					"HL 920 x 1077",
					"HL 920 x 1194",
					"HL 920 x 1269",
					"HL 920 x 1377",
					"HL 920 x 344",
					"HL 920 x 368",
					"HL 920 x 390",
					"HL 920 x 420",
					"HL 920 x 449",
					"HL 920 x 491",
					"HL 920 x 537",
					"HL 920 x 588",
					"HL 920 x 656",
					"HL 920 x 725",
					"HL 920 x 787",
					"HL 920 x 970",
					"HL 920 x 1077",
					"HL 920 x 1194",
					"HL 920 x 1269",
					"HL 920 x 1377",
					"HL 1000 A",
					"HL 1000 AA",
					"HL 1000 B",
					"HL 1000 M",
					"HL 1000 x 443",
					"HL 1000 x 483",
					"HL 1000 x 539",
					"HL 1000 x 554",
					"HL 1000 x 591",
					"HL 1000 x 642",
					"HL 1000 x 748",
					"HL 1000 x 883",
					"HL 1000 x 976",
					"HL 1100 A",
					"HL 1100 B",
					"HL 1100 M",
					"HL 1100 R",
					"HL 1100 x 548",
					"HL 1100 x 607",
				],
			},
			newArt: {},

		}
	},
	methods:{

		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();

			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},
		selectProduct: function(p){
			// patch x copiar obj enlloc d'agafar referència
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.product = p;
			this.articles['BEAM'].push(this.newArt);
			//this.articles['BEAM'] = _.uniq(this.articles['BEAM']);

			this.$emit('new-element');

		},


	},
	computed:{

	},
  mounted (){
    this.article.unit = 'MT';
  },

});
/*****
CEMENT
*****/
Vue.component('cement-form', {
    props:{
		    article: Object,
      articles: Object,
    },
	template: `
<div>
	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Cement type</h3>
		<div>
			<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.cement_type==ct}" v-for="ct in Object.keys(cement_types_legend)" @click="setValue('cement_type',ct)">{{ct}}</div>
			<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.cement_type=='other'}" @click="setValue('cement_type','other')">Other quality</div>
		</div>

			<div class="row" v-if="this.article.cement_type=='other'" >
				<input type="text" v-model="article.cement_type_other" placeholder="Please enter type"/>
			</div>
		<transition name="fade">
			<div class="pl-1" v-if="this.article.cement_type">
				<em>{{cement_types_legend[article.cement_type]}}</em>
			</div>
		</transition>
	</div>
  <transition name="fade">
	   <div class="col-12 pl-0" v-if="this.article.cement_type">
		   <h3 id="quality" class="pl-1 mt-1">Bagged cement / Bulk Cement</h3>
			<p class="pl-1">Plis select all the products you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
		   <div class="row pl-3">

          		<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.format==format}" v-for="format in formats" @click="selectProduct(format)">{{format}}</div>

		   </div>

	 </div>
  </transition>
	<transition name="fade" v-if="this.article.cement_type">
		<div>
			<h3 class="pl-1 mt-1">Unit:</h3><div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0 active">{{article.unit}}</div>
		</div>
	  </transition>
</div>

	`,
	data () {
	    return {
			cement_types_legend: {
				'CEM I 42.5 N':'Medium-strength, Normal Hardening, Portland Cement with at least 95% clinker',
				'CEM I 42.5 R':'Medium-strength, Rapid Hardening, Portland Cement with at least 95% clinker',
				'CEM I 52.5 N':'High-strength, Normal Hardening, Portland Cement with at least 95% clinker',
				'CEM II 32.5 N':'Low-strength, Normal Hardening, Portland Cement with max. additive content of 35%',
				'CEM II 42.5 R':'Medium-strength, Rapid Hardening, Portland Cement with max. additive content of 35%',
				'CEM I 42.5 N-SR':'Sulfate Resistant, Medium-strength, Normal Hardening, Portland Cement with at least 95% clinker',
				'CEM I 42,5 R-SR':'Sulfate Resistant, Rapid-strength, Normal Hardening, Portland Cement with at least 95% clinker',
				'WHITE CEMENT CEM II 42.5N':'White Cement, Medium-strength, Normal Hardening, Portland Cement with max. additive content of 35%',
			},
			formats: [
				'25kgs bags',
				'50kgs bags',
				'Bulk in big bags',
				'Bulk',
				//'Other  - specify',
			],

// fer units fixe en aquest cas
			unities: [
				"MT",
				//"KGS",
				//"PCS",
			],


		}
	},
	methods:{

		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();

			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},
		
    	selectProduct: function(p){
			// patch x copiar obj enlloc d'agafar referència
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.format = p;
			this.articles['CEMENT'].push(this.newArt);
			//this.articles['BEAM'] = _.uniq(this.articles['BEAM']);

			this.$emit('new-element');

		},
	},
	computed:{

	},
  mounted (){
	  this.article.unit = 'MT';
	  this.article.cement_type = null;
  },

});

/*****
	HOT ROLLED
*****/
Vue.component('hot-form', {
    props:{
		article: Object,
		articles: Object,
    },
	template: `
<div>

	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Subtypes</h3>
		<div>
			<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.subtype==s}" v-for="s in subtypes" @click="setValue('subtype',s)">{{s}}</div>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12 p-0" v-if="article.subtype">
			<h3 id="subtype" class="col-12 pl-1 mt-1">Steel Grade</h3>
			<div class="">
				<h5 class="col-12 pl-1 mt-1">Structural steel</h5>
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades1" @click="setValue('grade',g)">{{g}}</div>
				<h5 class="col-12 pl-1 mt-1">pressure vessel steel</h5>
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades2" @click="setValue('grade',g)">{{g}}</div>
				<h5 class="col-12 pl-1 mt-1">Cold forming and stamping steel</h5>
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades3" @click="setValue('grade',g)">{{g}}</div>
				<h5 class="col-12 pl-1 mt-1">Other</h5>
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other</div>
			</div>

			<div class="pl-1" v-if="this.article.grade=='other'" >
				<input type="text" v-model="article.grade_other" placeholder="Please enter grade"/>
			</div>
		</div>
	</transition>
	<transition name="fade">
		<div class="col-12 row" v-if="article.grade">
			<div class="col-12 col-md-6 p-0">
				<h3 id="grade" class="col-12 pl-1 mt-1">Width (mm)</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.width==w}" v-for="w in widths" @click="setValue('width',w)">{{w}}</div>
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.width=='other'}" @click="setValue('width','other')">Other</div>
				</div>
				<div class="row" v-if="this.article.width=='other'" >
					<input type="text" v-model="article.width_other" placeholder="Please enter width"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0" v-show="article.subtype=='Sheets (HRS)'">
				<h3 class="col-12 pl-1 mt-1">Length</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
				</div>
				<div class="pl-1" v-if="this.article.length=='other'" >
					<input type="text" v-model="article.length_other" placeholder="Please enter length"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0">
				<h3 id="length" class="col-12 pl-1 mt-1">Oiling range</h3>
				<div class="">
					<div class="btn btn-outline-dark col-5 m-1 pl-0 pr-0" :class="{active:article.oiling==o}" v-for="o in oilings" @click="setValue('oiling',o)">{{o}}</div>
				</div>
			</div>

			<div class="col-12 col-md-6 p-0">
				<h3 class="col-12 pl-1 mt-1">Unit</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
				</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 p-0" v-if="article.unit && article.width">
			<h3 id="unit" class="col-12 pl-1 mt-1">Thickness</h3>
			<p class="pl-1">Plis select all the Thicknesses you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
			<div class="">
				<div class="btn btn-outline-dark col-2 col-md-1 m-1 pl-0 pr-0pl-0 pr-0" :class="{active:article.thickness==t}" v-for="t in thicknesses" @click="addThickness(t)">{{t}}</div>
			</div>
		</div>
	</transition>

</div>
	`,
	data () {
	    return {
			subtypes: [
				"Coils (HRC)",
				"Sheets (HRS)",
			],
			grades1: [
				"S185",
				"S235",
				"S275",
				"S355",
			],
			grades2: [
				"P245",
				"P265",
				"P310",
				"P355",
			],
			grades3: [
				"DD11",
				"DD12",
				"DD13",
				"DD14",
			],
			widths: [
				1000,
				1250,
				1500,
				2000,
			],
			lengths: [
				2000,
				2500,
				3000,
				3500,
				4000,
				6000,
			],
			unities: [
				"MT",
				"KGS",
//				"PCS/COILS",
			],
			oilings: [
				"Without",
			],
			thicknesses: [
				1.5,
				2,
				2.5,
				3,
				4,
				5,
				6,
				8,
				10,
				12,
				15,
				20,
			],
			other: false,

		}
	},
	methods:{
		addThickness: function(t){
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.thickness = t;
			this.articles['HOT ROLLED'].push(this.newArt);

			this.$emit('new-element');

		},

		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();

			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},

	},
	computed:{

	},
  mounted (){
      this.article.unit = 'MT';
	  this.article.oiling = 'Without';
  },

});

/*****
	COLD ROLLED
*****/
Vue.component('cold-form', {
    props:{
		article: Object,
		articles: Object,
    },
	template: `
<div>

	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Subtypes</h3>
		<div>
			<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.subtype==s}" v-for="s in subtypes" @click="setValue('subtype',s)">{{s}}</div>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12 p-0" v-if="article.subtype">
			<h3 id="subtype" class="col-12 pl-1 mt-1">Steel Grade</h3>
			<div class="">
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades" @click="setValue('grade',g)">{{g}}</div>

				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other</div>
			</div>

			<div class="pl-1" v-if="this.article.grade=='other'" >
				<input type="text" v-model="article.grade_other" placeholder="Please enter grade"/>
			</div>
		</div>
	</transition>
	<transition name="fade">
		<div class="col-12 row" v-if="article.grade">
			<div class="col-12 col-md-6 p-0">
				<h3 id="grade" class="col-12 pl-1 mt-1">Width (mm)</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.width==w}" v-for="w in widths" @click="setValue('width',w)">{{w}}</div>
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.width=='other'}" @click="setValue('width','other')">Other</div>
				</div>
				<div class="" v-if="this.article.width=='other'" >
					<input type="text" v-model="article.width_other" placeholder="Please enter width"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0" v-show="article.subtype=='Sheets (CRS)'">
				<h3 class="col-12 pl-1 mt-1">Length</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
				</div>
				<div class="pl-1" v-if="this.article.length=='other'" >
					<input type="text" v-model="article.length_other" placeholder="Please enter length"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0">
				<h3 id="length" class="col-12 pl-1 mt-1">Oiling range</h3>
				<div class="">
					<div class="btn btn-outline-dark col-5 m-1 pl-0 pr-0" :class="{active:article.oiling==o}" v-for="o in oilings" @click="setValue('oiling',o)">{{o}}</div>
				</div>
			</div>

			<div class="col-12 col-md-6 p-0">
				<h3 class="col-12 pl-1 mt-1">Unit</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
				</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 p-0" v-if="article.unit && article.width">
			<h3 id="unit" class="col-12 pl-1 mt-1">Thickness</h3>
			<p class="pl-1">Plis select all the Thicknesses you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
			<div class="">
				<div class="btn btn-outline-dark col-2 col-md-1 m-1 pl-0 pr-0" :class="{active:article.thickness==t}" v-for="t in thicknesses" @click="addThickness(t)">{{t}}</div>
			</div>
		</div>
	</transition>

</div>
	`,
	data () {
	    return {
			subtypes: [
				"Coils (CRC)",
				"Sheets (CRS)",
			],
			grades: [
				"DC01",
				"DC03",
				"DC04",
				"DC05",
			],
			widths: [
				1000,
				1250,
				1500,
				2000,
			],
			lengths: [
				2000,
				2500,
				3000,
			],
			unities: [
				"MT",
				"KGS",
//				"PCS/COILS",
			],
			oilings: [
				"Without",
				"Oiled",
			],
			thicknesses: [
				0.5,
				0.6,
				0.8,
				0.9,
				1,
				1.2,
				1.5,
				1.6,
				2,
				2.5,
				3,
			],
			other: false,

		}
	},
	methods:{
		addThickness: function(t){
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.thickness = t;
			this.articles['COLD ROLLED'].push(this.newArt);

			this.$emit('new-element');

		},

		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();
			
			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},

	},
	computed:{

	},
  mounted (){
      this.article.unit = 'MT';
	  this.article.oiling = 'Without';
  },

});


/*****
	GALVANIZED
*****/
Vue.component('galvanized-form', {
    props:{
		article: Object,
		articles: Object,
    },
	template: `
<div>

	<div>
		<h3 id="type" class="col-12 pl-1 mt-1">Subtypes</h3>
		<div>
			<div class="btn btn-outline-dark col-5 col-md-3 m-1 pl-0 pr-0" :class="{active:article.subtype==s}" v-for="s in subtypes" @click="setValue('subtype',s)">{{s}}</div>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12 p-0" v-if="article.subtype">
			<h3 id="subtype" class="col-12 pl-1 mt-1">Steel Grade</h3>
			<div class="">
				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade==g}" v-for="g in grades" @click="setValue('grade',g)">{{g}}</div>

				<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other</div>
			</div>

			<div class="pl-1" v-if="this.article.grade=='other'" >
				<input type="text" v-model="article.grade_other" placeholder="Please enter grade"/>
			</div>
		</div>
	</transition>
	<transition name="fade">
		<div class="col-12 row" v-if="article.grade">
			<div class="col-12 col-md-6 p-0">
				<h3 id="grade" class="col-12 pl-1 mt-1">Width (mm)</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.width==w}" v-for="w in widths" @click="setValue('width',w)">{{w}}</div>
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.width=='other'}" @click="setValue('width','other')">Other</div>
				</div>
				<div class="" v-if="this.article.width=='other'" >
					<input type="text" v-model="article.width_other" placeholder="Please enter width"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0" v-show="article.subtype=='Sheets (GIS)'">
				<h3 class="col-12 pl-1 mt-1">Length (mm)</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
				</div>
				<div class="pl-1" v-if="this.article.length=='other'" >
					<input type="text" v-model="article.length_other" placeholder="Please enter length"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0">
				<h3 id="length" class="col-12 pl-1 mt-1">Zing coating</h3>
				<div class="">
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.zing==z}" v-for="z in zings" @click="setValue('zing',z)">{{z}}</div>
					<div class="btn btn-outline-dark col-2 m-1 pl-0 pr-0" :class="{active:article.zing=='other'}" @click="setValue('zing','other')">Other</div>
				</div>
				<div class="" v-if="this.article.zing=='other'" >
					<input type="text" v-model="article.zing_other" placeholder="Please enter zing"/>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0">
				<h3 class="col-12 pl-1 mt-1">Oiling range</h3>
				<div class="">
					<div class="btn btn-outline-dark col-5 m-1 pl-0 pr-0" :class="{active:article.oiling==o}" v-for="o in oilings" @click="setValue('oiling',o)">{{o}}</div>
				</div>
			</div>

			<div class="col-12 col-md-6 p-0">
				<h3 id="zing" class="col-12 pl-1 mt-1">Unit</h3>
				<div class="">
					<div class="btn btn-outline-dark col-3 m-1 pl-0 pr-0" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
				</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12 p-0" v-if="article.unit && article.width && article.zing">
			<h3 id="zing" class="col-12 pl-1 mt-1">Thickness</h3>
			<p class="pl-1">Plis select all the Thicknesses you need, they will appear under <strong>Lines articles</strong> where you can enter the quantity.</p>
			<p class="pl-1">Once finished, select "Next".</p>
			<div class="">
				<div class="btn btn-outline-dark col-2 col-md-1 m-1 pl-0 pr-0" :class="{active:article.thickness==t}" v-for="t in thicknesses" @click="addThickness(t)">{{t}}</div>
			</div>
		</div>
	</transition>

</div>
	`,
	data () {
	    return {
			subtypes: [
				"Coils (GIC)",
				"Sheets (GIS)",
			],
			grades: [
				"DC01",
				"DX51D",
			],
			widths: [
				1000,
				1250,
				1500,
				2000,
			],
			lengths: [
				2000,
				2500,
				3000,
			],
			zings: [
				"Z100",
				"Z140",
				"Z200",
				"Z275",
			],
			unities: [
				"MT",
				"KGS",
//				"PCS/COILS",
			],
			oilings: [
				"Without",
				"Oiled",
			],
			thicknesses: [
				0.5,
				0.6,
				0.8,
				0.9,
				1,
				1.2,
				1.5,
				1.6,
				2,
				2.5,
				3,
			],
			other: false,

		}
	},
	methods:{
		addThickness: function(t){
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.thickness = t;
			this.articles['GALVANIZED'].push(this.newArt);

			this.$emit('new-element');

		},

		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();
			
			self = this;
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},

	},
	computed:{

	},
  mounted (){
      this.article.unit = 'MT';
	  this.article.oiling = 'Without';
  },

});

Vue.component('form-articles', {
    props:{
		//articles: Array,
		articles: Object,
		//rebarArticles: Array,
		contact_email: '',
    },
	template: `
	<div>
		<div class="row pl-1">
<!--
  <p class="col-12 help">Select one type of product to start</p>
-->
  <!-- canvi
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:type==pType}" v-for="pType in types" @click="setType(pType)"><span>{{pType}}</span></div>
-->
			<div class="col-12 col-md-3 pl-2 p-0">
				<h3 class="pl-1 text-md-center">Long<br/>Products</h3>
				<div class="btn btn-outline-dark col-5 col-md-3 col-md-12 m-1 pl-0 pr-0" :class="{active:type==pType}" v-for="pType in long" @click="setType(pType)"><span>{{pType}}</span></div>
			</div>
			<div class="col-12 col-md-3 pl-2 p-0">
				<h3 class="pl-1 text-md-center">Flat<br/>Products</h3>
				<div class="btn btn-outline-dark col-5 col-md-3 col-md-12 m-1 pl-0 pr-0" :class="{active:type==pType}" v-for="pType in flat" @click="setType(pType)"><span>{{pType}}</span></div>
			</div>
			<div class="col-12 col-md-3 pl-2 p-0">
				<h3 class="pl-1 text-md-center">Other<br/>Products</h3>
				<div class="btn btn-outline-dark col-5 col-md-3 col-md-12 m-1 pl-0 pr-0" :class="{active:type==pType}" v-for="pType in other" @click="setType(pType)"><span>{{pType}}</span></div>
			</div>
		</div>
		<div>
	    	<transition name="fade">
				<div v-if="type == 'REBAR'">
					<rebar-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></rebar-form>
				</div>
			</transition>
	    	<transition name="fade">
				<div v-if="type == 'WIRE ROD'">
					<wire-rod-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></wire-rod-form>
				</div>
			</transition>
	    	<transition name="fade">
				<div v-if="type == 'MERCHANTS'">
					<merchant-bars-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></merchant-bars-form>
  				</div>
			</transition>
    		<transition name="fade">
				<div v-if="type == 'BEAM'">
					<beam-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></beam-form>
				</div>
			</transition>

    		<transition name="fade">
				<div v-if="type == 'HOT ROLLED'">
					<hot-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></hot-form>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="type == 'COLD ROLLED'">
					<cold-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></cold-form>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="type == 'GALVANIZED'">
					<galvanized-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></galvanized-form>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="type == 'PREPAINTED'">
					<div>
						<h3>Prepainted</h3>
						<div>
							<p>For <strong>Prepainted</strong> please send us your specification to our email</p>
							<div><a class="btn btn-outline-dark" :href="mail_prepainted" target="_blank">{{contact_email}}</a></div>
						</div>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="type == 'STAINLESS STEEL'">
					<div>
						<h3>Stainless Steels</h3>
						<div>
							<p>For <strong>Stainless Steels</strong> please send us your specification to our email</p>
							<div><a class="btn btn-outline-dark" :href="mail_stainless" target="_blank">{{contact_email}}</a></div>
						</div>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="type == 'NAILS'">
					<div>
						<h3>Nails</h3>
						<div>
							<p>For <strong>Nails</strong> please send us your specification to our email</p>
							<div><a class="btn btn-outline-dark" :href="mail_nails" target="_blank">{{contact_email}}</a></div>
						</div>
					</div>
				</div>
			</transition>
			
    		<transition name="fade">
				<div v-if="type == 'CEMENT'">
					<cement-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></cement-form>
				</div>
		    </transition>
		</div>
	</div>

	`,
	data () {
	    return {
			//article: {quantity: 400, type: "XXX", product: "asdasda|asdas|asdasda|asdasd"},
			article: {},
			types: [
				"REBAR",
				"BEAM",
				"WIRE ROD",
				"MERCHANTS",
				"HOT ROLLED",
				"COLD ROLLED",
				"GALVANIZED",

				"NAILS",
				"CEMENT",
			],
			long: [
				"REBAR",
				"BEAM",
				"WIRE ROD",
				"MERCHANTS",
			],
			flat: [
				"HOT ROLLED",
				"COLD ROLLED",
				"GALVANIZED",
				"PREPAINTED",
			],
			other: [
				"STAINLESS STEEL",
				"NAILS",
				"CEMENT",
			],
			type: "",

		}
	},
	methods:{
	/*
	    addNew: function(){
		  //console.log(this.articles);
		  this.article.type=this.type;

		  // segons tipus cap a un array o altre
	      //this.articles.push(this.article);
		  if(this.type=='REBAR'){
		  	this.articles['REBAR'].push(this.article);
		  }
		  else if(this.type=='WIRE ROD'){
		  	this.articles['WIRE ROD'].push(this.article);
		  }
		  else if(this.type=='BEAM'){
		  	this.articles['BEAM'].push(this.article);
		  }


		  else if(this.type=='CEMENT'){
		  	this.articles['CEMENT'].push(this.article);
		  }

		  this.article={};
		  this.type="";

		  this.$emit('new-element');
	    },
		*/
		setType: function(t){
			this.type = t;
			this.article = {};
			this.$forceUpdate();

			self = this;
			variable = 'type';
			setTimeout(function(){
				self.scrollNext(variable);
			}, 100);
			//this.scrollNext(variable);
		},
		scrollNext: function(variable){
			jQuery('html, body').animate({
				scrollTop: jQuery("#"+variable).offset().top - 210
			}, 2000);
		},
		emitNewElement: function(){
			this.$emit('new-element');
		},

	},
	computed:{
	},
  mounted (){
	  //this.articles['REBAR']=[];
	  //this.articles['BEAM']=[];
	  this.mail_prepainted = "mailto:"+this.contact_email+"?subject=[linerin Products] Prepainted (PPGI)&body=Fill in name, email and your request%0D%0dName:%0D%0DEmail:%0D%0D";
	  this.mail_stainless =  "mailto:"+this.contact_email+"?subject=[linerin Products] Stainless Steels&body=Fill in name, email and your request%0D%0dName:%0D%0DEmail:%0D%0D";
	  this.mail_nails = "mailto:"+this.contact_email+"?subject=[linerin Products] Nails&body=Fill in name, email and your request%0D%0dName:%0D%0DEmail:%0D%0D";

  },

});


Vue.component('all-app', {
    props:{
		//articles: Array,
		articles: Object,
		contact_email: '',
    },
	template: `
<div>
	<section>
		<form-articles :articles="articles" v-on:new-element="popUp" :contact_email="contact_email"></form-articles>
	</section>
<!--
  <pre v-show="true">
  {{articles}}
  </pre>
-->
</div>
	`,
	data () {
	    return {
			//articles: [],
	        }

	},
	methods:{
		popUp: function(){
			this.$emit('new-element');
		},

	},
	computed:{

	},
  mounted (){
	  //this.articles = this.i_articles;
  },

});



var vm = new Vue({
 el: '#vue-app',
	/*
 data: {
   articles:[],
   formArticles: [],
 },
*/
 data () {
   return {
	   contact_email: "quotations@linerin.com",
       formArticles: [],

	   ports: [
			"Albania:Durres",
			"Algeria:Annaba",
			"Algeria:Skikda",
			"Algeria:Djen-Djen",
			"Algeria:Bejaia",
			"Algeria:Oran",
			"Algeria:Ghazaouet",
			"Angola:Cabinda",
			"Angola:Luanda",
			"Angola:Lobito",
			"Argentina:Mar del Plata",
			"Argentina:Buenos Aires",
			"Australia:Melbourne",
			"Australia:Sydney",
			"Australia:Brisbane",
			"Bangladesh:Chittagong",
			"Bangladesh:Dhaka",
			"Belgium:Antwerp",
			"Belgium:Zeebgrugge",
			"Benin:Cotonou",
			"Brasil:Puerto Alegre",
			"Brasil:Vila do Conde",
			"Brasil:Fortaleza",
			"Brasil:Natal",
			"Brasil:Recife",
			"Brasil:Salvador",
			"Brasil:Rio De Jan Eiro",
			"Brasil:Sepetiba",
			"Bulgaria:Varna",
			"Bulgaria:Burgas",
			"Cameroun:Douala",
			"Cameroun:Kribi",
			"Canada:Montreal",
			"Canada:Toronto",
			"Canada:Vancouver",
			"Cape Verde:Mindelo",
			"Cape Verde:Praia da Vitoria",
			"Chile:Arica",
			"Chile:Valparaiso",
			"Chile:San Antonio",
			"China:Ningbo",
			"China:Shanghai",
			"China:Rizhao",
			"China:Qingdao",
			"China:Longkou",
			"China:Xingang",
			"China:Tangshan",
			"Colombia:Santa Marta",
			"Colombia:Barranquilla",
			"Colombia:Cartagena",
			"Colombia:Turbo",
			"Colombia:Buenaventura",
			"Comoros:Mayotte",
			"Comoros:Mutsamudu",
			"Comoros:Moroni",
			"Congo:Pointe Noire",
			"Costa Rica:Puerto Limon",
			"Costa Rica:Puntarenas",
			"Costa Rica:Caldera",
			"Croatia:Dubrovnik",
			"Croatia:Split",
			"Croatia:Zadar",
			"Croatia:Pula",
			"Croatia:Rijeka Bakar",
			"Cuba:Santiago",
			"Cuba:Havana",
			"Cyprus:Larnaca",
			"Cyprus:Limassol",
			"Denmark:Aarhus",
			"Denmark:Aalborg",
			"Denmark:Frederikshavn",
			"Denmark:Kalundborg",
			"Denmark:Fredericia",
			"Denmark:Kolding",
			"Denmark:Esbjerg",
			"Djibouti:Djibouti",
			"Dominican Republic:Rio Haina",
			"Ecuador:Guayaquil",
			"Egypt:Ain Sukhna",
			"Egypt:Sokhna",
			"Egypt:Port Said",
			"Egypt:Damietta",
			"Egypt:Abu Qir",
			"Egypt:Alexandria",
			"Egypt:El Dekheila",
			"Equatorial Guinea:Malabo",
			"Equatorial Guinea:Bata",
			"Eritrea:Massawa",
			"Estonia:Tallinn",
			"Finland:Helsinki",
			"France:Le Havre",
			"France:Marseille",
			"France:Fos sur Mer",
			"French Guyana:Cayenne",
			"Gabon:Owendo",
			"Gabon:Port Gentil",
			"Gambia:Banjoul",
			"Germany:Bremen",
			"Germany:Hamburg",
			"Ghana:Takoradi",
			"Ghana:Tema",
			"Ghana:Accra",
			"Greece:Thessaloniki",
			"Greece:Piraeus",
			"Guatemala:Puerto Barrios",
			"Guatemala:Puerto Quetzal",
			"Guinea:Conakry",
			"Guinea-Bissau:Bissau",
			"Guyana:Georgetown",
			"Haiti:Cap Haitien",
			"Haiti:Port au Prince",
			"Honduras:Puerto Cortes",
			"Honduras:San Lorenzo",
			"India:Mumbai",
			"India:Nhava Sheva",
			"India:Mangalore",
			"India:Cochin",
			"India:Chennai",
			"India:Madras",
			"India:Calcutta",
			"Iraq:Umm Qasr",
			"Ireland:Dublin",
			"Ireland:Cork",
			"Ireland:Rosslare",
			"Israel:Haifa",
			"Israel:Ashdod",
			"Italy:Venice",
			"Italy:Ravenna",
			"Italy:Genova",
			"Italy:Porto Nogaro",
			"Italy:Trieste",
			"Italy:Chioggia",
			"Italy:Porto Marghera",
			"Italy:Bari",
			"Italy:Taranto",
			"Italy:Gioia Tauro",
			"Italy:Catania",
			"Italy:Palermo",
			"Italy:Cagliari",
			"Italy:Civitavecchia",
			"Italy:Livorno",
			"Italy:La Spezia",
			"Ivory Coast:Abidjan",
			"Ivory Coast:San Pedro",
			"Jamaica:Montego Bay",
			"Jamaica:Kingston",
			"Jamaica:Port Antonio",
			"Jordan:Aqaba",
			"Kemya:Mombasa",
			"Kenya:Malindi",
			"Latvia:Riga",
			"Lebanon:Beirut",
			"Lebanon:Tripoli",
			"Liberia:Monrovia",
			"Lithuania:Klaipeda",
			"Lybia:Benghazi",
			"Lybia:Misurata",
			"Lybia:Tripoli",
			"Madagascar:Nosy Be",
			"Madagascar:Tomasina",
			"Malta:Valletta",
			"Mauritania:Nouadhibou",
			"Mauritania:Nouakchott",
			"Mauritius:Port Louis",
			"Mexico:Altamira",
			"Mexico:Veracruz",
			"Mexico:Lazaro Cardenas",
			"Mexico:Manzanillo",
			"Montenegro:Bar",
			"Morocco:Casablanca",
			"Morocco:Tanger",
			"Morocco:Agadir",
			"Morocco:Laayoune",
			"Mozambique:Maputo",
			"Mozambique:Beira",
			"Mozambique:Nacala",
			"Mozambique:Pemba",
			"Netherlands:Rotterdam",
			"Netherlands:Willemstad",
			"Netherlands:Den Helder",
			"Netherlands:Amsterdam",
			"New Zealand:Port Chalmers",
			"New Zealand:Wellington",
			"Nigeria:Port Harcourt",
			"Nigeria:Lagos",
			"Norway:Oslo",
			"Norway:Fredrikstad",
			"Norway:Sandnes",
			"Norway:Stavanger",
			"Norway:Bergen",
			"Norway:Mongstad",
			"Norway:Aalesund",
			"Norway:Trondheim",
			"Norway:Tromso",
			"Oman:Salalah",
			"Oman:Muscat",
			"Pakistan:Port Qasim",
			"Pakistan:Karachi",
			"Panama:Balboa",
			"Panama:Manzanillo",
			"Panama:Colon",
			"Panama:Cristobal",
			"Panama:Panama",
			"Peru:Callao",
			"Poland:Gdynia",
			"Poland:Gdansk",
			"Poland:Szczecin",
			"Portugal:Funchal",
			"Portugal:Praia da Vitoria",
			"Portugal:Lisboa",
			"Portugal:Leixoes",
			"Portugal:Setubal",
			"Portugal:Aveiro",
			"Portugal:Porto",
/*
			"RDC (Democratic Republic of Congo):Matadi",
			"RDC (Democratic Republic of Congo):Boma",
			"RDC (Democratic Republic of Congo):Banana",
*/
			"Democratic Republic of Congo:Matadi",
			"Democratic Republic of Congo:Boma",
			"Democratic Republic of Congo:Banana",
			"Reunion:Pointe des Galets",
			"Romania:Costanta",
			"Saudi Arabia:Jeddah",
			"Saudi Arabia:Dammam",
			"Senegal:Dakar",
			"Sierra Leone:Freetown",
			"Slovenia:Koper",
			"Somali:Mogadiscio",
			"Somali:Berbera",
			"South Africa:Richards Bay",
			"South Africa:Durban",
			"South Africa:Port Elizabeth",
			"South Africa:Cape Town",
			"South Korea:Incheon",
			"Spain:Bilbao",
			"Spain:Barcelona",
			"Spain:Valencia",
			"Spain:Sagunto",
			"Spain:Santander",
			"Spain:Cartagena",
			"Spain:Carboneras",
			"Spain:Algeciras",
			"Spain:Vigo",
			"Spain:Marin",
			"Spain:Gijon",
			"Spain:Pasajes",
			"Spain:Santander",
			"Sudan:Port Sudan",
			"Sweden:Gotthenburg",
			"Sweden:Helsingborg",
			"Sweden:Malmo",
			"Sweden:Stockholm",
			"Syria:Latakia",
			"Syria:Tartous",
			"Tanzania:Zanzibar",
			"Tanzania:Dar Es Salaam",
			"Togo:Lome",
			"Tunisia:Bizerte",
			"Tunisia:Sfax",
			"Tunisia:Rades",
			"Tunisia:Sousse",
			"Tunisia:Bizerte",
			"Tunisia:Sfax",
			"Tunisia:Rades",
			"Tunisia:Sousse",
			"Tunisia:Gabes",
			"Turkey:Iskenderun",
			"Turkey:Mersin",
			"Turkey:Antalya",
			"Turkey:Izmir",
			"Turkey:Aliaga",
			"Turkey:Nemrut Bay",
			"Turkey:Gemlik",
			"Turkey:Izmit (Evyap)",
			"Turkey:Gebze",
			"Turkey:Istanbul",
			"Turkey:Mardas",
			"Turkey:Samsun",
			"Turkey:Zonguldak",
			"Turkey:Eregli",
			"Turkey:Ambarli",
			"Turkey:Tekirdag",
			"UK:London Gateway",
			"UK:Tilbuty",
			"UK:Felixstowe",
			"UK:Teesport",
			"UK:Aberdeen",
			"UK:Belfast",
			"UK:Liverpool",
			"UK:Cardiff",
			"UK:Bristol",
/*
			"United arab Emirates (UAE):Ras Al Khaimah",
			"United arab Emirates (UAE):Sharjah",
			"United arab Emirates (UAE):Jebel Ali",
*/
			"United arab Emirates:Ras Al Khaimah",
			"United arab Emirates:Sharjah",
			"United arab Emirates:Jebel Ali",
			"Uruguay:Montevideo",
			"USA:Newport",
			"USA:Newark",
			"USA:Port Elizabeth",
			"USA:Wilmington",
			"USA:Philadelphia",
			"USA:Baltimore",
			"USA:Norfolk",
			"USA:Charleston",
			"USA:Savannah",
			"USA:Brunswick",
			"USA:Jacksonville",
			"USA:Port Everglades",
			"USA:Miami",
			"USA:Naples",
			"USA:Tampa",
			"USA:Mobile",
			"USA:Pittsburgh",
			"USA:New Orleans",
			"USA:Freeport",
			"USA:Houston",
			"USA:San Diego",
			"USA:Los angeles",
			"USA:Long Beach",
			"USA:Oakland",
			"USA:San Francisco",
			"USA:Tacoma",
			"USA:Seattle",
			"Venezuela:Puerto Cabello",
			"Venezuela:La Guaira",
			"Vietnam:Haiphong",
			"Vietnam:Hon Gay",
			"Yemen:Hodeidah",
			"Yemen:Aden",
			"Yemen:Mukalla",
	   ],
	   countries: [
				"Albania",
				"Algeria",
				"Angola",
				"Argentina",
				"Australia",
				"Bangladesh",
				"Belgium",
				"Benin",
				"Brasil",
				"Bulgaria",
				"Cameroun",
				"Canada",
				"Cape Verde",
				"Chile",
				"China",
				"Colombia",
				"Comoros",
				"Congo",
				"Costa Rica",
				"Croatia",
				"Cuba",
				"Cyprus",
				"Denmark",
				"Djibouti",
				"Dominican Republic",
				"Ecuador",
				"Egypt",
				"Equatorial Guinea",
				"Eritrea",
				"Estonia",
				"Finland",
				"France",
				"French Guyana",
				"Gabon",
				"Gambia",
				"Germany",
				"Ghana",
				"Greece",
				"Guatemala",
				"Guinea",
				"Guinea-Bissau",
				"Guyana",
				"Haiti",
				"Honduras",
				"India",
				"Iraq",
				"Ireland",
				"Israel",
				"Italy",
				"Ivory Coast",
				"Jamaica",
				"Jordan",
				"Kemya",
				"Kenya",
				"Latvia",
				"Lebanon",
				"Liberia",
				"Lithuania",
				"Lybia",
				"Madagascar",
				"Malta",
				"Mauritania",
				"Mauritius",
				"Mexico",
				"Montenegro",
				"Morocco",
				"Mozambique",
				"Netherlands",
				"New Zealand",
				"Nigeria",
				"Norway",
				"Oman",
				"Pakistan",
				"Panama",
				"Peru",
				"Poland",
				"Portugal",
//				"RDC (Democratic Republic of Congo)",
				"Democratic Republic of Congo",
				"Reunion",
				"Romania",
				"Saudi Arabia",
				"Senegal",
				"Sierra Leone",
				"Slovenia",
				"Somali",
				"South Africa",
				"South Korea",
				"Spain",
				"Sudan",
				"Sweden",
				"Syria",
				"Tanzania",
				"Togo",
				"Tunisia",
				"Turkey",
				"UK",
				"USA",
//				"United arab Emirates (UAE)",
				"United arab Emirates",
				"Uruguay",
				"Venezuela",
				"Vietnam",
				"Yemen",
	   ],
	   paymentTerms: [
		   "100% Advance payment",
		   "20% advance and 80% against B/L",
		   "L/C (Letter of Credit)",
		   "Open Account 30 days",
		   "CAD (Cash Against Documents)",
	   ],

	   articles: {
		   	'REBAR':[],
			'BEAM':[],
			'WIRE ROD':[],
			'MERCHANTS':[],
			'HOT ROLLED':[],
			'COLD ROLLED':[],
			'GALVANIZED':[],
			'NAILS':[],
			'CEMENT':[],
	   },
	   actual: {},

	   email: "",
	   name: "",

	   payment: "",
	   delivery: "",
	   deliveryPorts: [],
	   deliveryType: "",
	   DAP: {zip: "", city: "", country: ""},

	   result: "",

	   step: 0,

	   pop: false,
	   sent: false,
	   filterPort: "",
	   newPort: "",
   }
 },

mounted () {
    this.loading = true;
    self = this;


    /*
    axios.get('formArticles.json')
    //.then(response => (this.formArticles =  JSON.parse(response.data)))
    .then(response => (this.formArticles =  response.data))
    .finally(function(){
      self.loading=false;
      console.log(self.formArticles);

    });
	*/

},
methods:{
  // generals
  sendData: function(){
	  urlMake = "https://hook.eu1.make.com/4s5840hop54m95p2zx8541c2e5xigepq";
	  //console.log("url: "+urlMake);

	  newArticles = [];
	  self = this;
	  _.forEach(this.articles, function(v2,k2) {
		  _.forEach(v2, function(value, pos) {
		  	//aux = JSON.stringify(value)
			aux = self.prepareLine(k2, value, pos);
		  	newArticles.push({type:k2, quantity: value.quantity, product: aux});
			//newArticles.push({type:k2, quantity: value.quantity, product: value});
		 })
	  });

	  //console.log(newArticles);


	  self = this;
	  data = {email: this.email, name: this.name, articles: newArticles, delivery: this.deliveryType, ports: this.deliveryPorts, zipcode: this.DAP.zip, country: this.DAP.country, city: this.DAP.city, payment: this.payment};
	  axios.post(urlMake, data).
	  then(function(response){
		 // console.log(response.data);


		  self.result = response.data["message"];
		  console.log(self.result);
		  self.$forceUpdate();

		  self.step = 4;
		  jQuery("#centrat").addClass("centrat");
		  self.sentEmail();

	  }).
	  //catch(response => (this.message =  JSON.parse(response.data) )).
	  catch(response => (this.result =  response.data )).
	  finally(function(){
	  	self.loading=false;
	 	console.log("DONE");
	  });
    },
  	prepareLine: function(type, line, pos){
		var aux = '';
		
		//console.log(line);
		console.log(pos);
		if(pos == 0){
			aux+= "\n\n"+type+"\n";
		}
		if(type=='REBAR'){
			if(line.grade == 'other') line.grade = line.grade_other;
			if(line.length == 'other') line.length = line.length_other;
			aux += line.grade + "\t" + line.length + "\t" + line.diameter + "\t" + line.unit;
		}
		else if(type=='BEAM'){
			if(line.grade == 'other') line.grade = line.grade_other;
			if(line.length == 'other') line.length = line.length_other;
			aux += line.grade + "\t" + line.length + "\t" + line.product + "\t" + line.unit;
		}
		else if(type=='WIRE ROD'){
			if(line.grade =='other') line.grade = line.grade_other;
			aux += line.grade + "\t" + line.diameter + "\t" + line.unit;
		}
		else if(type=='MERCHANTS' && (line.subtype == 'Flat Bars' || line.subtype == 'Equal Angles')){
			if(line.grade == 'other') line.grade = line.grade_other;
			if(line.length == 'other') line.length = line.length_other;
			aux += line.subtype + "\t" + line.grade + "\t" + line.length + "\t" + line.d1 + "\t" + line.d2 + "\t" + line.unit;
		}
		else if(type=='MERCHANTS' && (line.subtype != 'Flat Bars' && line.subtype != 'Equal Angles')){
			if(line.grade == 'other') line.grade = line.grade_other;
			if(line.length == 'other') line.length = line.length_other;
			aux += line.subtype + "\t" + line.grade + "\t" + line.length + "\t" + line.size + "\t" + line.unit;
		}
		else if(type=='CEMENT'){
			if(line.cement_type == 'other') line.cement_type = line.cement_type_other;
			aux += line.cement_type + "\t" + line.format + "\t" + line.unit;
		}
		else if(type=='HOT ROLLED'){
			if(line.grade == 'other') line.grade = line.grade_other;
			if(line.width == 'other') line.width = line.width_other;
			if(line.subtype == 'Sheets (HRS)'){
				if(line.length == 'other') line.length = line.length_other;
				line.length += '\t';
			}
			else line.length='';
			aux += line.subtype + "\t" + line.grade + "\t" + line.width + "\t" + line.length + line.unit;
		}
		else if(type=='COLD ROLLED'){
			if(line.grade == 'other') line.grade = line.grade_other;
			if(line.width == 'other') line.width = line.width_other;
			if(line.subtype == 'Sheets (HRS)'){
				if(line.length == 'other') line.length = line.length_other;
				line.length += '\t';
			}
			else line.length='';
			aux += line.subtype + "\t" + line.grade + "\t" + line.width + "\t" + line.length + line.oiling + "\t" + line.unit;
		}
		else if(type=='GALVANIZED'){
			if(line.grade == 'other') line.grade = line.grade_other;
			if(line.width == 'other') line.width = line.width_other;
			if(line.zing == 'other') line.zing = line.zing_other;
			if(line.subtype == 'Sheets (HRS)'){
				if(line.length == 'other') line.length = line.length_other;
				line.length += '\t';
			}
			else line.length='';
			aux += line.subtype + "\t" + line.grade + "\t" + line.width + "\t" + line.length + line.oiling + "\t"+ line.zing + "\t" + line.unit;
		}
		
		return  aux;
	
  	},
	validEmail: function(){
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(this.email.match(mailformat)){
			return true;
		}
		else{
			return false;
		}

	},
	sentEmail: function(){
		//console.log('pop');
		this.sent = true;
		self = this;
		setTimeout(function(){self.sent = false;} , 1000);
	},
	popUp: function(){
		//console.log('pop');
		this.pop = true;
		console.log(this.pop);
		self = this;
		setTimeout(function(){self.pop = false;} , 1000);
	},
	addPort: function(){
		this.ports.push(this.newPort);
		this.ports = _.sortBy(_.uniq(this.ports));
		this.newPort = '';
	},
	addDelPort: function(p){
		if(! this.selPort(p)){
			
			this.deliveryPorts.push(p);
			this.deliveryPorts = _.sortBy(_.uniq(this.deliveryPorts));
		}
		else{
			this.delDelPort(p);
		}
	},
	sortCountries: function(){
		return _.sortBy(this.countries);
	},
  deliveryPlace: function(){
    var good = false;
    if(this.deliveryType == 'CFR'){
      good = this.deliveryPorts.length > 0;
    }
    else if (this.deliveryType == 'DAP') {
      good = this.DAP.country != '';
    }
//console.log('good', good);
    return good;
  },
  cleanPort: function(port){
	  return port.replace(/^.*:/,'');
  },
  
  selPort: function(port){
	  return _.indexOf(this.deliveryPorts, port) > -1;
  },
  delDelPort: function(port){
	  this.deliveryPorts = _.without(this.deliveryPorts, port);
  },
  delPortById: function(id){
	this.deliveryPorts.splice(id,1);
  },
  scrollUp: function(){
	//console.log('scrollUp');
	jQuery('html, body').animate({
		scrollTop: jQuery("#vue-app").offset().top - 210
	}, 2000);
  },

},
computed:{
	someArticle: function(){
		var c = _.countBy(this.articles, 'length');
		//console.log(c);
		//console.log(c[0]);
		// si menys de 9 llavors algun tipus conté valor
		if(c[0]<9){
			return true;
		}
		else{
			return false;
		}
	},
	alertEmail: function(){
		return this.validEmail();
	},
	count: function(){
			return _.countBy(this.articles, 'length');
	},
	portsF: function(){
		if(self.filterPort.length > 1){
			self = this;
			exp = self.filterPort;
			//if(self.filterPort=='ALL') exp = '.*'; 
			return _.sortBy(_.filter(this.ports, function(o) {
				//var thisRegex = new RegExp(exp+'.*:', 'i');
				//exp = exp.replace('^(.*)\(.*)','\1');
				var thisRegex = new RegExp(exp+':', 'i');
				//console.log(thisRegex);
				return thisRegex.test(o);
			}));
		}
	},
  deliveryGood: function(){
    return this.deliveryPlace();
  },

},
});

/*
jQuery('window').scroll( function() {
  //jQuery( "#log" ).append( "<div>Handler for `scroll` called.</div>" );
  // console.log('scroll!');
} );
*/