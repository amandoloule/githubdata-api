import chai from 'chai'
import { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index.js'

chai.use(chaiHttp)

describe('endpoints', () => {
    describe('/api/users GET', () => {
        it('it should GET the users', done => {
            chai
                .request(app)
                .get('/api/users')
                .end((errors, res) => {
                    expect(res).to.have.status(200)
                    expect(errors).to.be.equal(null)
                    done()
                })
        })
    })

    describe('/api/users/:username/details GET', () => {
        it('it should GET the user detail', done => {
            chai
                .request(app)
                .get('/api/users/amandoloule/details')
                .end((errors, res) => {
                    expect(res).to.have.status(200)
                    expect(errors).to.be.equal(null)
                    done()
                })
        })
    })

    describe('/api/users/:username/repos GET', () => {
        it('it should GET the user repos', done => {
            chai
                .request(app)
                .get('/api/users/amandoloule/repos')
                .end((errors, res) => {
                    expect(res).to.have.status(200)
                    expect(errors).to.be.equal(null)
                    done()
                })
        })
    })
})
