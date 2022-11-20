import React from "react";
import MultiRangeSlider from "./RangeSlider";
import { Chart } from "react-google-charts";

export const datagdp = [["Year","GDP growth (annual %) India","GDP growth (annual %) China","GDP growth (annual %) USA"],
[1960,3.722742533,-27.27,2.3],
[1961,2.931127737,-5.57999999,6.1],
[1962,5.994353261,10.3,4.4],
[1963,7.452950122,18.17999999,5.8],
[1964,-2.63577011,16.95,6.4],
[1965,-0.05532877,10.65,6.5],
[1966,7.82596303,-5.770000004,2.5],
[1967,3.387929176,-4.099999992,4.8],
[1968,6.539700296,16.94,3.1],
[1969,5.157229736,19.3,-0.346648734],
[1970,1.642930384,7.060000003,3.293351653],
[1971,-0.553301312,3.809999998,5.258907331],
[1972,3.295521135,7.760000002,5.645722571],
[1973,1.18533626,2.31,-0.540551663],
[1974,9.149912015,8.72,-0.205456064],
[1975,1.663103637,-1.570000003,5.388139293],
[1976,7.254764586,7.569999999,4.624153064],
[1977,5.712532089,11.32597799,5.53530496],
[1978,-5.238182703,7.59132468,3.166145311],
[1979,6.735821528,7.834145016,-0.256749677],
[1980,6.006203624,5.112761091,2.537719298],
[1981,3.47573324,9.017113914,-1.802887407],
[1982,7.288892901,10.77020251,4.583913364],
[1983,3.820737856,15.19154002,7.236633158],
[1984,5.254299223,13.43067752,4.169656215],
[1985,4.77656417,8.949961764,3.462645977],
[1986,3.965355634,11.65742779,3.459251985],
[1987,9.62778292,11.22259498,4.177061284],
[1988,5.947343328,4.206334355,3.672648159],
[1989,5.533454563,3.920251368,1.885964958],
[1990,1.056831433,9.262786084,-0.108264787],
[1991,5.482396022,14.22452959,3.522440523],
[1992,4.75077622,13.8837293,2.751781042],
[1993,6.658924067,13.03680663,4.028793263],
[1994,7.57449184,10.95395434,2.684217275],
[1995,7.549522249,9.922556752,3.772565502],
[1996,4.049820849,9.236779892,4.381775174],
[1997,6.184415821,7.845951788,4.481407561],
[1998,8.845755561,7.661651501,4.753235983],
[1999,3.840991157,8.490093406,4.127484017],
[2000,4.823966264,8.335733478,0.998340792],
[2001,3.803975321,9.13363079,1.741695251],
[2002,7.860381476,10.03803048,2.861210768],
[2003,7.922936613,10.11362138,3.798891125],
[2004,7.923430621,11.39459181,3.513213799],
[2005,8.060732573,12.72095567,2.854972294],
[2006,7.660815065,14.23086093,1.876171454],
[2007,3.08669806,9.65067892,-0.136579803],
[2008,7.861888833,9.398725632,-2.536757067],
[2009,8.497584702,10.63587106,2.56376656],
[2010,5.241315001,9.550832179,1.550835505],
[2011,5.456388753,7.863736449,2.249545852],
[2012,6.386106401,7.766150098,1.842081071],
[2013,7.410227605,7.425763656,2.525973446],
[2014,7.996253786,7.041328879,3.07551465],
[2015,8.256305502,6.848762205,1.711426774],
[2016,6.795383419,6.947200793,2.332679395],
[2017,6.532989011,6.749773832,2.996464352],
[2018,4.041554187,5.949714233,2.161176515],
[2019,-7.964610411,2.3,-3.486140408]];

console.log(datagdp);

export const optionsgdp = {
  title: "GDP",
};

export const dataoutflow = [["Year","FDI net outflows China","FDI net outflows India","FDI net outflows USA" ],
[1969,0,0,6490000000],
[1970,0,0,5620000000],
[1971,0,0,7330000000],
[1972,0,0,9340000000],
[1973,0,0,5160000000],
[1974,0,0,13730000000],
[1975,0,0,11320000000],
[1976,0,0,11280000000],
[1977,0,0,14370000000],
[1978,0,0,24720000000],
[1979,0,4000000,19040000000],
[1980,0,2000000,10110000000],
[1981,44000000,1000000,7774000000],
[1982,93000000,5000000,8770000000],
[1983,134000000,4000000,12820000000],
[1984,629000000,3000000,3680000000],
[1985,450000000,-1000000,19524000000],
[1986,645000000,5000000,39797000000],
[1987,850000000,11000000,21701000000],
[1988,780000000,10000000,50980000000],
[1989,830000000,6000000,59940000000],
[1990,913000000,-11000000,49270000000],
[1991,4000000000,24000000,58770000000],
[1992,4400000000,350640.5619,82800000000],
[1993,2000000000,82583302.7,89990000000],
[1994,2000000000,117189079.2,1.1006],
[1995,2114000000,239324706.5,1.0302],
[1996,3765000000,112918990.4,1.2138],
[1997,4527000000,47593027.49,1.7476],
[1998,4036000000,79357457.32,2.47485],
[1999,4612000000,509532974.7,1.8637],
[2000,9696000000,1054132218,1.46041],
[2001,6284049719,1261071115,1.78985],
[2002,8456083724,1237846245,1.95218],
[2003,7972601714,1837062923,3.74004],
[2004,13729566303,2640754960,52591000000],
[2005,23932198468,14036833332,2.83801],
[2006,17154799702,17026111929,5.2389],
[2007,56742276630,19256527246,3.43583],
[2008,43889985500,16095583747,3.12597],
[2009,57953599366,15968099288,3.49828],
[2010,48420641060,12607994610,4.36616],
[2011,64963386524,8553237671,3.7724],
[2012,72970879683,1764948800,3.92796],
[2013,1.2313,11686480933,3.87529],
[2014,1.74391,7514275639,3.02071],
[2015,2.16424,5047292606,2.99815],
[2016,1.38293,11090150305,4.09413],
[2017,1.43027,11417789536,-1.30016],
[2018,1.3691,13140702032,1.22191],
[2019,1.09922,11122667604,3.11692],
[2020,0,0,0]];

export const optionsoutflow = {
  title: "FDI Outflows",
};

export const datainflow = [["Year","FDI net inflows China","FDI net intflows India","FDI net inflows USA" ],
[1960,0,0,0],
[1961,0,0,0],
[1962,0,0,0],
[1963,0,0,0],
[1964,0,0,0],
[1965,0,0,0],
[1966,0,0,0],
[1967,0,0,0],
[1968,0,0,0],
[1969,0,0.072826324,0.113667809],
[1970,0,0.070763624,0.0661029320],
[1971,0,0.024893934,0.099287786],
[1972,0,0.044331264,0.135402869],
[1973,0,0.057241382,0.229090182],
[1974,0,-0.010486395,0.137099799],
[1975,0,-0.007502573,0.155331555],
[1976,0,-0.029682109,0.140261482],
[1977,0,0.0131755,0.233883413],
[1978,4.49E-05,0.03174683,0.306394355],
[1979,0.029819636,0.042484827,0.585866342],
[1980,0.135296316,0.047506181,0.800738126],
[1981,0.209664357,0.03591159,0.634908483],
[1982,0.275698543,0.002584047,0.316452387],
[1983,0.483945715,0.009068703,0.624874152],
[1984,0.536046583,0.045627777,0.221941613],
[1985,0.623424606,0.047283784,0.675731298],
[1986,0.847702965,0.076091199,1.302414002],
[1987,1.022558946,0.030766482,1.086807482],
[1988,0.97565029,0.085156734,1.343240723],
[1989,0.966308311,0.073740021,1.194504107],
[1990,1.138837732,0.02722554,0.561047032],
[1991,2.613162193,0.095941829,0.464853987],
[1992,6.186882076,0.197056163,0.732369584],
[1993,5.987156294,0.297385909,0.767643589],
[1994,4.88044416,0.594986258,0.904218188],
[1995,4.651826651,0.617479056,1.209693103],
[1996,4.725334152,0.860208566,1.424065573],
[1997,4.435577102,0.625285966,2.329849229],
[1998,3.74900388,0.472644846,3.244314135],
[1999,3.475082246,0.765212649,3.405318336],
[2000,3.51300212,1.056378305,1.630116343],
[2001,3.609099885,1.011571805,1.015460357],
[2002,3.48740331,0.605889255,1.022023979],
[2003,3.483641114,0.765601405,1.749187307],
[2004,4.554254034,0.88610072,1.091876415],
[2005,4.508579016,2.130168425,2.160487842],
[2006,4.40096483,2.073395746,2.398397384],
[2007,3.73363489,3.620521897,2.318328109],
[2008,2.568888291,2.651593127,1.114843565],
[2009,4.0035629,1.635034274,1.761193112],
[2010,3.708828902,2.002065552,1.695323307],
[2011,2.827090556,1.312934337,1.545625032],
[2012,3.039875469,1.516275965,1.716613576],
[2013,2.559233447,1.695658786,1.436946698],
[2014,2.192181603,2.092115758,2.80417574],
[2015,1.55564215,1.937363198,2.53073398],
[2016,1.349132679,1.507316581,1.948643533],
[2017,1.693905294,1.559263523,1.039765408],
[2018,1.310718781,1.763127508,1.409955825],
[2019,0,0,0],
[2020,0,0,0]]
export const optionsinflow = {
  title: "FDI Inflows",
  
};


class Home extends React.Component {

  constructor(){
    super();
    this.country = "";
    this.minRange= 1970;
    this.maxRange= 2020;
    this.changedDataGdp = JSON.parse(JSON.stringify(datagdp));
    this.changedDataoutflow = JSON.parse(JSON.stringify(dataoutflow));
    this.changedDatainflow = JSON.parse(JSON.stringify(datainflow));
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onRangeChange = this.onRangeChange.bind(this);

    this.state = {
      changedDataGdp: this.changedDataGdp,
      changedDataoutflow: this.changedDataoutflow,
      changedDatainflow: this.changedDatainflow
    }
  }

  onCountryChange(event){
    this.country=event.target.value;
    this.changedDataGdp = JSON.parse(JSON.stringify(datagdp));
    this.changedDataoutflow = JSON.parse(JSON.stringify(dataoutflow));
    this.changedDatainflow = JSON.parse(JSON.stringify(datainflow));
    if(this.country === "India"){
      for(let i=0; i<this.changedDataGdp.length; i++){
        this.changedDataGdp[i].splice(2,2);
      }
      for(let i=0; i<this.changedDataoutflow.length; i++){
        this.changedDataoutflow[i].splice(2,2);
      }
      for(let i=0; i<this.changedDatainflow.length; i++){
        this.changedDatainflow[i].splice(2,2);
      }
      this.setState({
        changedDataGdp: this.changedDataGdp,
        changedDataoutflow: this.changedDataoutflow,
        changedDatainflow: this.changedDatainflow
      });


    } else if(this.country === "China") {
      for(let i=0; i<this.changedDataGdp.length; i++){
        this.changedDataGdp[i].splice(1,1);
        this.changedDataGdp[i].pop();
      }
      for(let i=0; i<this.changedDataoutflow.length; i++){
        this.changedDataoutflow[i].splice(1,1);
        this.changedDataoutflow[i].pop();
      }
      for(let i=0; i<this.changedDatainflow.length; i++){
        this.changedDatainflow[i].splice(1,1);
        this.changedDatainflow[i].pop();
      }
      this.setState({
        changedDataGdp: this.changedDataGdp,
        changedDataoutflow: this.changedDataoutflow,
        changedDatainflow: this.changedDatainflow
      });
    } else if(this.country === "USA") {
      for(let i=0; i<this.changedDataGdp.length; i++){
        this.changedDataGdp[i].splice(1,2);
      }
      for(let i=0; i<this.changedDataoutflow.length; i++){
        this.changedDataoutflow[i].splice(1,2);
      }
      for(let i=0; i<this.changedDatainflow.length; i++){
        this.changedDatainflow[i].splice(1,2);
      }
      this.setState({
        changedDataGdp: this.changedDataGdp,
        changedDataoutflow: this.changedDataoutflow,
        changedDatainflow: this.changedDatainflow
      });
    }
    
  }


  onRangeChange(min, max){
    this.rangeChangedDataGdp = JSON.parse(JSON.stringify(this.changedDataGdp));
    if(min != 1970 || max !=2020){
      for(let i=1; i<this.rangeChangedDataGdp.length; i++){
        if(this.rangeChangedDataGdp[i][0] === min) {
          this.rangeChangedDataGdp.splice(1, i);
        }
        if(this.rangeChangedDataGdp[i][0] === max) {
          this.rangeChangedDataGdp.splice(i,this.rangeChangedDataGdp.length - 1);
        }
      }
      /*this.setState({
        changedDataGdp: this.rangeChangedDataGdp
      });*/
    }
    
  }
 
  render() {
    
    return (
      <div>
          <label for="country-choice">Select Country: </label>
          <input list="country-choices" id="country-choice" name="country-choice" 
           onChange={(event) => {
            this.onCountryChange(event);
          }}/>
          <datalist id="country-choices">
              <option value="India" />
              <option value="China"/>
              <option value="USA"/>
          </datalist>

          <MultiRangeSlider
            min={1970}
            max={2020}
            onChange={({ min, max }) => {
              this.onRangeChange(min, max)
            }}
          />
        <Chart id ='gdp'
          chartType="LineChart"
          width="100%"
          height="280px"
          data={this.state.changedDataGdp}
          options={optionsgdp}
          />
        <Chart id ='outflow'
          chartType="LineChart"
          width="100%"
          height="280px"
          data={this.state.changedDataoutflow}
          options={optionsoutflow}
          />
        <Chart id ='inflow'
          chartType="LineChart"
          width="100%"
          height="280px"
          data={this.state.changedDatainflow}
          options={optionsinflow}
          
        />
      </div>
      
    )
  }
}
         
 export default Home;