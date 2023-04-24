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
	<td>{{id}}</td>
	<td v-if="line.quality!='other'">{{line.quality}}</td>
	<td v-else>{{line.quality_other}}</td>
	<td class="length">{{line.length}}</td>
	<td class="number">{{line.diameter}}</td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
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
	<td>{{id}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td class="number">{{line.diameter}}</td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
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
	<td>{{id}}</td>
	<td>{{line.subtype}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td v-if="line.length!='other'" class="number">{{line.length}}</td>
	<td v-else class="number">{{line.length_other}}</td>
	<td>{{line.size}}</td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
</tr>
	`,
	data () {
	    return {
			type: "MERCHANT BARS",
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
	<td>{{id}}</td>
	<td>{{line.subtype}}</td>
	<td v-if="line.grade!='other'">{{line.grade}}</td>
	<td v-else>{{line.grade_other}}</td>
	<td v-if="line.length!='other'" class="number">{{line.length}}</td>
	<td v-else class="number">{{line.length_other}}</td>
	<td>{{line.d1}}</td>
	<td>{{line.d2}}</td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
</tr>
	`,
	data () {
	    return {
			type: "MERCHANT BARS",
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
	<td>{{id}}</td>
	<td v-if="line.quality!='other'">{{line.quality}}</td>
	<td v-else>{{line.quality_other}}</td>
	<td v-if="line.length!='other'" class="number">{{line.length}}</td>
	<td v-else class="number">{{line.length_other}}</td>
	<td>{{line.product}}</td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
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
	<td>{{id}}</td>
	<td v-if="line.cement_type!='other'">{{line.cement_type}}</td>
	<td v-else>{{line.cement_type_other}}</td>
	<td>{{line.format}}</td>
	<td><input class="input" type="number" v-model.number="linies[type][id]['quantity']" placeholder="0"/></td>
	<td>{{line.unit}}</td>
	<td><button class="button is-danger is-pulled-right" @click="del(type,id)"><span class="icon"><i class="fas fa-trash"></i></span></button></td>
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
<div class="col-12 col-md-6">
<h3>Lines articles</h3>
	<section v-if="linies['REBAR'].length > 0">
	<h4>REBAR</h4>
			<table>
				<tr><th>id</th><th>quality</th><th>length</th><th>diameter</th><th>Quantity</th><th>Untity</th><th>action</th></tr>
				<line-rebar v-for="(line, id) in linies['REBAR']" :key="id" :linies="linies" :line="line" :id="id"></line-rebar>
			</table>
	</section>

	<section v-if="linies['WIRE ROD'].length > 0">
	<h4>WIRE ROD</h4>
			<table>
				<tr><th>id</th><th>grade</th><th>diameter</th><th>Quantity</th><th>Untity</th><th>action</th></tr>
				<line-wire-rod v-for="(line, id) in linies['WIRE ROD']" :key="id" :linies="linies" :line="line" :id="id"></line-wire-rod>
			</table>
	</section>

	<section v-if="linies['MERCHANT BARS'].length > 0">
	<h4>MERCHANT BAR</h4>
			<table>
				<tr><th>id</th><th>subtype</th><th>grade</th><th>length</th><th>size</th><th>Quantity</th><th>Untity</th><th>action</th></tr>
				<line-merchant1 v-for="(line, id) in linies['MERCHANT BARS']" :key="id" :linies="linies" :line="line" :id="id"></line-merchant1>
			</table>
			<table>
				<tr><th>id</th><th>subtype</th><th>grade</th><th>length</th><th>a</th><th>s</th><th>Quantity</th><th>Untity</th><th>action</th></tr>
				<!--
				<line-merchant2 v-for="(line, id) in _.find(linies['MERCHANT BARS'], function(o) { return o.subtype=='Flat Bars'; })" :key="id" :linies="linies" :line="line" :id="id"></line-merchant2>
				-->
				<line-merchant2 v-for="(line, id) in linies['MERCHANT BARS']" :key="id" :linies="linies" :line="line" :id="id"></line-merchant2>
			</table>
	</section>

	<section v-if="linies['BEAM'].length > 0">
	<h4>BEAMS</h4>
			<table>
				<tr><th>id</th><th>quality</th><th>length</th><th>product</th><th>Quantity</th><th>Untity</th><th>action</th></tr>
				<line-beam v-for="(line, id) in linies['BEAM']" :key="id" :linies="linies" :line="line" :id="id"></line-beam>
			</table>
	</section>

	<section v-if="linies['CEMENT'].length > 0">
	<h4>CEMENT</h4>
			<table>
				<tr><th>id</th><th>type</th><th>format</th><th>Quantity</th><th>Untity</th><th>action</th></tr>
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
<div class="row">
	<h2>STEEL: LONG PRODUCTS:<br/>Reinforcing steel bars (REBAR)</h2>
	<div class="col-12">
		<h3>Quality</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.quality==q}" v-for="q in qualities" @click="setValue('quality',q)">{{q}}</div>
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.quality=='other'}" @click="setValue('quality','other')">Other quality</div>
		</div>

		<div class="row" v-if="this.article.quality=='other'" >
			<input type="text" v-model="article.quality_other" placeholder="Other quality - please, specify"/>
		</div>
	</div>
	<transition name="fade">
		<div class="col-6" v-if="article.quality">
			<h3>Length</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
			</div>
			<div class="row" v-if="this.article.length=='other'" >
				<input type="text" v-model="article.length_other" placeholder="Other length - please, specify"/>
			</div>
		</div>

	</transition>

	<transition name="fade">
		<div class="col-6" v-if="article.quality">
			<h3>Unit</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="col-12" v-if="article.unit && article.length">
			<h3>Diameters (mm)</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.diameter==d}" v-for="d in diameters" @click="addDiameter(d)">{{d}}</div>
			</div>
		</div>
	</transition>

</div>
	`,
	data () {
	    return {
			qualities: [
				"BS4448 GR B500B",
				"NFA 35-080-1 B 500B",
				"ASTM A615 GR 60",
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
				"PCS",
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
<div class="row">
	<h2>STEEL: LONG PRODUCTS:<br/>Merchant bars: {{subtype}}</h2>
	<div class="col-12">
		<h3>Subtypes</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.subtype==s}" v-for="s in subtypes" @click="setValue('subtype',s)">{{s}}</div>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12" v-if="article.subtype">
			<h3>Grade</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.grade==g}" v-for="g in grades" @click="setValue('grade',g)">{{g}}</div>
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other grade</div>
			</div>

			<div class="row" v-if="this.article.grade=='other'" >
				<input type="text" v-model="article.grade_other" placeholder="Other grade - please, specify"/>
			</div>
	</div>
	</transition>

	<transition name="fade">
		<div class="col-6" v-if="article.grade">
			<h3>Length</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
			</div>
			<div class="row" v-if="this.article.length=='other'" >
				<input type="text" v-model="article.length_other" placeholder="Other length - please, specify"/>
			</div>
		</div>

	</transition>

	<transition name="fade">
		<div class="col-6" v-if="article.grade">
			<h3>Unit</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>
			</div>
		</div>

	</transition>

	<transition name="fade">
		<div class="col-12" v-if="article.subtype && article.grade && article.length && article.unit">
			<h3>{{sizes[article.subtype].label}} (mm)</h3>
			<!-- flat i angle bars - 2 dimensions -->
			<div v-if="article.subtype == 'Flat Bars' || article.subtype == 'Equal Angles'" class="row">
				<div class="col-12">
					<img :src="sizes[article.subtype].img"/>
				</div>
				<div class="col-12">
					<h4>{{sizes[article.subtype].label1}}</h4>
					<div class="row">
						<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.d1==d1}" v-for="d1 in Object.keys(this.sizes[article.subtype].values)" @click="setValue('d1',d1)">{{d1}}</div>
					</div>
				</div>

			</div>
			<div class="row" v-else>
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.size==s}" v-for="s in sizes[article.subtype].values" @click="addProduct('size',s)">{{s}}</div>
			</div>
		</div>

	</transition>
	<transition name="fade">
		<div class="col-12" v-show="article.subtype && article.grade && article.length && article.unit && article.d1">
			<!-- flat i angle bars - 2 dimensions -->
			<div v-if="article.subtype == 'Flat Bars' || article.subtype == 'Equal Angles'" class="row">
				<div class="col-12">
					<h4 ref="d2">{{sizes[article.subtype].label2}}</h4>
<input autofocus id="p"/>
					<div class="row">
						<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.d2==d2}" v-for="d2 in this.sizes[this.article.subtype].values[this.article.d1]" @click="addProduct('d2',d2)">{{d2}}</div>
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
        	"PCS",
		],
      sizes: {

        "Flat Bars": {
            label: "Sizes",
			label1: "B",
			label2: "S",
			//img: "/imgs/flat.png",
			img: "imgs/flat.png",
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
			//img: "/imgs/flat.png",
			img: "imgs/equal_angles.png",
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
            "4.50",
            "5.00",
            "5.50",
            "6.00",
            "6.50",
            "7.00",
            "8.00",
            "9.00",
            "10.00",
            "11.00",
            "11.50",
            "12.00",
            "13.00",
            "14.00",
            "15.00",
            "16.00",
            "18.00",
            "19.00",
            "20.00",
            "22.00",
            "24.00",
            "25.00",
            "26.00",
            "28.00",
            "30.00",
            "32.00",
            "35.00",
            "36.00",
            "38.00",
            "40.00",
            "42.00",
            "45.00",
            "48.00",
            "50.00",
            "52.00",
            "54.00",
            "55.00",
            "56.00",
            "58.00",
            "60.00",
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
	  		//fsize: null,
	  /*
	  		flats: [3,4,5,6,8,10,12,16,20,25,30,35,40,50],
	  		angles: [2.3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,22,24,25,26,28],
	  */
		}
	},
	methods:{
		/*
		addDiameter: function(d){
			//console.log("dia: "+d);
			// patch x copiar obj enlloc d'agafar referència
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.diameter = d;
			this.articles['MERCHANT BARS'].push(this.newArt);

		},
		*/
		/*
		addSize: function(d1, d2){
			// patch x copiar obj enlloc d'agafar referència
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.d1 = d1;
			this.newArt.d2 = d2;
			this.articles['MERCHANT BARS'].push(this.newArt);

		},
   	 	selectSubtype: function(s){
     	   	this.subtype = s;
     	   	this.article.subtype = s;

    	},
		isEnabled: function(val1, val2){
			return _.includes(this.sizes[this.subtype].values[val1], val2);
		},


		addDiameter: function(d){
			//console.log("dia: "+d);
			// patch x copiar obj enlloc d'agafar referència
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt.diameter = d;
			this.articles['REBAR'].push(this.newArt);

			this.$emit('new-element');

		},
		*/

		setValue: function(variable,val){
			this.article[variable]=val;

			if(variable=='subtype'){
				this.subtype=val;
				this.article.d1 = null;
				this.article.d2 = null;
			}

			this.$forceUpdate();

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


		},
		addProduct: function(variable,val){
			this.newArt = JSON.parse(JSON.stringify(this.article));
			this.newArt[variable] = val;
			this.articles['MERCHANT BARS'].push(this.newArt);

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
<div class="row">
	<h2>STEEL: LONG PRODUCTS: Wire Rod</h2>
	<div class="col-12">
		<h3>Steel Grade</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.grade==g}" v-for="g in grades" @click="setValue('grade',g)">{{g}}</div>
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.grade=='other'}" @click="setValue('grade','other')">Other grade</div>
		</div>

		<div class="row" v-if="this.article.grade=='other'" >
			<input type="text" v-model="article.grade_other" placeholder="Other grade - please, specify"/>
		</div>
	</div>
	<transition name="fade">
		<div class="col-12" v-if="article.grade">
			<h3>Diameters (mm)</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.diameter==d}" v-for="d in diameters" @click="addDiameter(d)">{{d}}</div>
			</div>
		</div>
	</transition>

	<div class="col-12">
		<strong>Unit:</strong>&nbsp;{{article.unit}}
	</div>

</div>
	`,
	data () {
	    return {
			grades: [
				"ASTM A 510 SAE1006",
				"ASTM A 510 SAE1008",
				"ASTM A 510 SAE1010",
				"ASTM A 510 SAE1012",
				"ASTM A 510 SAE1015",
				"ASTM A 510 SAE1018",
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
<div class="row">
	<h2>STEEL: LONG PRODUCTS: Beams</h2>
	<div class="col-12">
		<h3>Steel Quality</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.quality==q}" v-for="q in qualities" @click="setValue('quality',q)">{{q}}</div>
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.quality=='other'}" @click="setValue('quality','other')">Other quality</div>
		</div>
		<transition name="fade">
			<div class="row" v-if="this.article.quality=='other'" >
				<input type="text" v-model="article.quality_other" placeholder="Other quality - please, specify"/>
			</div>
		</transition>
	</div>
	<div class="col-6">
		<h3>Length</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.length==l}" v-for="l in lengths" @click="setValue('length',l)">{{l}}</div>
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.length=='other'}" @click="setValue('length','other')">Other</div>
		</div>
		<transition name="fade">
			<div class="row" v-if="this.article.length=='other'" >
				<input type="text" v-model="article.length_other" placeholder="Other length - please, specify"/>
			</div>
		</transition>
	</div>

	<div class="col-6">
		<h3>Unit</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.unit==u}" v-for="u in unities" @click="setValue('unit',u)">{{u}}</div>

		</div>
	</div>

	<div class="col-12">
		<h3>Subtypes</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.subtype==s}" v-for="s in subtypes" @click="setValue('subtype',s)">{{s}}</div>
		</div>
	</div>


	<transition name="fade">
		<div class="col-12" v-if="article.subtype">
			<h3>Product</h3>
			<div class="row">
				<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.product==p}" v-for="p in products[article.subtype]" @click="selectProduct(p)">{{p}}</div>
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
		/*
		otherGrade: function(){
			if(this.quality==""){
				this.other = true;
			}
		},
		*/
		/*
		updateSub: function(){
			this.$forceUpdate();
		},
		*/
		/*
		setQuality: function(q){
			this.article.quality=q;
			this.$forceUpdate();
		},
		setLength: function(l){
			this.article.length=l;
			this.$forceUpdate();
		},
		setSubtype: function(s){
			this.article.subtype=s;
			this.$forceUpdate();
		},
		*/
		setValue: function(variable,val){
			this.article[variable]=val;
			this.$forceUpdate();
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
<div class="row">
	<h2>CEMENT</h2>
	<div class="col-12">
		<h3>Cement type</h3>
		<div class="row">
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.cement_type==ct}" v-for="ct in Object.keys(cement_types_legend)" @click="setValue('cement_type',ct)">{{ct}}</div>
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.cement_type=='other'}" @click="setValue('cement_type','other')">Other quality</div>
		</div>

			<div class="row" v-if="this.article.cement_type=='other'" >
				<input type="text" v-model="article.cement_type_other" placeholder="Other type - please, specify"/>
			</div>
		<transition name="fade">
			<div v-if="this.article.cement_type">
				<em>{{cement_types_legend[article.cement_type]}}</em>
			</div>
		</transition>
	</div>
  <transition name="fade">
	   <div class="col-12" v-if="this.article.cement_type">
		   <h3>Bagged cement / Bulk Cement</h3>
		   <div class="row">
<!--
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.format==format}" v-for="format in formats" @click="setValue('format',format)">{{format}}</div>
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:article.format=='other'}" @click="setValue('format','other')">Other format</div>
-->
          <div class="btn btn-outline-dark col-3 m-1" :class="{active:article.format==format}" v-for="format in formats" @click="selectProduct(format)">{{format}}</div>

		   </div>
<!--
		<transition name="fade">
			<div class="row" v-if="this.article.format=='other'" >
				<input type="text" v-model="article.format_other" placeholder="Other format - please, specify"/>
			</div>
		</transition>
-->
	 </div>
  </transition>

	<div class="col-12">
		<strong>Unit:</strong>&nbsp;{{article.unit}}
	</div>
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



Vue.component('form-articles', {
    props:{
		//articles: Array,
		articles: Object,
		//rebarArticles: Array,
    },
	template: `
	<div class="col-12 col-md-6">
		<div class="row">
	<!--
			<h4 class="col-12">Types:</h4>
	-->
			<div class="btn btn-outline-dark col-3 m-1" :class="{active:type==pType}" v-for="pType in types" @click="setType(pType)">{{pType}}</div>
			<p class="col-12 help">Select one type of product to start</p>
		</div>
		<div class="row">
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
				<div v-if="type == 'MERCHANT BARS'">
					<merchant-bars-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></merchant-bars-form>
  				</div>
			</transition>
    		<transition name="fade">
				<div v-if="type == 'BEAM'">
					<beam-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></beam-form>
				</div>
			</transition>

    		<transition name="fade">
				<div v-if="type == 'CEMENT'">
					<cement-form :article="article" :articles="articles" v-on:new-element="emitNewElement"></cement-form>
				</div>
		    </transition>
		</div>
<!--
		<div class="row">
	    	<transition name="fade">
				<div v-if="type == 'CEMENT'">
					<button v-if="" class="btn btn-slider" @click="addNew">add article</button>
				</div>
			</transition>
		</div>
-->
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
				"MERCHANT BARS",
				"HOT ROLLED",
				"COLD ROLLED",
//				"GALVANIZED",

//				"NAILS",
				"CEMENT",
			],
			type: "",

		}
	},
	methods:{
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
		setType: function(t){
			this.type = t;
      this.article = {};
      this.$forceUpdate();
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
  },

});


Vue.component('all-app', {
    props:{
		//articles: Array,
		articles: Object,
    },
	template: `
<div class="container-fluid">
	<h3>Our Products</h3>
	<section class="col-12 row">
		<form-articles :articles="articles" v-on:new-element="popUp"></form-articles>
		<lines-articles :linies="articles"></lines-articles>
	</section>
  <pre>
  {{articles}}
  </pre>
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

       formArticles: [],

	   /* si ha de ser possible múltiples seleccions cal fer-ho així
	   ports: {
		   Belgium: ["Antwerp"],
		   Italy: ["Venice", "Ravenna", "Genova", "Porto Nogaro", "Trieste"],
		   Portugal: ["Leixoes", "Setubal", "Aveiro"],
	   },
	   */
	   ports: [
       /*
	   	   "Belgium:Antwerp",

		   "France:Le Havre",
		   "France:Marseille",

		   "Italy:Venice",
		   "Italy:Ravenna",
		   "Italy:Genova",
		   "Italy:Porto Nogaro",
		   "Italy:Trieste",

		   "Portugal:Leixoes",
		   "Portugal:Setubal",
		   "Portugal:Aveiro",

		   "Spain:Bilbao",
		   "Spain:Barcelona",
		   "Spain:Valencia",
		   "Spain:Sagunto",
		   "Spain:Santander",

		   "Tunisia:Bizerte",
		   "Tunisia:Sfax",
		   "Tunisia:Rades",
		   "Tunisia:Sousse",
       */
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
					"Slovenia:Koper",
					"Portugal:Funchal",
					"Portugal:Praia da Vitoria",
					"Portugal:Lisboa",
					"Portugal:Leixoes",
					"Portugal:Setubal",
					"Portugal:Aveiro",
					"Portugal:Porto",
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
					"France:Le Havre",
					"France:Marseille",
					"France:Fos sur Mer",
					"Tunisia:Bizerte",
					"Tunisia:Sfax",
					"Tunisia:Rades",
					"Tunisia:Sousse",
					"UK:London Gateway",
					"UK:Tilbuty",
					"UK:Felixstowe",
					"UK:Teesport",
					"Uk:Aberdeen",
					"UK:Belfast",
					"UK:Liverpool",
					"UK:Cardiff",
					"UK:Bristol",
					"Ireland:Dublin",
					"Ireland:Cork",
					"Ireland:Rosslare",
					"Belgium:Antwerp",
					"Belgium:Zeebgrugge",
					"Tunisia:Bizerte",
					"Tunisia:Sfax",
					"Tunisia:Rades",
					"Tunisia:Sousse",
					"Tunisia:Gabes",
	   ],
	   paymentTerms: [
		   "100% Advance payment",
		   "20% advance and 80% against B/L",
		   "L/C (Letter of Credit)",
		   "100% Open Account 30 days (Against invoice at 30 days)",
		   "CAD (Cash Against Documents)",
	   ],
	 	// news
	   //articles: [{type: "beam", quantity: 350, product: "q1|utm3|4x4|10m"}, {type: "pipe", quantity: 1050, product: "q3|um400|12m|10cm"}, {type: "pipe", quantity: 1050, product: "q2|B452X0|4x12cm|2cm"}],
	   //articles: [],
	   articles: {
		   	'REBAR':[],
			'BEAM':[],
			'WIRE ROD':[],
			'MERCHANT BARS':[],
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
 /*
 components: {
    'all-app': all-app,
    'form-articles': form-articles,
	 'lines-articles': lines-articles,
  },
  */
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
	  console.log("url: "+urlMake);

	  //data = {email: "antonio@xxxx.com", name: "Toni Luna", articles: [{type: "beam", quantity: 350, product: "q1|utm3|4x4|10m"}, {type: "pipe", quantity: 1050, product: "q3|um400|12m|10cm"}, {type: "pipe", quantity: 1050, product: "q2|B452X0|4x12cm|2cm"}]};
	  //data = {email: "manolo@xxxx.com", name: "Manolo", articles: [{type: "beam", quantity: 350, product: "q1|utm3|4x4|10m"}]};
	  //data = {email: "antonio@xxxx.com", name: "Toni Luna", articles: this.articles};
	  newArticles = [];
	  _.forEach(this.articles, function(v2,k2) {
		  _.forEach(v2, function(value) {
		  	aux = JSON.stringify(value)
		  	newArticles.push({type:k2, quantity: value.quantity, product: aux});
		 })
	  });
	  // oriol 20230421 - TODO
	  //JSON.stringify(obj);
	  console.log(newArticles);

	  //data = {email: this.email, name: this.name, articles: this.articles};
	  //data = {email: this.email, name: this.name, articles: newArticles};

	  self = this;
	  data = {email: this.email, name: this.name, articles: newArticles, delivery: this.deliveryType, ports: this.deliveryPorts, zipcode: this.DAP.zip, country: this.DAP.country, city: this.DAP.city, payment: this.payment};
	  axios.post(urlMake, data).
	  then(function(response){
		  console.log(response.data);
		  //this.result = response.data["message"];
		  //this.result = "Message sent propertly";

		  self.result = response.data["message"];
		  console.log(self.result);
		  self.$forceUpdate();

		  self.sentEmail();

	  }).
	  //catch(response => (this.message =  JSON.parse(response.data) )).
	  catch(response => (this.result =  response.data )).
	  finally(function(){
	  	self.loading=false;
		console.log("DONE");
	  });
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
		this.deliveryPorts.push(p);
		this.deliveryPorts = _.sortBy(_.uniq(this.deliveryPorts));
	},
  deliveryPlace: function(){
    var good = false;
    if(this.deliveryType == 'CFR'){
      good = this.deliveryPorts.length > 0;
    }
    else if (this.deliveryType == 'DAP') {
      good = this.DAP.country != '';
    }
console.log('good', good);
    return good;
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
		self = this;

		return _.sortBy(_.filter(this.ports, function(o) {
			var thisRegex = new RegExp(self.filterPort);
			return thisRegex.test(o);
		}));
	},
  deliveryGood: function(){
    return this.deliveryPlace();
  },

},
});
