const express = require('express');
const fs = require('fs')
const {calcMean, checkValidity, findMedian,findMode} = require('./helper');

const app = express();

app.get('/mean', (req,res)=>{
    if(!req.query.nums){
        console.error("Please pass a query of nums with a comma-separated list of numbers.", 400)
        
        res.status(400).send("Please pass a query of nums with a comma-separated list of numbers.");
    }
    const nums = checkValidity(req.query.nums.split(','));
    if(!nums) {
        res.send("Please enter numbers only!")
    } else {
        const mean = {
            operation: "mean",
            result: calcMean(nums)}
        res.send(mean);
    }
   
})

app.get('/median', (req,res)=>{
    if(!req.query.nums){
        res.status(400).send("Please pass a query of nums with a comma-separated list of numbers.");
    }
    const nums = checkValidity(req.query.nums.split(','));
    if(!nums) {
        res.send("Please enter numbers only!")
    }else {
        const median = {
            operation: "median",
            value: findMedian(nums)
        }
        res.send(median);
    }
})

app.get('/mode', (req,res)=>{
    if(!req.query.nums){
        res.status(400).send("Please pass a query of nums with a comma-separated list of numbers.");
    }
    const nums = checkValidity(req.query.nums.split(','));
    if(!nums) {
        res.send("Please enter numbers only!")
    }else {
        const mode = {
            operation: "mode",
            value: findMode(nums)
        }
        res.send(mode);
    }
})

app.get('/all', (req,res)=> {
    if(!req.query.nums){
        res.status(400).send("Please pass a query of nums with a comma-separated list of numbers.");
    }
    const nums = checkValidity(req.query.nums.split(','));
    if(!nums) {
        res.send("Please enter numbers only!")
    }else {
        const all = {
            operation: "mode",
            mean: calcMean(nums),
            median: findMedian(nums),
            mode: findMode(nums)
        }
        if(req.query.save==='true'){
            fs.writeFile('./results.json', JSON.stringify(all), (err)=>{
                if(err){
                    console.log(err);
                }
            })
        }
        res.send(all);
    }
})

app.listen(3000)