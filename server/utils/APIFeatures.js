class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    const search = this.queryString.search;
    if (search) {
      const regexSearch = new RegExp(search, 'i');
      this.query = this.query.find({
        $or:[
          {
            title: regexSearch
          },
          {
            'tag.value': regexSearch
          }
        ]
      }).select("-content");
    }
    return this;
  }

  filter() {
    //1A. filltering
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields","category","tag", "search"];
    excludedFields.forEach((el) => delete queryObj[el]);
    //1B. advanced filltering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // console.log(JSON.parse(queryStr))
    // let query =  Tour.find(JSON.parse(queryStr));

    this.query.find(JSON.parse(queryStr));

    return this;
  }
  category(){
    if(this.queryString.category){
      const category =  this.queryString.category;
      this.query = this.query.find({category:category}).select("-content");
    }

    return this;
  }
  tag(){

    if(this.queryString.tag){
      const tag =  this.queryString.tag;
      this.query = this.query.find({"tag.value":tag}).select("-content");
    }
    return this;
  }
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort;
      this.query = this.query.sort(`-${sortBy}`);
      //sort('price ratingsAverage')
    } else {
      this.query = this.query.sort({ _id: -1 });
    }
    return this;
  }
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 ;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
module.exports = APIFeatures;
