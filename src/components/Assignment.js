import React, { useState } from 'react';
import '../nss.css'; // Using the CSS from src directory

const Assignment = () => {
    const [imageError, setImageError] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        document.getElementById("darkModeToggle").checked = isDarkMode;
    };

    const handleImageError = () => {
        setImageError(true);
    };

    // Use a fallback image URL if the local image fails to load
    const profileImageUrl = imageError 
        ? "https://via.placeholder.com/300x300?text=Mutumba+Benjamin+Mubeezi"
        : "/images/profile.jpg";

    return (
        <div>
            {/* Header Section */}
            <header>
                <nav>
                    <div className="logo">
                        <h1>Mutumba Benjamin Mubeezi</h1>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#career-goals">Career Goals</a></li>
                        <li><a href="#personal-details">Personal Details</a></li>
                        <li><a href="#hobbies">Hobbies</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    {/* Dark Mode Button Moved Here */}
                    <div className="dark-mode-container">
                        <input 
                            type="checkbox" 
                            id="darkModeToggle" 
                            onChange={toggleDarkMode} 
                            className="dark-mode-checkbox" 
                        />
                        <label htmlFor="darkModeToggle" className="dark-mode-label">
                            <i className="fas fa-moon"></i>
                            <i className="fas fa-sun"></i>
                            <div className="ball"></div>
                        </label>
                    </div>
                </nav>
            </header>

            {/* Main Content Section */}
            <div className="container">
                {/* About Section */}
                <section id="about" className="section">
                    <h1>About Me</h1>
                    <p>I am a passionate and dedicated student pursuing a Computer Science degree...</p>
                </section>

                {/* Career Goals Section */}
                <section id="career-goals" className="section">
                    <h2>Career Goals</h2>
                    <p>My career goals are to become a successful software engineer...</p>
                </section>

                {/* Personal Details Section */}
                <section id="personal-details" className="section">
                    <h2>Personal Details</h2>
                    <ul>
                        <li><strong>Full Name:</strong> Mutumba Benjamin Mubeezi</li>
                        <li><strong>Student ID:</strong> B24245 S23B23/010</li>
                        <li><strong>Course and Year:</strong> Computer Science Year2</li>
                        <li><strong>Hobbies and Interests:</strong> Art and Gaming</li>
                    </ul>
                </section>

                {/* Profile Picture Section */}
                <section className="profile-picture">
                    <h2>Profile Picture</h2>
                    <img 
                        src={profileImageUrl} 
                        alt="Mutumba Benjamin Mubeezi" 
                        className="about-img" 
                        onError={handleImageError}
                    />
                </section>

                {/* Hobby Video Section */}
                <section id="hobbies" className="section">
                    <h2>Hobbies</h2>
                    <div className="video-container">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/QdBZY2fkU-0?si=CXs-mBlslfLKm6_-" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                {/* Results Table Section */}
                <section className="section">
                    <h2>Year 1 Semester 1 Results</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Course Title</th>
                                <th>Grade</th>
                                <th>Credit Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>essential hardware and software</td>
                                <td>73</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>fundamentals</td>
                                <td>98</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>discrete mathematics</td>
                                <td>100</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>structured programming</td>
                                <td>99</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>writing skills</td>
                                <td>67</td>
                                <td>3</td>
                            </tr>
                            <tr>   
                                <td>6</td>
                                <td>understanding old testament</td>
                                <td>73</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>computer organisation and architecture</td>
                                <td>98</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>data structures and algorithms</td>
                                <td>100</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>probability and statistics</td>
                                <td>99</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>local area networking</td>
                                <td>67</td>
                                <td>3</td>
                            </tr>
                            <tr>   
                                <td>11</td>
                                <td>understanding old testament</td>
                                <td>73</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>computer organisation and architecture</td>
                                <td>98</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>data structures and algorithms</td>
                                <td>100</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>probability and statistics</td>
                                <td>99</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>local area networking</td>
                                <td>67</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>16</td>
                                <td>understanding new testament</td>
                                <td>67</td>
                                <td>3</td>
                            </tr>
                            <tr>   
                                <td>17</td>
                                <td>health and wholeness</td>
                                <td>73</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>database design and applications</td>
                                <td>98</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>cs field attachment</td>
                                <td>100</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>understanding ethics</td>
                                <td>99</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>object oriented programming</td>
                                <td>67</td>
                                <td>3</td> 
                            </tr>
                            <tr>
                                <td>22</td>
                                <td>design and analysis of algorithms</td>
                                <td>98</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>calculus</td>
                                <td>100</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>data science</td>
                                <td>99</td>
                                <td>5</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </section>

                {/* Social Links Section */}
                <section>
                    <h2>Links and Navigation</h2>
                    <ul className="social-links">
                        <li><a href="https://www.artstation.com/?sort_by=community&dimension=all" target="_blank" rel="noopener noreferrer"><i className="fab fa-artstation"></i></a></li>
                        <li><a href="https://ucu.ac.ug/" target="_blank" rel="noopener noreferrer"><i className="fas fa-university"></i></a></li>
                    </ul>
                </section>

                {/* Contact Information Section */}
                <section id="contact" className="section">
                    <h2>Contact Information</h2>
                    <p><strong>Email:</strong> <a href="mailto:mutumbab518@gmail.com">mutumbab518@gmail.com</a></p>
                    <ul className="social-links">
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://x.com/MutumbaBen6939" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://github.com/mutumba-b3njamin-mub33zi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                    </ul>
                </section>
            </div>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 Mutumba Benjamin Mubeezi | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Assignment;