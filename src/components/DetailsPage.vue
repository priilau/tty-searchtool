<template>
    <div class="container">
        <div id="sample-header">
            <h5>Details</h5>
        </div>
        <table class="table">
            <tr v-for="(rowVal, rowKey) in this.detailsObj" :key="rowKey">
                <th>{{rowKey}}</th>
                <td>{{rowVal}}</td>
            </tr>
        </table>
        <button v-on:click="goBack" class="btn btn-primary">Back</button>
    </div>
</template>

<script src="./detailspage.js"></script>