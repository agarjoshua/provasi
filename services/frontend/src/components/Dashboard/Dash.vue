<template>
  <div class="">
    <section class="container-fluid px-5">
      <div>
        <h3 class="ms-md-5 mt-md-5 mb-md-5">Manage property(Listings)</h3>

        <!--CRUD property-->

        <div class="">
          <br />
          <div class="my-1">
            <div class="form-inline" action="#">
              <input
                type="text"
                id="form-name"
                v-model="item.name"
                placeholder="Name"
                class="form-control my-3"
              />
              <input
                type="text"
                v-model="item.desc"
                placeholder="Description"
                class="form-control my-3"
                v-on:keyup.enter="addItem"
              />
              <button @click="addItem" class="btn">
                <i class="bi bi-plus-square h3"></i>
              </button>
            </div>
          </div>

          <table class="">
            <thead class="thead-light">
              <th>Name</th>
              <th>Description</th>
              <th class="col-2">Edit/Delete</th>
            </thead>
            <tr v-for="(item, index) in items" :key="item">
              <td>
                <input
                  v-if="item.edit"
                  type="text"
                  v-model="item.name"
                  v-on:keyup.enter="item.edit = !item.edit"
                />
                <span v-else>{{ item.name }} </span>
              </td>
              <td>
                <input
                  v-if="item.edit"
                  type="text-secondary"
                  v-model="item.desc"
                  v-on:keyup.enter="item.edit = !item.edit"
                />
                <span v-else>{{ item.desc }} </span>
              </td>
              <td>
                <button
                  @click="item.edit = !item.edit"
                  type="button"
                  class="btn btn-info px-5"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button @click="removeItem(index)" class="btn btn-danger px-5">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </table>
        </div>

        <!--CRUD property-->

        <!--CRUD property-->
        <div class="row">
          <!--CRUD property listings table-->
          <div class="col-md-6">
            <br />
            <h4>Property Listings</h4>
            <div class="">
              <div class="form-inline" action="#">
                <input
                  type="text"
                  id="property-listing"
                  v-model="listing.property"
                  placeholder="Name"
                  class="form-control my-3"
                />
                <input
                  type="text"
                  v-model="listing.check"
                  placeholder="Description"
                  class="form-control my-3"
                  v-on:keyup.enter="addPropertyListing"
                />
                <button @click="addPropertyListing" class="btn">
                  <i class="bi bi-plus-square h3"></i>
                </button>
              </div>
            </div>

            <table class="">
              <thead class="thead-light">
                <th>property Id</th>
                <th>check</th>
                <th class="col-2">Edit/Delete</th>
              </thead>
              <tr v-for="(listing, index) in listings" :key="listing">
                <td>
                  <input
                    v-if="listing.edit"
                    type="text"
                    v-model="listing.name"
                    v-on:keyup.enter="listing.edit = !listing.edit"
                  />
                  <span v-else>{{ listing.name }} </span>
                </td>
                <td>
                  <input
                    v-if="listing.edit"
                    type="text-secondary"
                    v-model="listing.check"
                    v-on:keyup.enter="listing.edit = !listing.edit"
                  />
                  <span v-else>{{ listing.check }} </span>
                </td>
                <td>
                  <button
                    @click="listing.edit = !listing.edit"
                    type="button"
                    class="btn btn-info px-5"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    @click="removePropertyListing(index)"
                    class="btn btn-danger px-5"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <!--CRUD property listings table-->

          <!--CRUD Feasibility Study table-->
          <div class="col-md-6">
            <br />
            <h4>Feasibility Study</h4>
            <div class="">
              <div class="form-inline" action="#">
                <input
                  type="text"
                  id="feasibility"
                  v-model="feasibility.property"
                  placeholder="Name"
                  class="form-control my-3"
                />
                <input
                  type="text"
                  v-model="feasibility.check"
                  placeholder="Description"
                  class="form-control my-3"
                  v-on:keyup.enter="addFeasibilityStudy"
                />
                <button @click="addFeasibilityStudy" class="btn">
                  <i class="bi bi-plus-square h3"></i>
                </button>
              </div>
            </div>

            <table class="">
              <thead class="thead-light">
                <th>Property</th>
                <th>Check</th>
                <th class="col-2">Edit/Delete</th>
              </thead>
              <tr
                v-for="(feasibility, index) in feasibilities"
                :key="feasibility"
              >
                <td>
                  <input
                    v-if="feasibility.edit"
                    type="text"
                    v-model="feasibility.property"
                    v-on:keyup.enter="feasibility.edit = !feasibility.edit"
                  />
                  <span v-else>{{ feasibility.property }} </span>
                </td>
                <td>
                  <input
                    v-if="feasibility.edit"
                    type="text-secondary"
                    v-model="feasibility.check"
                    v-on:keyup.enter="feasibility.edit = !feasibility.edit"
                  />
                  <span v-else>{{ feasibility.check }} </span>
                </td>
                <td>
                  <button
                    @click="feasibility.edit = !feasibility.edit"
                    type="button"
                    class="btn btn-info px-5"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    @click="removeFeasibilityStudy(index)"
                    class="btn btn-danger px-5"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <!--CRUD Feasibility Study table-->
        </div>

        <div class="row">
          <!--CRUD Sales listings table-->
          <div class="col-md-6">
            <br />
            <h4>Sales Listings</h4>
            <div class="">
              <div class="form-inline" action="#">
                <input
                  type="text"
                  id="saleslisting"
                  v-model="saleslisting.property"
                  placeholder="Name"
                  class="form-control my-3"
                />
                <input
                  type="text"
                  v-model="saleslisting.check"
                  placeholder="Description"
                  class="form-control my-3"
                  v-on:keyup.enter="addSalesListings"
                />
                <button @click="addSalesListings" class="btn">
                  <i class="bi bi-plus-square h3"></i>
                </button>
              </div>
            </div>

            <table class="">
              <thead class="thead-light">
                <th>property</th>
                <th>Check</th>
                <th class="col-2">Edit/Delete</th>
              </thead>
              <tr
                v-for="(saleslisting, index) in saleslistings"
                :key="saleslisting"
              >
                <td>
                  <input
                    v-if="saleslisting.edit"
                    type="text"
                    v-model="saleslisting.property"
                    v-on:keyup.enter="saleslisting.edit = !saleslisting.edit"
                  />
                  <span v-else>{{ saleslisting.property }} </span>
                </td>
                <td>
                  <input
                    v-if="saleslisting.edit"
                    type="text-secondary"
                    v-model="saleslisting.check"
                    v-on:keyup.enter="saleslisting.edit = !saleslisting.edit"
                  />
                  <span v-else>{{ saleslisting.check }} </span>
                </td>
                <td>
                  <button
                    @click="saleslisting.edit = !saleslisting.edit"
                    type="button"
                    class="btn btn-info px-5"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    @click="removeSalesListings(index)"
                    class="btn btn-danger px-5"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <!--CRUD Sales listings table-->

          <!--CRUD Acquisitions table-->
          <div class="col-md-6">
            <br />
            <h4>Acquisitions</h4>
            <div class="">
              <div class="form-inline" action="#">
                <input
                  type="text"
                  id="acquisitions"
                  v-model="acquisition.property"
                  placeholder="Name"
                  class="form-control my-3"
                />
                <input
                  type="text"
                  v-model="acquisition.check"
                  placeholder="Description"
                  class="form-control my-3"
                  v-on:keyup.enter="addAcquisitions"
                />
                <button @click="addAcquisitions" class="btn">
                  <i class="bi bi-plus-square h3"></i>
                </button>
              </div>
            </div>

            <table class="">
              <thead class="thead-light">
                <th>Property</th>
                <th>Check</th>
                <th class="col-2">Edit/Delete</th>
              </thead>
              <tr
                v-for="(acquisition, index) in acquisitions"
                :key="acquisition"
              >
                <td>
                  <input
                    v-if="acquisition.edit"
                    type="text"
                    v-model="acquisition.property"
                    v-on:keyup.enter="acquisition.edit = !acquisition.edit"
                  />
                  <span v-else>{{ acquisition.property }} </span>
                </td>
                <td>
                  <input
                    v-if="acquisition.edit"
                    type="text-secondary"
                    v-model="acquisition.check"
                    v-on:keyup.enter="acquisition.edit = !acquisition.edit"
                  />
                  <span v-else>{{ acquisition.check }} </span>
                </td>
                <td>
                  <button
                    @click="acquisition.edit = !acquisition.edit"
                    type="button"
                    class="btn btn-info px-5"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    @click="removeAcquisitions(index)"
                    class="btn btn-danger px-5"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <!--CRUD Acquisitions table-->
        </div>

        <div class="row mb-5">
          <!--CRUD Management Research table-->
          <div class="col-md-6">
            <br />
            <h4>Management Research</h4>
            <div class="">
              <div class="form-inline" action="#">
                <input
                  type="text"
                  id="research"
                  v-model="research.property"
                  placeholder="Name"
                  class="form-control my-3"
                />
                <input
                  type="text"
                  v-model="research.check"
                  placeholder="Description"
                  class="form-control my-3"
                  v-on:keyup.enter="addManagementResearch"
                />
                <button @click="addManagementResearch" class="btn">
                  <i class="bi bi-plus-square h3"></i>
                </button>
              </div>
            </div>

            <table class="">
              <thead class="thead-light">
                <th>Property</th>
                <th>check</th>
                <th class="col-2">Edit/Delete</th>
              </thead>
              <tr v-for="(research, index) in researches" :key="research">
                <td>
                  <input
                    v-if="research.edit"
                    type="text"
                    v-model="research.property"
                    v-on:keyup.enter="research.edit = !research.edit"
                  />
                  <span v-else>{{ research.property }} </span>
                </td>
                <td>
                  <input
                    v-if="research.edit"
                    type="text-secondary"
                    v-model="research.check"
                    v-on:keyup.enter="research.edit = !research.edit"
                  />
                  <span v-else>{{ research.check }} </span>
                </td>
                <td>
                  <button
                    @click="research.edit = !research.edit"
                    type="button"
                    class="btn btn-info px-5"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    @click="removeManagementResearch(index)"
                    class="btn btn-danger px-5"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <!--CRUD Management Research table-->

          <!--CRUD Property Valuations table-->
          <div class="col-md-6">
            <br />
            <h4>Property Valuations</h4>
            <div class="">
              <div class="form-inline" action="#">
                <input
                  type="text"
                  id="valuations"
                  v-model="valuation.property"
                  placeholder="Name"
                  class="form-control my-3"
                />
                <input
                  type="text"
                  id="valuations"
                  v-model="valuation.companies"
                  placeholder="Companies"
                  class="form-control my-3"
                />
                <input
                  type="text"
                  v-model="valuation.check"
                  placeholder="check"
                  class="form-control my-3"
                  v-on:keyup.enter="addpropertyValuations"
                />
                <button @click="addpropertyValuations" class="btn">
                  <i class="bi bi-plus-square h3"></i>
                </button>
              </div>
            </div>

            <table class="">
              <thead class="thead-light">
                <th>Name</th>
                <th>companies</th>
                <th>Check</th>
                <th class="col-2">Edit/Delete</th>
              </thead>
              <tr v-for="(valuation, index) in valuations" :key="valuation">
                <td>
                  <input
                    v-if="valuation.edit"
                    type="text"
                    v-model="valuation.property"
                    v-on:keyup.enter="valuation.edit = !valuation.edit"
                  />
                  <span v-else>{{ valuation.property }} </span>
                </td>
                <td>
                  <input
                    v-if="valuation.edit"
                    type="text-secondary"
                    v-model="valuation.companies"
                    v-on:keyup.enter="valuation.edit = !valuation.edit"
                  />
                  <span v-else>{{ valuation.companies }} </span>
                </td>
                <td>
                  <input
                    v-if="valuation.edit"
                    type="text-secondary"
                    v-model="valuation.check"
                    v-on:keyup.enter="valuation.edit = !valuation.edit"
                  />
                  <span v-else>{{ valuation.check }} </span>
                </td>
                <td>
                  <button
                    @click="valuation.edit = !valuation.edit"
                    type="button"
                    class="btn btn-info px-5"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    @click="removePropertyValuations(index)"
                    class="btn btn-danger px-5"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.height {
  height: 10vh;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(111, 111, 134);
}

.search input {
  height: 60px;
  text-indent: 25px;
  border: 1px solid rgb(111, 111, 134);
}

.search input:focus {
  box-shadow: none;
  border: 2px solid rgb(111, 111, 134);
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px;
}

.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: rgb(66, 185, 131);
}
</style>

<script>
import $ from "jquery";
export default {
  data: function () {
    return {
      item: { name: "", property_number: "", edit: false },
      items: [],
      listing: { property: "", check: "" },
      listings: [],
      feasibility: { property: "", check: "" },
      feasibilities: [],
      saleslisting: { property: "", check: "" },
      saleslistings: [],
      acquisition: { property: "", check: "" },
      acquisitions: [],
      research: { property: "", check: "" },
      // dont box me, I know research is plural, so please get waaaay off my back with that, I'll fix it later
      researches: [],
      valuation: { property: "", companies: "", check: "" },
      valuations: [],
  };
  },
  methods: {
    searchProperty() {},
    addItem() {
      this.items.push({
        name: this.item.name,
        property_number: this.item.property_number,
        edit: false,
      });
      this.item = [];
      $("#form-name").focus();
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },

    addPropertyListing() {
      this.listings.push({
        property: this.listing.property,
        check: this.listing.check,
      });
      this.listing = [];
      $("#property-listing").focus();
    },
    removePropertyListing(index) {
      this.listings.splice(index, 1);
    },
    addFeasibilityStudy() {
      this.feasibilities.push({
        property: this.feasibility.property,
        check: this.feasibility.check,
      });
      this.feasibility = [];
      $("feasibility").focus();
    },
    removeFeasibilityStudy(index) {
      this.feasibilities.splice(index, 1);
    },

    addSalesListings() {
      this.saleslistings.push({
        property: this.saleslisting.property,
        check: this.saleslisting.check,
      });
      this.saleslisting = [];
      $("saleslisting").focus();
    },
    removeSalesListings(index) {
      this.saleslistings.splice(index, 1);
    },

    addAcquisitions() {
      this.acquisitions.push({
        property: this.acquisition.property,
        check: this.acquisition.check,
      });
      this.acquisition = [];
      $("acquisitions").focus();
    },
    removeAcquisitions(index) {
      this.acquisitions.splice(index, 1);
    },

    addManagementResearch() {
      this.researches.push({
        property: this.research.property,
        check: this.research.check,
      });
      this.research = [];
      $("research").focus();
    },
    removeManagementResearch(index) {
      this.researches.splice(index, 1)
    },

    addpropertyValuations() {
      this.valuations.push({
        property: this.valuation.property,
        companies: this.valuation.companies,
        check: this.valuation.check
      });
      this.valuation = [];
      $("valuations").focus();
    },
    removePropertyValuations(index) {
      this.valuations.splice(index, 1)
    },
  },
};
</script>
