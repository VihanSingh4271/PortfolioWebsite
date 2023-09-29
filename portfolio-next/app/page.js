import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
       <header>
        <nav>
            
            <div className="left">Khushi's-Portfolio</div>
            <div className="right">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Details</a></li>
                   <li> <a href="">Skills </a></li>
                   <li> <a href="">Projects </a></li>
                <li> <a href="">Contact Me</a></li>

                </ul>
            </div>
        </nav>
    </header>
   
    <main>
        <section className="firstsection">
           
               
              
            <div className="leftsection"> Hello, I am KHUSHI SHARMA
             Welcome to my Portfolio
                <div className="buttons">
               <button className="btn">Resume</button>
                    <button className="btn">GitHub</button>
                </div>
                        
            </div>
        <div className="rightsection">
                <img src="/developer.png" alt=""/>
            </div>

        </section>
        <hr/>
       <section className="secondsection">
        <span className="text-grey">My Work </span>
<h1>
    Experiences
</h1>
<div className="box">
    <div className="vertical">
        <img  className="image-top"src="/html.png" alt=""/>
    
    <div className="vertical-title">
        HTML-Developer
    </div>
    <div className="vertical-desc">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus ad, nisi unde beatae quo dignissimos explicabo magni quaerat ab repellat, porro aperiam quam corrupti quae, magnam voluptate dolore quisquam.
    </div>
   
</div>


<div className="vertical">
    <img  className="image-top2"src="/css.png" alt=""/>

<div className="vertical-title">
    CSS-Developer
</div>
<div className="vertical-desc">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus ad, nisi unde beatae quo dignissimos explicabo magni quaerat ab repellat, porro aperiam quam corrupti quae, magnam voluptate dolore quisquam.
</div>

</div>



<div className="vertical">
    <img  className="image-top3"src="/js.png" alt=""/>

<div className="vertical-title">
    JavaScript-Developer
</div>
<div className="vertical-desc">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus ad, nisi unde beatae quo dignissimos explicabo magni quaerat ab repellat, porro aperiam quam corrupti quae, magnam voluptate dolore quisquam.
</div>

</div>



<div className="vertical">
    <img  className="image-top"src="/developer.png" alt=""/>

<div className="vertical-title">
     Node JS-Developer
</div>
<div className="vertical-desc">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus ad, nisi unde beatae quo dignissimos explicabo magni quaerat ab repellat, porro aperiam quam corrupti quae, magnam voluptate dolore quisquam.
</div>

</div>


<div className="vertical">
    <img  className="image-top"src="/developer.png" alt=""/>

<div className="vertical-title">
    React JS-Developer
</div>
<div className="vertical-desc">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus ad, nisi unde beatae quo dignissimos explicabo magni quaerat ab repellat, porro aperiam quam corrupti quae, magnam voluptate dolore quisquam.
</div>

</div>


</div>

       </section>
       <hr/>

       <section className="thirdsection">

        <span className="text-grey">My recent </span>
        <h1>
            Projects
        </h1>
       


        <div className="container">
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>1</h2>
                  <h3>Gym Website</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>2</h2>
                  <h3>Ice-Cream Delivery Web Application</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>3</h2>
                  <h3>Netflix Clone</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>

          
      
       </section>
       
       <footer>
<div className="footerContainer">
    <div className="socialIcons">
        <a href="">
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="">
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="">
            <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="">
            <i className="fa-brands fa-linkedin"></i>
        </a>
    </div>
    <div className="footerNav">
        <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Details</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact Me</a></li>
    </ul>
    </div>
    <div className="footerBottom">
        <p>Copyright &copy; 2022; Designed by <span className="Designer">Vihan</span></p>
    </div>
</div>
</footer>
     


    </main>
    </>
  )
}
