const axios = require('axios').default;
    export default {
        name: "detailed",
        data () {
            return {

            }
        },
        props: {
            detailsObj: Object
        },
        methods: {
            goBack: function () {
                this.$router.back();
            }
        },
        mounted: function () {
            if(this.detailsObj === null || this.detailsObj === undefined) {
                this.$router.push({name: "home"})
            }
        }
    }