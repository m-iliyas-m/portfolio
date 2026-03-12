const services = [

{
file:"web_automation.py",
icon:"🤖",
title:"Web Automation",
func:"def automate_task()",
desc:"Automate repetitive tasks, form submissions, and data entry with Python scripts that run 24/7.",
return:"success=True",
tech:["Selenium","Playwright","Puppeteer"]
},

{
file:"data_scraping.py",
icon:"🗄",
title:"Data Scraping",
func:"def scrape_data()",
desc:"Extract valuable data from any website at scale. From e-commerce to social media.",
return:"1M+ records",
tech:["Scrapy","BeautifulSoup","APIs"]
},

{
file:"data_analysis.py",
icon:"📊",
title:"Data Analysis",
func:"def analyze()",
desc:"Transform raw data into actionable insights with advanced analytics.",
return:"insights[]",
tech:["Pandas","NumPy","Matplotlib"]
},

{
file:"machine_learning.py",
icon:"🧠",
title:"Machine Learning",
func:"def train_model()",
desc:"Build predictive models and AI solutions to automate decision making.",
return:"model_ready",
tech:["TensorFlow","PyTorch","Scikit"]
},

{
file:"api_development.py",
icon:"🌐",
title:"API Development",
func:"def create_api()",
desc:"Create robust REST APIs and backend services to power applications.",
return:"API_READY",
tech:["FastAPI","Flask","PostgreSQL"]
},

{
file:"etl_pipelines.py",
icon:"🔗",
title:"ETL Pipelines",
func:"def run_pipeline()",
desc:"Design and implement scalable ETL pipelines for data engineering.",
return:"pipeline_complete",
tech:["Airflow","Kafka","Spark"]
}

]

const container = document.getElementById("services-grid")

services.forEach(service=>{

const techTags = service.tech.map(t=>`<span>${t}</span>`).join("")

container.innerHTML += `

<div class="service-card">

<div class="service-header">
<span>${service.file}</span>
</div>

<div class="service-content">

<div class="service-icon">
${service.icon}
</div>

<h3>${service.title}</h3>

<p class="code-line">
${service.func}
</p>

<p class="service-desc">
${service.desc}
</p>

<div class="code-return">
return "${service.return}"
</div>

<div class="tech-tags">
${techTags}
</div>

</div>

</div>

`

})