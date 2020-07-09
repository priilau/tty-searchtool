import "./MainPage.css";
const axios = require('axios').default;

export default {
    name: "home",
    data () {
        return {
            results: null,
            currentPage: 1,
            lastPage: null,
            resultsPerPage: 25,
            resultsFilterLocality: "contains",
            resultsFilterType: "contains",
            resultsFilterSettlement: "contains",
            resultsFilterCounty: "contains",
            resultsFilterCountry: "contains",
            locality: "",
            type: "",
            settlement: "",
            county: "",
            country: "",
        }
    },
    methods: {
        onChange: function (event, searchField) {
            if(Number.isInteger(parseInt(event.target.value))){
                this.resultsPerPage = event.target.value;
            } else {
                if(searchField == "locality") {
                    this.resultsFilterLocality = event.target.value;
                } else if(searchField == "type") {
                    this.resultsFilterType = event.target.value;
                } else if(searchField == "settlement") {
                    this.resultsFilterSettlement = event.target.value;
                } else if(searchField == "county") {
                    this.resultsFilterCounty = event.target.value;
                } else if(searchField == "country") {
                    this.resultsFilterCountry= event.target.value;
                } else {
                    console.log("onChange() error: searchField unspecified!");
                }
            }
        },
        getSearchResults: async function (resetCurrPage) {
            if(resetCurrPage){
                this.currentPage = 1;
            }
            let url = "https://api.geocollections.info/locality";
            let searchString = "";

            if(this.locality.replace(/\s/g,'').length > 0) {
                searchString += "/?locality_en__" + this.resultsFilterLocality + "=" + this.locality;
            }
            if(this.type.replace(/\s/g,'').length > 0) {
                if(searchString.replace(/\s/g,'').length > 0){
                    searchString += "&";
                } else {
                    searchString += "/?";
                }
                searchString += "type__value_en__" + this.resultsFilterType + "=" + this.type;
            }
            if(this.settlement.replace(/\s/g,'').length > 0) {
                if(searchString.replace(/\s/g,'').length > 0){
                    searchString += "&";
                } else {
                    searchString += "/?";
                }
                searchString += "asustusyksus__asustusyksus_en__" + this.resultsFilterSettlement + "=" + this.settlement;
            }
            if(this.county.replace(/\s/g,'').length > 0) {
                if(searchString.replace(/\s/g,'').length > 0){
                    searchString += "&";
                } else {
                    searchString += "/?";
                }
                searchString += "maakond__maakond_en__" + this.resultsFilterCounty + "=" + this.county;
            }
            if(this.country.replace(/\s/g,'').length > 0) {
                if(searchString.replace(/\s/g,'').length > 0){
                    searchString += "&";
                } else {
                    searchString += "/?";
                }
                searchString += "country__value_en__" + this.resultsFilterCountry + "=" + this.country;
            }
            if(searchString.replace(/\s/g,'').length > 0){
                searchString += "&paginate_by=" + this.resultsPerPage + "&page=" + this.currentPage;
            } else {
                searchString = "/?paginate_by=" + this.resultsPerPage + "&page=" + this.currentPage;
            }

            let res = await axios
            .get(url + searchString)
            .catch(error => console.log(error));
            this.results = res.data;

            if(this.results !== null && this.results["count"] > 0) {
                let pageStringArr = this.results["page"].split(" ");
                this.lastPage = pageStringArr[pageStringArr.length - 1];
            }
        },
        changePage: function (val) {
            if((val < 0 && this.currentPage != 1) || (val > 0 && this.currentPage != this.lastPage)) {
                this.currentPage += val;
            }
            this.getSearchResults(false);
        },
        goToSamplePage: function (id, result) {
            this.$router.push({ name: 'detailed', params: { detailsId: id, detailsObj: result }})
        } 
    },
};