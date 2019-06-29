// const chai = require('chai')
// const chaiHttp = require('chai-http')

// const app = require('../app')

// chai.use(chaiHttp)

// let expect = chai.expect;
// describe('User Crud', function () {
//             describe('POST /users/register', function () {
//                 describe('Success', function () {
//                     it('Should send an object with status code 201', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/register')
//                             .send({
//                                 username: 'Yuda',
//                                 password: '1234567890',
//                                 email: 'yuda@mail.plo',
//                                 role: 'user',
//                                 cart: [],
//                             })
//                             .then(function (res) {
//                                 expect(res).to.have.status(201)

//                                 expect(res.body).to.be.an('Object')

//                                 expect(res.body).to.have.property('username')
//                                 expect(res.body).to.have.property('password')
//                                 expect(res.body).to.have.property('email')
//                                 expect(res.body).to.have.property('role')

//                                 expect(res.body.username).to.equal('Yuda')
//                                 expect(res.body.password).to.not.equal('1234567890')
//                                 expect(res.body.email).to.equal('yuda@mail.plo')
//                                 expect(res.body.role).to.equal('user')
//                                 done()
//                             })
//                             .catch(function (err) {
//                                 console.log(err)
//                             })
//                     })
//                     }),
//                 describe('Failed / Error', function () {
//                     it('Should send an object with status code 500 -- no username', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/register')
//                             .send({
//                                 password: '123456',
//                                 email: 'yuda@mail.pro',
//                                 role: 'user'
//                             })
//                             .then(function (res) {
//                                 // console.log(res.body)
//                                 expect(res).to.have.status(500)
//                                 expect(res).to.be.an('object')
//                                 expect(res.body.errors.username.message).to.equal('No username')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     }),
//                     it('Should send an object with satatus code 500 -- no password', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/register')
//                             .send({
//                                 username: 'Yuda',
//                                 email: 'yuda@mail.pro',
//                                 role: 'user'
//                             })
//                             .then(function (res) {
//                                 expect(res).to.have.status(500)
//                                 expect(res).to.be.an('object')
//                                 expect(res.body.errors.password.message).to.equal('No password')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     }),
//                     it('Should send an object with status code 500 -- password length less than 8', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/register')
//                             .send({
//                                 username: 'Yuda',
//                                 password: '123456',
//                                 email: 'yuda@mail.pro',
//                                 role: 'user'
//                             })
//                             .then(function (res) {
//                                 expect(res).to.have.status(500)
//                                 expect(res).to.be.an('object')
//                                 expect(res.body.errors.password.message).to.have.equal('Minimum password is 8')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     }),
//                     it('should send an object with status code 400 -- invalid email format', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/register')
//                             .send({
//                                 username: 'Yuda',
//                                 password: '123456',
//                                 email: 'yuda.pro',
//                                 role: 'user'
//                             })
//                             .then(function (res) {
//                                 // console.log(res.body, 'dari email format')
//                                 expect(res).to.have.status(500)
//                                 expect(res).to.have.an('object')
//                                 expect(res.body.errors.email.message).to.equal('Invalid email format. ')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     }),
//                     it('should send an object with status code 400 --  Email has been used', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/register')
//                             .send({
//                                 username: 'Yuda',
//                                 password: '123456789',
//                                 email: 'yuda@mail.pro',
//                                 role: 'user'
//                             })
//                             .then(function (res) {
//                                 console.log(res.body, '<======== dari test')
//                                 expect(res).to.have.status(500)
//                                 expect(res.body).be.an('object')
//                                 expect(res.body.errors.email.message).to.have.equal('Email has been used. ')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     }),
//                     it('should send an object with status code 400 --  no email', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/register')
//                             .send({
//                                 username: 'Yuda',
//                                 password: '123456',
//                                 role: 'user'
//                             })
//                             .then(function (res) {
//                                 expect(res).to.have.status(500)
//                                 expect(res.body).to.be.an('object')
//                                 expect(res.body.errors.email.message).to.equal('No email')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     })
//                     })
//             });
//             describe('POST /users/login', function () {
//                 describe('Success', function () {
//                     it('Should send an object with status code 200', function (done) {
//                         chai
//                             .request(app)
//                             .post('/users/login')
//                             .send({
//                                 email: 'yuda@mail.pro',
//                                 password: '1234567890'
//                             })
//                             .then(function (res) {
//                                 console.log(res.body,'<========----')
//                                 expect(res).to.have.status(200);
//                                 expect(res.body).to.be.an('object');
//                                 expect(res.body).to.have.property('access_token')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     })
//                     }),
//                 describe('Failed / Error', function() {
//                     it('Should send an object with status code 404 -- email not found', function(done) {
//                         chai
//                             .request(app)
//                             .post('/users/login')
//                             .send({
//                                 email : '',
//                                 password : '123456'
//                             })
//                             .then(function(res){
//                                 console.log(res.body)
//                                 expect(res).to.have.status(401);
//                                 expect(res.body).to.be.an('object');
//                                 expect(res.body).to.have.property('message')
//                                 expect(res.body.message).to.equal('Invalid email / password. ')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     }),
//                     it('Should send an object with status code 401 -- Wrong Password', function(done) {
//                         chai
//                             .request(app)
//                             .post('/users/login')
//                             .send({
//                                 email : 'yuda@mail.pro',
//                                 password : '123456'
//                             })
//                             .then(function(res){
//                                 expect(res).to.have.status(401);
//                                 expect(res.body).to.be.an('object');
//                                 expect(res.body).to.have.property('message')
//                                 expect(res.body.message).to.equal('Invalid email / password. ')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     }),
//                     it('Should send an object with status code 401 -- Invalid password', function(done) {
//                         chai
//                             .request(app)
//                             .post('/users/login')
//                             .send({
//                                 email : 'yuda@mail.pro',
//                                 password : ''
//                             })
//                             .then(function(res){
//                                 expect(res).to.have.status(401);
//                                 expect(res.body).to.be.an('object');
//                                 expect(res.body).to.have.property('message')
//                                 expect(res.body.message).to.equal('Invalid email / password. ')
//                                 done()
//                             })
//                             .catch((err) => {
//                                 console.log(err)
//                             })
//                     })
//                     })
//                     }) 
//             })