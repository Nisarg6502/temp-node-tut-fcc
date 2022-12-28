const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((products)=>{
        const {id,name,image} = products
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{ // ':' is a placeholder for route parameters
    // console.log(req)
    // console.log(req.params);
    const {productID} = req.params; //requests route parameters for the webpage
    const randomProduct = products.find((product)=>product.id===Number(productID))

    if (!randomProduct) {
        return res.status(404).send('Product Does Not Exist')
    }
    res.json(randomProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('Hello!')
})

app.get('/api/v1/query',(req,res)=>{
    const {search, limit} = req.query
    let sortedProduct = [...products]

    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit))
    }

    if (sortedProduct.length < 1) {
        // res.status(200).send('No products matched your query') a bit problematic as we cannot 
        //respond/send two times. Return must be used.
        return res.status(200).json({success:true,data:[]})
    }

    res.status(200).json(sortedProduct)

    // res.send('Hello there!')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000.....');
})

//method used for querying databases and filtering results