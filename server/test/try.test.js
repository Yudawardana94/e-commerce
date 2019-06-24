// const assert = require('assert')
// const chai = require('chai')

// const kali = require('../percobaanMochaChai/kali')
// const tambah = require('../percobaanMochaChai/tambah')

// chai.should()
// const expect = chai.expect;

// describe('hasil kali', function () {
//     describe('correct parameter', ()=> {
//         it( 'should return 20 when input 4 and 5 to parameter', ()=> {
//             expect(kali(4,5)).to.equal(20)
//         }),
//         it( 'should return 100 when input 10 and 10 to parameter', ()=> {
//             expect(tambah(kali(10),kali(10)) ).to.equal(200)
//         })
//     }),
//     describe('incorect Parameter', ()=> {
//         it( 'should throw an error when parameter is not a number', ()=> {
//             const fn = ()=> {
//                 kali('1','2')
//             }
//             fn.should.throw('Invalid Parameter. ')
//         })
//     })
// })







// describe ('pembungkus paling luar', function() {
//     describe('describe dibawahnya paling luar',()=> {
//         it ('ini adaalh ekspektasi dari sebuah test', function () {

//         }),
//         it ('dan ini adalah ekspektasi dengan it kedua', ()=> {
//             assert.equal(1,1)
//         })
//     }),
//     describe('ini describe anak kedua dari paling luar',()=> {
//         it('ini adalah it dari anak kedua',()=> {
//             assert.equal(1,'1')
//         }),
//         it('ini it kedua dari describe anak kedua',()=> {
//             assert.equal(1,1)
//         })
//     })
// }),
// describe ( 'nah ini paling luar tapi yang kedua', ()=> {
//     describe ('sedangkan ini anak dari yang kedua teerluar',()=> {
//         it('ternyata pakau arrow function atau function biasa bisa lohh',()=> {
//             assert.equal(1,1)
//         }),
//         describe('disini kalo di describe lagi masih bisa lohhh',()=> {
//             it('assert equal emnerima dua parameter, yaitu nilai ekpektasi dan satunya nilai yang keluar',()=> {
//                 assert.equal(1,1)
//             })
//         })
//     })
// })