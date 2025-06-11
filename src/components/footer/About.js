<h2>About the App</h2>
<p>
  Welcome to our health tracking app! We created this application
  to help you monitor your health status, analyze physical activity,
  nutrition, and overall well-being.
</p>

<p>
  We use modern technologies to provide you with accurate and useful data
  that will help you make informed decisions in your daily life.
</p>

<button onClick={toggleContent} className="expand-btn">
  {isExpanded ? 'Collapse Details' : 'Expand Details'}
</button>

{isExpanded && (
  <div className="expanded-content">
    <h3>What We Offer:</h3>
    <ul>
      <li><strong>Personalized Health Plan:</strong> Create a plan based on your goals and preferences.</li>
      <li><strong>Nutrition Tracking:</strong> Easily log and analyze your diet to maintain balance.</li>
      <li><strong>Physical Activity:</strong> Motivate yourself to achieve new milestones in workouts and sports.</li>
      <li><strong>Sleep Monitoring:</strong> Improve your sleep quality with recommendations and data insights.</li>
      <li><strong>Mental Well-being:</strong> Assess your emotional state and receive tips to boost your mood.</li>
    </ul>

    <h3>Our Goals:</h3>
    <p>
      We strive to provide you with convenient and useful tools so you can
      monitor your health, keep it in good condition, and improve your quality of life.
      In the future, we plan to add even more features for your convenience and well-being.
    </p>
  </div>
)}
