* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background-color: #ffffff;
  color: #333;
  line-height: 1.6;
  padding: 0 20px;
  transition: background 0.4s ease, color 0.4s ease;
}

header {
  text-align: center;
  padding: 2.5rem 0 1.5rem;
  background: linear-gradient(to right, #007acc, #66ccff);
  color: white;
}

header h1 {
  font-size: 2.2rem;
  margin-bottom: 0.3rem;
}

#typing-text {
  font-size: 1rem;
  font-style: italic;
  color: #e0e0e0;
}

nav {
  margin: 1rem 0;
}

nav a {
  margin: 0 12px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #ffdd57;
}

#theme-toggle {
  margin-top: 1rem;
  padding: 8px 15px;
  cursor: pointer;
  border: none;
  background: #ffcc00;
  color: black;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
}

#theme-toggle:hover {
  background: #ffaa00;
}

section {
  padding: 2rem 0;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: disc inside;
  margin-top: 0.5rem;
}

.project {
  background: #f0f0f0;
  padding: 1rem 1.2rem;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.project:hover {
  transform: translateY(-5px);
}

footer {
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
  color: #888;
}

/* DARK MODE */
body.dark {
  background-color: #121212;
  color: #f0f0f0;
}

.dark header {
  background: linear-gradient(to right, #222, #444);
  color: #f0f0f0;
}

.dark nav a {
  color: #66ccff;
}

.dark nav a:hover {
  color: #ffcc66;
}

.dark .project {
  background-color: #1e1e1e;
  box-shadow: 0 4px 12px rgba(255,255,255,0.05);
}

.dark #theme-toggle {
  background: #444;
  color: white;
}

.dark #theme-toggle:hover {
  background: #666;
}
