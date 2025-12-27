console.log('Starting server...');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/assessment', (req, res) => {
  const { answers } = req.body;

  // Input validation
  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({
      error: 'Answers must be an array of numbers'
    });
  }

  if (answers.length === 0) {
    return res.status(400).json({
      error: 'No answers provided'
    });
  }

  const score = answers.reduce((total, value) => {
    if (typeof value !== 'number') {
      return total;
    }
    return total + value;
  }, 0);

  let level = '';
  let recommendations = [];

  if (score <= 7) {
    level = 'Low maturity';
    recommendations = [
      'Start adopting cloud services',
      'Centralize company data',
      'Implement basic CI/CD'
    ];
  } else if (score <= 14) {
    level = 'Medium maturity';
    recommendations = [
      'Optimize cloud costs',
      'Improve monitoring and observability',
      'Automate processes'
    ];
  } else {
    level = 'High maturity';
    recommendations = [
      'Explore advanced analytics and machine learning',
      'Adopt multi-cloud strategies',
      'Focus on cloud optimization'
    ];
  }

  return res.json({
    score,
    level,
    recommendations
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
