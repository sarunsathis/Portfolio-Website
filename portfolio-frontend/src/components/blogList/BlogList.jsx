import "./styles.css"
import {blogListData} from "../blogList/blogListData.js"

function BlogList(props) {
    return (
        <div className={`blog-list-cntr ${props.className}`}>
            {blogListData.map((blog) => (
                <div key={blog.id} className="blog-card-link">
                    <div className="blog-card-cntr">
                        <h2 className="blog-card-title m-0">{blog.title}</h2>
                        <p className="blog-card-subtitle m-0 mb-16">{blog.subtitle}</p>
                        
                        <div className="blog-card-topics d-flex flex-row gap-column-3 mb-16">
                            {blog.topic.map((topic, index) => (
                                <div key={index} className="blog-card-topic">{topic}</div>
                            ))}
                        </div>

                        <div className="blog-card-meta d-flex flex-row gap-column-4">
                            <div className="blog-card-date d-flex flex-row gap-column-2 align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4" data-fg-eanv22="44.92:44.4685:/components/Blogs.tsx:96:25:3871:32:e:Calendar::::::C7bG"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                                {blog.date}
                            </div>
                            <div className="blog-card-readtime d-flex flex-row gap-column-2 align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-4 h-4" data-fg-eanv26="44.92:44.4685:/components/Blogs.tsx:100:25:4070:29:e:Clock::::::C7GQ"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                {blog.readTime}
                            </div>
                        </div>
                    </div>
                    <a href={blog.link} className="blog-card-overlay-link d-flex flex-row gap-column-2 col-2 justify-content-end" aria-label={`Read more about ${blog.title}`}>
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4" data-fg-eanv32="44.92:44.4685:/components/Blogs.tsx:111:21:4477:34:e:ArrowRight::::::D6KF"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                </div>
            ))}
        </div>
    );
    
}

export default BlogList;