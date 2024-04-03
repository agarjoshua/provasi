<template>
  <div class="container-fluid">
    <h1>search for your property-listing</h1>
    
      <div class="row">
        <div class="search-wrapper panel-heading col-sm-6 mx-auto">
          <input
            class="form-control"
            type="text"
            v-model="searchQuery"
            placeholder="Search"
          />
        </div>
      </div>
      <!-- <div class="panel-body" style="max-height: 400px;overflow-y: scroll;"> --> 
      <div>
        <table v-if="listings.length" class="table">
          <thead>
            <tr>
              <th>listings</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredlistings" :key="item">
                <td><a v-bind:href="item.property_number" target="_blank">{{ item.name }}</a></td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div>
</template>

<style></style>

<script>
import axios from 'axios';
export default {
  data () {
        return {
          searchQuery: "",
          listings: [],
          errors: []
        }
        },
      computed: {
        filteredlistings() {
          if (this.searchQuery) {
            return this.listings.filter((item) => {
              return item.name.startsWith(this.searchQuery);
            });
          } else {
            return this.listings;
          }
        },
      },
 
      created() {
        axios.get(`http://0.0.0.0:5000/home`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.listings = response.data
          console.log(this.listings)
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    };
</script>
