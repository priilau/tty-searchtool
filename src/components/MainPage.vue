<template>
    <div class="container">
        <div class="search-inputs-container row">
            <div class="search-inputs col-sm">
                <div class="input mb-2">
                    <input v-model="locality" placeholder="locality" type="text">
                    <select @change="onChange($event, 'locality')" name="resultsFilterLocality" class="results-filter dropdown ml-2">
                        <option value="" selected disabled hidden>contains</option>
                        <option value="contains">contains</option>
                        <option value="exact">exact</option>
                        <option value="startswith">starts with</option>
                        <option value="endswith">ends with</option>
                    </select>
                </div>
                <div class="input mb-2">
                    <input v-model="type" placeholder="type" type="text">
                    <select @change="onChange($event, 'type')" name="resultsFilterType" class="results-filter dropdown ml-2 px-auto">
                        <option value="" selected disabled hidden>contains</option>
                        <option value="contains">contains</option>
                        <option value="exact">exact</option>
                        <option value="startswith">starts with</option>
                        <option value="endswith">ends with</option>
                    </select>
                </div>
                <div class="input mb-2">
                    <input v-model="settlement" placeholder="settlement" type="text">
                    <select @change="onChange($event, 'settlement')" name="resultsFilterSettlement" class="results-filter dropdown ml-2">
                        <option value="" selected disabled hidden>contains</option>
                        <option value="contains">contains</option>
                        <option value="exact">exact</option>
                        <option value="startswith">starts with</option>
                        <option value="endswith">ends with</option>
                    </select>
                </div>
                <div class="input mb-2">
                    <input v-model="county" placeholder="county" type="text">
                    <select @change="onChange($event, 'county')" name="resultsFilterCounty" class="results-filter dropdown ml-2">
                        <option value="" selected disabled hidden>contains</option>
                        <option value="contains">contains</option>
                        <option value="exact">exact</option>
                        <option value="startswith">starts with</option>
                        <option value="endswith">ends with</option>
                    </select>
                </div>
                <div class="input mb-2">
                    <input v-model="country" placeholder="country" type="text">
                    <select @change="onChange($event, 'country')" name="resultsFilterCountry" class="results-filter dropdown ml-2">
                        <option value="" selected disabled hidden>contains</option>
                        <option value="contains">contains</option>
                        <option value="exact">exact</option>
                        <option value="startswith">starts with</option>
                        <option value="endswith">ends with</option>
                    </select>
                </div>
            </div>
            <div class="additional-information col-sm">
                <h4>Additional information:</h4>
                <p>Use the input fields to add search parameters.</p>
                <p>If search fields are left empty, every entry from the table will be displayed(paginated).</p>
                <p>Select a search criteria for each field from the dropdown list.</p>
                <p>These search fields are intended to be used in English.</p>
            </div>
        </div>
        <div class="search-parameters d-flex justify-content-between">
            <div class="results-per-page dropdown">
            <label for="resultsPerPage">Results per page:</label>
            <select @change="onChange($event)" name="resultsPerPage" class="ml-2">
                <option value="" selected disabled hidden>25</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
            </select>
        </div>
        <div class="search-button">
            <button v-on:click="getSearchResults(true)" class="btn btn-primary">Search</button>
        </div>
    </div>
      <div v-if="results" class="search-results-container text-center">
        <div id="items-found mx-auto">
            <span>Items found: {{results["count"]}}</span>
        </div>
        <div v-if="results['count'] != 0" class="search-results">
            <div id="row" class="p-2">
                <button v-on:click="changePage(-1)" class="btn btn-primary">Prev</button>
                <span class="px-3">{{this.results["page"]}}</span>
                <button v-on:click="changePage(1)" class="btn btn-primary">Next</button>
            </div>
            <div class="search-results headers row">
                <h4 class="col-sm">
                    Locality
                </h4>
                <h4 class="col-sm">
                    Type
                </h4>
                <h4 class="col-sm">
                    Settlement
                </h4>
                <h4 class="col-sm">
                    County
                </h4>
                <h4 class="col-sm">
                    Country
                </h4>
            </div>
            <div v-on:click="goToSamplePage(result.id, result)" v-for="result in results['results']" :key="result.id" class="result row border-bottom p-2">
                <div class="col-sm">
                    {{result.locality_en}}
                </div>
                <div class="col-sm">
                    {{result.type__value_en}}
                </div>
                <div class="col-sm">
                    {{result.asustusyksus__asustusyksus_en}}
                </div>
                <div class="col-sm">
                    {{result.maakond__maakond_en}}
                </div>
                <div class="col-sm">
                    {{result.country__value_en}}
                </div>
            </div>
            <div id="row" class="p-2">
                <button v-on:click="changePage(-1)" class="btn btn-primary">Prev</button>
                <span class="px-3">{{this.results["page"]}}</span>
                <button v-on:click="changePage(1)" class="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script src="./mainpage.js"></script>