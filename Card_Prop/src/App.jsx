import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Mountain, CA",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Redmond, WA",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "1 day ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Cupertino, CA",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Seattle, WA",
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/meta-logo-icon-american-multinational-company-parent-organization-facebook-instagram-whatsapp-others-vector-233392134.jpg",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Menlo Park, CA",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$45/hr",
      location: "Los Gatos, CA",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Austin, TX",
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "NVIDIA",
      datePosted: "1 day ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Santa Clara, CA",
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Adobe",
      datePosted: "3 days ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "San Jose, CA",
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Intel",
      datePosted: "7 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Portland, OR",
    },
  ];

  return (
    <div className='min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6 sm:pb-2'>
      {jobOpenings.map((job, index) => (
        <Card
          key={`${job.companyName}-${job.post}-${index}`}
          brandLogo={job.brandLogo}
          companyName={job.companyName}
          datePosted={job.datePosted}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location}
        />
      ))}
    </div>
  )
}

export default App