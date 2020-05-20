import React from 'react';
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div className="App">

  <body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
               
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Hi, My name is Milena!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
        </header>

        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Find your solution</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-primary"></i><i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i></span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted"> In todays competitive and convenience focused society, consumers want to shop from their own homes, making ecommerce a flexible solution for both businesses and buyers. </p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-primary"></i><i class="fas fa-laptop fa-stack-1x fa-inverse"></i></span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted">Responsive design can help you solve a lot of problems for your website. It will make your site mobile-friendly, improve the way it looks on devices with both large and small screens, and increase the amount of time that visitors spend on your site. </p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-primary"></i><i class="fas fa-lock fa-stack-1x fa-inverse"></i></span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted">Being secure in the online world becomes more and more important every day and it is vital to protect your website and the data it holds now.</p>
                    </div>
                </div>
            </div>
        </section>
       
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Explore my work </h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1"
                                ><div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/music.png" alt="VibeStreet"/></a>
               
                <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Vibe Street</div>
                                <div class="portfolio-caption-subheading text-muted">Project #1</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2"
                                ><div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/newB.png" alt="Neigbuddy"
                            /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Neighbuddy</div>
                                <div class="portfolio-caption-subheading text-muted">Project #2</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3"
                                ><div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/pro3new.png" alt=""
                            /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">B2C E-commerce App</div>
                                <div class="portfolio-caption-subheading text-muted">Project #3</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4"
                                ><div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/newW.png" alt=""
                            /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Weather Dashboard</div>
                                <div class="portfolio-caption-subheading text-muted">Open Weather API App</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5"
                                ><div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/java.jpg" alt=""
                            /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Javascript Beginner  </div>
                                <div class="portfolio-caption-subheading text-muted">Quiz Application</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6"
                                ><div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/new.png" alt=""
                            /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Password Generator</div>
                                <div class="portfolio-caption-subheading text-muted">Password Security App</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       
      


      <section class="page-section bg-light" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Need an amazing website?</h2>
                    <h3 class="section-subheading text-muted">Let`s chat!</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4"> </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/logopic.jpg" alt="logopic" />
                            <h4>Milena Mihneva</h4>
                            <p class="text-muted">Founder</p>
                   
                            <a class="btn btn-dark btn-social mx-2" href="https://github.com/SerendipityMM"><i class="fab fa-github"></i></a> <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a><a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/milena-mihneva-a03667181/"><i class="fab fa-linkedin-in"></i></a>
                     
               
                        </div>
                    </div>
                    <div class="col-lg-4"> </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Full-stack web developer.Proven ability in optimizing web functionality. Logo maker and social media enthusiast.Click the button to view full resume. </p></div>
                    <a href="assets/img/portfolio/resume.jpg" download="resume">
                    <button type="button" class="btn btn-outline-primary">Resume</button> </a>
                 </div>
               
               
      
                    
            </div>
        </section>
  





       
   
        
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Form</h2>
                    <h3 class="section-subheading text-muted">Request your website </h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group mb-md-0">
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div id="success"></div>
                        <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
      
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left">Copyright © 2020</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="https://github.com/SerendipityMM"><i class="fab fa-github"></i></a><a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/mmihneva"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/milena-mihneva-a03667181/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-right"><a class="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
                </div>
            </div>
        </footer>
   
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="icon" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                              
                                    <h2 class="text-uppercase">Vibe Street</h2>
                                    <p class="item-intro text-muted">Project #1 DU BootCamp</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/pro1.png" alt="" />
                                    <p>Find your vibe! Use VibeStreet.com as a guide to your next best destination! With so many options to choose from, you may often find yourself wondering about the best place to go. No matter the genre or venue, search for live music and entertainment near you.</p>
                                    <p><a href="https://kbell28k.github.io/Project-One//events" >Visit VibeStreet App.</a></p>
                                    <p><a href="https://github.com/kbell28k/Project-One">GitHub Repo</a></p>

                                    <ul class="list-inline">
                                        <li>Date: December 2020</li>
                                        <li>Category: Entertainment</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg"  alt="closeicon"/></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                   
                                    <h2 class="text-uppercase">Neighbuddy</h2>
                                    <p class="item-intro text-muted">Project #2 DU BootCamp</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/pro2.png" alt="" />
                                    <p>Neighbuddy. acts as a trading platform for people in your neighborhood during quarantine. Developed out of COVID-19, it's a way to funnel resources throughout your community when they are in limited supply, or unable to be purchased. The app will prompt users to provide information for upon sign-up/sign-in. The information given will allow users to post items within their posession they are willing to trade. In return other users may star / like / trade for posted items.</p>
                                    <p><a href="https://https//neighbuddy.herokuapp.com/">Visit Neigbuddy App</a></p>
                                    <p><a href="https://github.com/kbell28k/glowing-octo-garbanzo">GitHub Repo</a></p>
                                    
                                    <ul class="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Category: Graphic Design</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="closeicon" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                  
                                    <h2 class="text-uppercase">Sarikoff Art and Design</h2>
                                    <p class="item-intro text-muted">Project #3 DU BootCamp</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/pro3n.png" alt="" />
                                    <p>B2C E-commerce App </p>
                                    <p><a href="https://github.com/SerendipityMM/B2C-E-commerceApp">Comming soon</a></p>
                                    <p><a href="https://github.com/SerendipityMM/B2C-E-commerceApp">GitHub Repo</a></p>
                                    <ul class="list-inline">
                                        <li>Date: June 2020</li>
                                        <li>Category: E-commerce</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="closeicon"/></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                 
                                    <h2 class="text-uppercase">Weather Dashboard</h2>
                                    <p class="item-intro text-muted">5-Day Forecast App</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/pro4.png" alt="" />
                                    <p>
Weather dashboard with form inputs and search for a city input;
User is going to be presented with current and future conditions for that city and that city is added to the search history;
View current weather conditions for that city: the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index;


</p>
                                    <p><a href="https://serendipitymm.github.io/Weather-Dashboard/">Visit Scheduler App</a></p>
                                    <p><a href="https://github.com/SerendipityMM/Weather-Dashboard">GitHub Repo</a></p>
                                    <ul class="list-inline">
                                        <li>Date: February 2020</li>
                                        <li>Category: Work </li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="closeicon" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                            
                                    <h2 class="text-uppercase">Javascript</h2>
                                    <p class="item-intro text-muted">Code Quiz</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/pro5.png" alt="" />
                                    <p>This project presents a timed JavaScript code quiz with multiple-choice questions.</p>
                                    <p><a href="https://serendipitymm.github.io/Code-Quiz/">Visit Code-Quiz App</a></p>
                                    <p><a href="https://github.com/SerendipityMM/Code-Quiz">GitHub Repo</a></p>
                                   
                                    <ul class="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Category: Website Design</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="closeicon"/></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                  
                                    <h2 class="text-uppercase">Password Generator</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/pro6.png" alt="" />
                                    <p>This JavaScript App lets you generate random passwords with length betewen 8-128 characters. You can also customize the character set.</p>
                                    <ul class="list-inline">
                                    <p><a href="https://serendipitymm.github.io/Password-Generator/">Visit Pass App</a></p>
                                    <p><a href="https://github.com/SerendipityMM/Password-Generator">GitHub Repo</a></p>
                                        <li>Date: January 2020</li>
                                        <li>Category: Web Design</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
     
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      
        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>
       
        <script src="js/scripts.js"></script>
    </body>
	
      </div>
    );
  }
}

export default App;