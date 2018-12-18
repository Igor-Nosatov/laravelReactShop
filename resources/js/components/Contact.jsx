import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render () {
    return (
      <section className="contact_area p_100">
            <div className="container">
                <div className="contact_title">
                    <h2>Get in Touch</h2>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</p>
                </div>
                <div className="row contact_details">
                    <div className="col-lg-4 col-md-6">
                        <div className="media">
                            <div className="d-flex">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div className="media-body">
                                <p>House # 402, Roboto Street,<br />New York, USA.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="media">
                            <div className="d-flex">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div className="media-body">
                                <a href="tel:+1109171234567">+110 - 917 - 123 - 4567</a>
                                <a href="tel:+1101911897654">+110 - 191 - 189 - 7654</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="media">
                            <div className="d-flex">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div className="media-body">
                                <a href="mailto:busines@persuit.com">busines@persuit.com</a>
                                <a href="mailto:support@persuit.com">support@persuit.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_form_inner">
                    <h3>Drop a Message</h3>
                    <form className="contact_us_form row" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                        <div className="form-group col-lg-4">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Full Name *"  />
                        </div>
                        <div className="form-group col-lg-4">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email Address *"  />
                        </div>
                        <div className="form-group col-lg-4">
                            <input type="text" className="form-control" id="website" name="website" placeholder="Your Website" />
                        </div>
                        <div className="form-group col-lg-12">
                            <textarea className="form-control" name="message" id="message" rows="1" placeholder="Type Your Message..."></textarea>
                        </div>
                        <div className="form-group col-lg-12">
                            <button type="submit" value="submit" className="btn update_btn form-control">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
  }
}

export default Contact
