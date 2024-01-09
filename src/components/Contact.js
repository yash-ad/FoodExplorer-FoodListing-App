


const Contact = ()=>{
return(
<div className="contact-page">
    <div id="contact">
    <img src="https://c1.wallpaperflare.com/preview/877/7/816/writing-pad-vegetables-table-tray.jpg" alt=""/>
    <div id="overlay"></div>
    <div id="contact-left">
    <h1>Reach out to us</h1>
    <p>Require help or have inquiries? Reach out to our approachable team for prompt and supportive assistance.</p>
    </div>
    <div id="contact-right">
    <label className="name-label">Name</label>
    <input type="text" placeholder="John Doe"/>
    <label className="email-label">Email</label>
    <input type="email" placeholder="johndoe@gmail.com"/>
    <label>Tell Us More</label>
    <textarea placeholder="Message" cols="20" rows="10"></textarea>
    <button>Send Message</button>

    </div>
    </div>
</div>
)
};

export default Contact;