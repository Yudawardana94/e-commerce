// const chai = require('chai');
// const chaiHttp = require('chai-http');

// const app = require('../app');

// chai.use(chaiHttp);
// let expect = chai.expect;

// describe('Cart CRUD',function () {
//     describe ('GET /cart/findOne',function(){
//         describe('Success',function() {
//             it('Should return an object with status code 200 ',function(done) {
//                 chai
//                     .request(app)
//                     .get('/cart/findOne')
//                     .then((res)=> {
//                         expect(res).to.has.status(200)
//                         expect(res.body).to.be.an('object')

//                         expect(res.body).to.has.property('_id')
//                         expect(res.body).to.has.property('userId')
//                         expect(res.body).to.has.property('item')
//                         expect(res.body.item).to.be.an('array')
//                         expect(res.body).to.has.property('status')

//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             })
//         }),
//         describe('Failed / Error', function() {
//             it('Should return an object with status code 500 -- internal server error',function(done) {
//                 chai
//                     .request(app)
//                     .get('/cart/findOne')
//                     .then((res)=> {
//                         expect(res).to.has.status(500)
//                         expect(res.body).to.be.an('object')
//                         expect(res.body).to.has.property('message')

//                         done()
//                     })
//                     .catch ((err)=> {
//                         console.log(err)
//                     })
//             }),
//             it('Should return an object with status code 404 -- cart not found',function(done) {
//                 chai
//                     .request(app)
//                     .get('/cart/findOne')
//                     .then((res)=> {
//                         expect(res).to.has.status(404)
//                         expect(res.body).to.be.an('array')
//                         expect(res.body).to.equal('{}')
//                         expect(res.body).to.has.property('message')

//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             })
//         })
//     }),
//     describe('POST /cart/create', function(){
//         describe('Success',function() {
//             it('Should be return an object with status code 200',function(done) {
//                 chai
//                     .request(app)
//                     .post('/cart/create')
//                     .send({
//                         userId : '123456789',
//                         item : [],
//                         status : 'unconfirmed'
//                     })
//                     .then((res)=> {
//                         expect(res).to.has.status(200)
//                         expect(res.body).to.be.an('object')
                        
//                         expect(res.body).to.has.property('_id')
//                         expect(res.body).to.has.property('userId')
//                         expect(res.body).to.has.property('item')
//                         expect(res.body).to.has.property('status')

//                         expect(res.body.userId).to.equal('123456789')
//                         expect(res.body.item).to.equal([])
//                         expect(res.body.status).to.equal('unconfirmed')
                        
//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             })
//         }),
//         describe('Failed / Error', function() {
//             it('Should return an object with status code 500 -- internal server err',function(done) {
//                 chai
//                     .request(app)
//                     .post('/cart/asss')
//                     .send({
//                         userId : '123456789',
//                         item : [],
//                         status : 'unconfirmed'
//                     })
//                     .then((res)=> {
//                         expect(res).to.has.status(500)
//                         expect(res.body).to.be.an('object')
//                         expect(res.body).to.has.property('message')
//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             }),
//             it('Should return an object with status code 400 -- invalid userId',function(done) {
//                 chai
//                 .request(app)
//                 .post('/cart/asss')
//                 .send({
//                     item : [],
//                     status : 'unconfirmed'
//                 })
//                 .then((res)=> {
//                     expect(res).to.has.status(500)
//                     expect(res.body).to.be.an('object')
//                     expect(res.body).to.not.has.property('userId')
//                     done()
//                 })
//                 .catch((err)=> {
//                     console.log(err)
//                 })
//             })
//             it('Should return an object with status code 400 -- invalid item',function(done) {
//                 chai
//                 .request(app)
//                 .post('/cart/asss')
//                 .send({
//                     userId : '123456789',
//                     status : 'unconfirmed'
//                 })
//                 .then((res)=> {
//                     expect(res).to.has.status(500)
//                     expect(res.body).to.be.an('object')
//                     expect(res.body).to.not.has.property('item')
//                 })
//                 .catch((err)=> {
//                     console.log(err)
//                 })
//             })
//             it('Should return an object with status code 400 -- invalid userId',function(done) {
//                 chai
//                 .request(app)
//                 .post('/cart/asss')
//                 .send({
//                     useId : '123456789',
//                     item : []
//                 })
//                 .then((res)=> {
//                     expect(res).to.has.status(500)
//                     expect(res.body).to.be.an('object')
//                     expect(res.body).to.not.has.property('status')
//                 })
//                 .catch((err)=> {
//                     console.log(err)
//                 })
//             })
//         })
//     }),
//     describe('PATCH /cart/update', function() {
//         describe('Success',function(){
//             it('Should return an object with status code 200 ', function(done) {
//                 chai
//                     .request(app)
//                     .patch('/cart/update/1')
//                     .send({
//                         Name : 'HG 1/144 gundam unicorn',
//                         Price : 250000
//                     })
//                     .then((res)=> {
//                         expect(res).to.has.status(200)
//                         expect(res.body).to.be.an('object')
//                         expect(res.body.Name).to.equal('HG 1/144 gundam unicorn')
//                         expect(res.body.Price).to.equal(250000)
//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             })
//         }),
//         describe('Failed / Error ',function() {
//             it('Should return an object with status code 500 -- internal server error', function(done) {
//                 chai
//                     .request(app)
//                     .patch('/product/updat/1')
//                     .send({
//                         Name : 'HG 1/144 gundam unicorn',
//                         Price : 250000
//                     })
//                     .then((res)=> {
//                         expect(res).to.has.status(500)
//                         done()
//                     })
//                     .catch((err)=> [
//                         console.log(err)
//                     ])
//             }),
//             it('Should return an object with status code 400 -- req.params id is not defined', function(done) {
//                 chai
//                     .request(app)
//                     .patch('/product/update/')
//                     .send({
//                         Name : 'HG 1/144 gundam unicorn',
//                         Price : 250000
//                     })
//                     .then((res)=> {
//                         expect(res).to.has.status(400)
//                         expect(req.params.id).to.be('undefined')
//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             }),
//             it('Should return an object with status code 404 -- Product not found', function () {

//                 chai
//                     .request(app)
//                     .patch('/product/update/1')
//                     .send({
//                         Name : 'HG 1/144 gundam unicorn',
//                         Price : 250000
//                     })
//                     .then((res)=> {
//                         expect(res).to.has.status(400)
//                         expect(res.body).to.be('object')
//                         expect(res.body).to.not.has.property('_id')
//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             })
//         })
//     }),
//     describe('DELETE /cart/delete', function(){
//         describe('Success',function() {
//             it('Should return an object with status code 200 ',function(done) {
//                 chai
//                     .request(app)
//                     .delete('/cart/delete/1')
//                     .then((res)=> {
//                         expect(res).to.has.status(200)
//                         expect(res.body).to.be.an('object')
//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             })
//         }),
//         describe('Failed / Error', function() {
//             it('Should return an object with status code 500 -- Internal server error. ', function(done) {
//                 chai
//                     .request(app)
//                     .delete('/prdcartuct/delet/1')
//                     .then((res)=> {
//                         expect(res).to.has.status(500)
//                         expect(res).to.has.property('message')
//                         done()
//                     })
//                     .catch((err)=> {
//                         console.log(err)
//                     })
//             }),
//             it('Should return an object with status code 400 -- req param is not defined ', function(done) {
//                 chai
//                     .request(app)
//                     .delete('/cart/delet/1')
//                     .then((res)=> {
//                         expect(res).to.has.status(400)
//                         expect(res).to.has.property('message')
//                         done()
//                     })
//                     .catch((err)=> {
//                       console.log(err)
//                     })
//             }),
//             it('Shoule return an object with status code 404 -- Product is not found. ',function(done){
//                 chai
//                 .request(app)
//                 .delete('/cart/delet/')
//                 .then((res)=> {
//                     expect(res).to.has.status(404)
//                     expect(res).to.has.property('message')
//                     expect(req.params.id).to.equal('undefined')
                    
//                     done()
//                 })
//                 .catch((err)=> {
//                     console.log(err)
//                 })
//             })
//         })
//     })
// })
