const az900 = [
  {
    question:
      'You have an on-premises network that contains several servers. You plan to migrate all the servers to Azure. You need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period. What should you include in the recommendation?',
    answers: [
      { id: '1', text: 'fault tolerance', correct: true },
      { id: '2', text: 'elasticity' },
      { id: '3', text: 'scalability' },
      { id: '4', text: 'low latency' },
    ],
    correct: 1,
  },
  {
    question:
      'What are characteristics of the public cloud? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.',
    answers: [
      { id: '1', text: 'dedicated hardware' },
      { id: '2', text: 'unsecured connections' },
      { id: '3', text: 'limited storage' },
      { id: '4', text: 'metered pricing', correct: true },
    ],
    correct: 4,
  },
  {
    question:
      'Your company plans to migrate all its data and resources to Azure.The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure.You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure SQL databases. Does this meet the goal?',
    answers: [
      { id: '1', text: 'Yes', correct: true },
      { id: '2', text: 'No' },
    ],
    correct: 1,
  },
  {
    question:
      'Your company hosts an accounting application named App1 that is used by all the customers of the company.App1 has low usage during the first three weeks of each month and very high usage during the last week of each month.Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?',
    answers: [
      { id: '1', text: 'high availability' },
      { id: '2', text: 'high latency' },
      { id: '3', text: 'elasticity', correct: true },
      { id: '4', text: 'load balancing' },
    ],
    correct: 3,
  },
];

export default az900;
