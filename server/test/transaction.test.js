const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

const user = require('../models/userModel')
let userId = ''

let expect = chai.expect
chai.use(chaiHttp)
// describe('hook',function(){
    before(function(done){
        console.log('this do before all')
        let newUser = {
            username: 'Test',
            password: '1234567890',
            email: 'tes01@MediaList.com'
        }
        user.create(newUser)
            .then((created)=> {
                console.log(created,'ini created')
                userId = created._id
                done()
            })
            .catch((err)=> {
                console.log(err)
            })
    })
// })

console.log(userId, 'ini user ID')
describe('CRUD transaction', function(){
    describe('POST /transaction/add',function(){
        describe('Success',function(){
            it('Should return an object with status code 201 -- succes created',function(done){
                chai
                    .request(app)
                    .post('transaction/add')
                    .send({
                        items: [{satu:1},{dua:2},{tiga:3}],
                        total: 200000,
                        status: 'sent'
                    })
                    .then(function(res){
                        expect(res).to.have.status(200)
                        done()
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            })
        }),
        describe('Failed',function(){

        })   
    }),
    describe('GET /transaction/all',function(){
        describe('Success',function(){

        }),
        describe('Failed',function(){

        })   
    }),
    describe('GET /transaction/one',function(){
        describe('Success',function(){

        }),
        describe('Failed',function(){

        })   
    })
})