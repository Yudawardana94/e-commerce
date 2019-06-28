const chai = require('chai')
const chaiHttp = require ('chai-http')

const app = require('../app')

chai.use(chaiHttp)
let expect = chai.expect

// describe ('Product CRUD', function() {
    // describe('POST /product/add',function () {
    //     describe('Success',function(){
    //         it('should send an object with status code 201', function(done) {
                
    //             chai
    //                 .request(app)
    //                 .post('/products/add')
    //                 .send({
    //                     name : 'Gundam',
    //                     description : 'Model kit',
    //                     price : 300000,
    //                     stock : 2,
    //                     condition : 'baru',
    //                     location : 'jakarta'
    //                 })
    //                 .then( function (res) {
                        
    //                     expect(res).to.have.status(201)
    //                     expect(res.body).to.be.an('object')

    //                     expect(res.body).to.have.property('name')
    //                     expect(res.body).to.have.property('description')
    //                     expect(res.body).to.have.property('price')
    //                     expect(res.body).to.have.property('stock')
    //                     expect(res.body).to.have.property('condition')
    //                     expect(res.body).to.have.property('location')
                        
    //                     expect(res.body.name).to.equal('Gundam')
    //                     expect(res.body.description).to.equal('Model kit')
    //                     expect(res.body.price).to.equal(300000)
    //                     expect(res.body.stock).to.equal(2)
    //                     expect(res.body.condition).to.equal('baru')
    //                     expect(res.body.location).to.equal('jakarta')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         })
    //     })
    //     describe('Failed / Error',function(){
    //         it('should send an object with status code 500 -- internal server error', function(done) {
    //             chai
    //                 .request(app)
    //                 .post('/product/ad')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(500)
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- empty property name', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body).to.not.have.property('Name')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- different name value', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gunda',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body.Name).to.not.equal('Gundam')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- empty property Description', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body).to.not.have.property('Description')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- different Description value', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')
    //                     expect(req.body.Description).to.equal('Model kit')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- empty property price', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body).to.not.have.property('Price')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- different price value', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 30000,
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(201)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body.Price).to.not.equal(300000)
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- empty property stock', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body).to.not.have.property('Stock')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- different stock value', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 1,
    //                     Condition : 'baru',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(201)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body.Stock).to.not.equal(2)
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- empty property condition', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')
                        
    //                     expect(req.body).to.have.property('Condition')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- different condition value', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'buruk',
    //                     Location : 'jakarta'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(201)
    //                     expect(req.body).to.be.an('object')
                        
    //                     expect(req.body.Condition).to.equal('baru')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- empty property location', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'baru'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(400)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body).to.not.have.property('Location')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         }),
    //         it('should send an object with status code 400 -- different property location value', function(done) {
    //             chai
    //                 .request(app)
    //                 .toString('/player')
    //                 .send({
    //                     Name : 'Gundam',
    //                     Description : 'Model kit',
    //                     Price : 300000,
    //                     Stock : 2,
    //                     Condition : 'baru',
    //                     Location : 'bandung'
    //                 })
    //                 .then( function (res) {
    //                     expect(res).to.have.status(201)
    //                     expect(req.body).to.be.an('object')

    //                     expect(req.body.Location).to.not.equal('jakarta')
    //                     done()
    //                 })
    //                 .catch(function(err) {
    //                     console.log (err)
    //                 })
    //         })
    //     })
    // }),
    // describe('GET /product/all',function() {
    //     describe('Success',function(){
    //         it('Should return an object with status code 200 -- success',function(done) {
    //             chai
    //                 .request(app)
    //                 .get('/product/all')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(200)
    //                     expect(res.body).to.be.an('array')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     }),
    //     describe('Failed / Error',function(){
    //         it('Should return an object with status code 500 -- internal server error',function(done){
    //             chai
    //                 .request(app)
    //                 .get('/product/al')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(500)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         }),
    //         it('Should return an object with status code 404 -- File not found',function(done){
    //             chai
    //                 .request(app)
    //                 .get('/product/all')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(404)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     })
    // }),



    // describe('GET /product/user',function() {
    //     describe('Success',function(){
    //         it('Should return an object with status code 200 -- success',function(done) {
    //             chai
    //                 .request(app)
    //                 .get('/product/user')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(200)
    //                     expect(res.body).to.be.an('array')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     }),
    //     describe('Failed / Error',function(){
    //         it('Should return an object with status code 500 -- internal server error',function(done){
    //             chai
    //                 .request(app)
    //                 .get('/product/use')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(500)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         }),
    //         it('Should return an object with status code 404 -- File not found',function(done){
    //             chai
    //                 .request(app)
    //                 .get('/product/user')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(404)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     })
    // }),



    // describe('GET /product/one',function() {
    //     describe('Success',function(){
    //         it('Should return an object with status code 200 -- success',function(done) {
    //             chai
    //                 .request(app)
    //                 .get('/product/one')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(200)
    //                     expect(res.body).to.be.an('object')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     }),
    //     describe('Failed / Error',function(){
    //         it('Should return an object with status code 500 -- internal server error',function(done){
    //             chai
    //                 .request(app)
    //                 .get('/product/on')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(500)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         }),
    //         it('Should return an object with status code 404 -- File not found',function(done){
    //             chai
    //                 .request(app)
    //                 .get('/product/')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(404)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     })
    // }),



    // describe('PATCH /product/update/:id',function() {
    //     describe('Success',function(){
    //         it('Should return an object with status code 200 ', function(done) {
    //             chai
    //                 .request(app)
    //                 .patch('/product/update/1')
    //                 .send({
    //                     Name : 'HG 1/144 gundam unicorn',
    //                     Price : 250000
    //                 })
    //                 .then((res)=> {
    //                     expect(res).to.has.status(200)
    //                     expect(res.body).to.be.an('object')
    //                     expect(res.body.Name).to.equal('HG 1/144 gundam unicorn')
    //                     expect(res.body.Price).to.equal(250000)
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     }),
    //     describe('Failed / Error ',function() {
    //         it('Should return an object with status code 500 -- internal server error', function(done) {
    //             chai
    //                 .request(app)
    //                 .patch('/product/updat/1')
    //                 .send({
    //                     Name : 'HG 1/144 gundam unicorn',
    //                     Price : 250000
    //                 })
    //                 .then((res)=> {
    //                     expect(res).to.has.status(500)
    //                     done()
    //                 })
    //                 .catch((err)=> [
    //                     console.log(err)
    //                 ])
    //         }),
    //         it('Should return an object with status code 400 -- req.params id is not defined', function(done) {
    //             chai
    //                 .request(app)
    //                 .patch('/product/update/')
    //                 .send({
    //                     Name : 'HG 1/144 gundam unicorn',
    //                     Price : 250000
    //                 })
    //                 .then((res)=> {
    //                     expect(res).to.has.status(400)
    //                     expect(req.params.id).to.be('undefined')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         }),
    //         it('Should return an object with status code 404 -- Product not found', function () {

    //             chai
    //                 .request(app)
    //                 .patch('/product/update/1')
    //                 .send({
    //                     Name : 'HG 1/144 gundam unicorn',
    //                     Price : 250000
    //                 })
    //                 .then((res)=> {
    //                     expect(res).to.has.status(400)
    //                     expect(res.body).to.be('object')
    //                     expect(res.body).to.not.has.property('_id')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     })
    // }),



    // describe('DELETE /product/remove',function() {
    //     describe('Success',function(){
    //         it('Should return an object with status code 200 ',function(done) {
    //             chai
    //                 .request(app)
    //                 .delete('/product/delete/1')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(200)
    //                     expect(res.body).to.be.an('object')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         })
    //     }),
    //     describe('Failed / Error ',function() {
    //         it('Should return an object with status code 500 -- Internal server error. ', function(done) {
    //             chai
    //                 .request(app)
    //                 .delete('/prduct/delet/1')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(500)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                     console.log(err)
    //                 })
    //         }),
    //         it('Should return an object with status code 400 -- req param is not defined ', function() {
    //             chai
    //                 .request(app)
    //                 .delete('/prduct/delet/1')
    //                 .then((res)=> {
    //                     expect(res).to.has.status(400)
    //                     expect(res).to.has.property('message')
    //                     done()
    //                 })
    //                 .catch((err)=> {
    //                   console.log(err)
    //                 })
    //         }),
    //         it('Shoule return an object with status code 404 -- Product is not found. ',function(done){
    //             chai
    //             .request(app)
    //             .delete('/prduct/delet/')
    //             .then((res)=> {
    //                 expect(res).to.has.status(404)
    //                 expect(res).to.has.property('message')
    //                 expect(req.params.id).to.equal('undefined')

    //                 done()
    //             })
    //             .catch((err)=> {
    //                 console.log(err)
    //             })
    //         })
    //     })
        
//     })
// })