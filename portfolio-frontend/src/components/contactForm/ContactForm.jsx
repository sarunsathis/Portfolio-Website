import "./styles.css";

function ContactForm() {
    return(
        <div>
            <form action={'.'} method="POST"
                className="contact-form d-flex flex-column gap-row-4">
                <div>
                    <label className="col-12" htmlFor="name">Name</label>
                    <input placeholder="Enter your name" className="col-12" type="text" id="name" name="name" required />
                </div>

                <div>
                    <label className="col-12" htmlFor="email">Email</label>
                    <input placeholder="Enter your email" className="col-12" type="email" id="email" name="email" required />
                </div>

                <div>
                    <label className="col-12" htmlFor="message">Message</label>
                    <textarea placeholder="Enter your message" className="col-12" id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-4 h-4" data-fg-buk223="44.93:44.6847:/components/Contact.tsx:98:17:3955:28:e:Send::::::B5u2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    Send Message
                </button>
            </form>
        </div>
    )
    
}

export default ContactForm;