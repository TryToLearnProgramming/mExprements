const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({myData});
};

const getAllProductsTesting = async (req, res) => {
    const {company} = req.query;
    const queryObj = {};
    if (company){
        queryObj.company = company;
        console.log(queryObj.company)
    }
    const myData = await Product.find(queryObj);
    // console.log(req.query);
    res.status(200).json({myData});
};

module.exports = {getAllProducts, getAllProductsTesting};