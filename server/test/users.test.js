const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')

chai.use(chaiHttp)

let expect = chai.expect;
describe('User Crud', function() {
    describe('POST /users/register',function() {
        describe('Success',function(){
            it('Should send an object with status code 201', function(done) {
                chai
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res){
                        expect(res).to.have.status(201)

                        expect(res.body).to.be.an('Object')

                        expect(res.body).to.have.property('username')
                        expect(res.body).to.have.property('password')
                        expect(res.body).to.have.property('email')
                        expect(res.body).to.have.property('role')

                        expect(res.body.username).to.equal('Yuda')
                        expect(res.body.password).to.equal('123456')
                        expect(res.body.email).to.equal('yuda@mail.pro')
                        expect(res.body.user).to.equal('user')

                        done()
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            })
        }),
        describe('Failed / Error', function() {
            it ('Should send an object with status code 500 -- Server error',function(done) {
                chai    
                    .request(app)
                    .post('/users/registe')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expected(res).to.have.status(500)
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('Should not send an object with status code 500 -- not an object',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(500)
                        expect(res).to.not.be.an('object') 
                        done()                   
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('Should send an object with status code 400 -- no username',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res).to.be.an('object')
                        expect(res.body).to.not.have.property('username')

                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it ('Should send an object with status code 400 -- username not same with inputed',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res).to.be.an('object')

                        expect(res.body).to.have.property('username')
                        expect(res.body.username).to.not.equal('Yuda')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('Should send an object with satatus code 400 -- no password',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res).to.be.an('object')

                        expect(res.body).to.not.have.property('password')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('Should send an object with status code 400 -- password not hased',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res).to.be.an('object')

                        expect(res.body).to.have.property('password')
                        expect(res.body.password).to.equal('123456')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('Should send an object with status code 400 -- password length less than 8',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res).to.be.an('object')

                        expect(res.body).to.have.property('password')
                        expect(res.body.password).to.have.lengthOf.below(8)
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('should send an object with status code 400 -- invalid email format',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res).to.have.an('object')

                        expect(res.body).to.have.property('email')
                        expect(res.body.email).to.equal('yuda@mail.pro')
                        expect(res.body.user).to.equal('user')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('should send an object with status code 400 --  Email has been used',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res.body).be.an('object')
                        expect(res.body).to.have.property('message')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('should send an object with status code 400 --  no email',function(done) {
                chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.not.have.property('email')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            }),
            it('should send an object with status code 400 --  not equal with inputed',function(done) {
            chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an.length('object')
                        expect(res.body.email).to.not.equal('yuda@mail.com')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            })
            it('should send an object with status code 400 --  role invalid',function(done) {
            chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.not.have.property('role')
                        done()
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            })
            it('should send an object with status code 400 --  role not equal with inputed',function(done) {
            chai    
                    .request(app)
                    .post('/users/register')
                    .send({
                        username : 'Yuda',
                        password : '123456',
                        email : 'yuda@mail.pro',
                        role : 'user'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.not.equal('user')
                    })
                    .catch((err)=> {
                        console.log (err)
                    })
            })
        })
    }),
    describe('POST /users/login',function() {
        describe('Success',function(){
            it('Should send an object with status code 200', function(done) {
                chai
                    .request(app)
                    .post('/users/login')
                    .send({
                        email : 'yuda@mail.pro',
                        password : '123456'
                    })
                    .then(function(res){
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        expect(res.body).to.have.property('email')
                        expect(res.body).to.have.property('password')
                        expect(res.body).to.equal('yuda@mail.pro')
                        expect(res.body).to.not.equal('123456')
                        done()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        }),
        describe('Failed / Error', function() {
            it('Should send an object with status code 500 -- internal server error', function(done) {
                chai
                    .request(app)
                    .post('/users/logi')
                    .send({
                        email : 'yuda@mail.pro',
                        password : '123456'
                    })
                    .then(function(res){
                        expect(res).to.have.status(500);
                        done()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }),
            it('Should send an object with status code 404 -- email not found', function(done) {
                chai
                    .request(app)
                    .post('/users/login')
                    .send({
                        email : 'da@mail.pro',
                        password : '123456'
                    })
                    .then(function(res){
                        expect(res).to.have.status(404);
                        expect(res.body).to.be.an('object');
                        expect(res.body).to.have.property('message')
                        done()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }),
            it('Should send an object with status code 400 -- Invalid email', function(done) {
                chai
                    .request(app)
                    .post('/users/login')
                    .send({
                        password : '123456'
                    })
                    .then(function(res){
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        expect(res.body).to.not.have.property('email')
                        done()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }),
            it('Should send an object with status code 400 -- Wrong Password', function(done) {
                chai
                    .request(app)
                    .post('/users/login')
                    .send({
                        email : 'yuda@mail.pro',
                        password : '123456'
                    })
                    .then(function(res){
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        expect(res.body).to.have.property('password')
                        expect(res.body).to.have.property('message')
                        done()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }),
            it('Should send an object with status code 400 -- Invalid password', function(done) {
                chai
                    .request(app)
                    .post('/users/login')
                    .send({
                        email : 'yuda@mail.pro'
                    })
                    .then(function(res){
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        expect(res.body).to.not.have.property('password')
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        })
    })
})
