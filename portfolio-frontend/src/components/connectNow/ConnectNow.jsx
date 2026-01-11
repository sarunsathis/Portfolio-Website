import "./styles.css";

function ConnectNow() {
    return (
        <div className="connect-cntr">
            <h2 className="m-0 connect-title">Connect Now Component</h2>
            <p className="m-0 connect-desc">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
            <div className="connect-email d-flex flex-row gap-column-4 align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-5 h-5 text-purple-400" data-fg-buk235="44.93:44.6847:/components/Contact.tsx:121:21:4968:44:e:Mail::::::BKNf"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <div>
                    <p className="m-0">Email</p>
                    <a href="mailto:example@gmail.com" className="connect-email-link">example@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default ConnectNow;