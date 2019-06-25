const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);
let expect = chai.expect;

describe('Cart CRUD',function () {
    describe ('GET /cart/findAll',function(){
        describe('Success',function() {
            
        }),
        describe('Failed / Error', function() {

        })
    }),
    describe('POST /cart/add', function(){
        describe('Success',function() {

        }),
        describe('Failed / Error', function() {
            
        })
    }),
    describe('PATCH /cart/update', function() {
        describe('Success',function() {

        }),
        describe('Failed / Error', function() {
            
        })
    }),
    describe('DELETE /cart/delete', function(){
        describe('Success',function() {

        }),
        describe('Failed / Error', function() {
            
        })
    })
})
