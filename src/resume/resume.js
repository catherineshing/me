/*jslint node: true */
'use strict';

angular.module('me.resume', [])

    .controller('ResumeController', [
        function() {
            this.experience = [
                {
                    title: 'Development Setup',
                    tools: [
                        'OS X',
                        'Sublime Text',
                        'Terminal',
                        'GitHub'
                    ]
                },
                {
                    title: 'Languages',
                    tools: [
                        'Javascript',
                        'Java',
                        'PHP',
                        'Ruby'
                    ]
                },
                {
                    title: 'Testing',
                    tools: [
                        'Karma',
                        'Jasmine',
                        'JUnit',
                        'TestNG'
                    ]
                },
                {
                    title: 'Topics',
                    tools: [
                        'AngularJS',
                        'Node.js',
                        'Bootstrap',
                        'Grunt',
                        'HTML5',
                        'jQuery',
                        'CSS',
                        'Less.js',
                        'Express',
                        'MongoDB',
                        'Thrift',
                        'Eclipse',
                        'JIRA',
                        'Subversion',
                        'API design'
                    ]
                }
            ];

            this.employment = [
                {
                    company: 'Reputation.com',
                    location: 'Redwood City, CA',
                    startDate: 1343804400000,
                    title: 'Software Engineer',
                    team: 'Enterprise Team',
                    tasks: [
                        'Built a variety of responsive widgets and web applications using AngularJS, Node.js, Express, Bootstrap, Less, and Jasmine.',
                        'Developed internal Tasks dashboard for the account management team to service both Enterprise and Small Business customers. This dashboard completely replaced the team\'s use of Salesforce for contact management, activity history, notes, account settings, and more.',
                        'Built highly performant Business Listings application to compare businesses\' profiles with listing information on industry-specific websites such as Cars.com and WebMD.',
                        'Created Facebook \'Customer Reviews\' App using PHP, jQuery, and Javascript for businesses to display positive testimonials on their Facebook page and allow visitors to request an appointment with the business.',
                        'Wrote backend functionality for a variety of features using Java, PHP, Ruby, Spring, TestNG, JUnit, and more.'
                    ]
                },
                {
                    company: 'The Cheesecake Factory',
                    location: 'Santa Clara, CA',
                    startDate: 1204358400000,
                    endDate: 1306825200000,
                    title: 'Operations Support Technician'
                },
                {
                    company: 'Independent Capital Management',
                    location: 'San Diego, CA',
                    startDate: 1175410800000,
                    endDate: 1201766400000,
                    title: 'Financial Services Specialist'
                }
            ];

            this.education = {
                university: 'University of California, San Diego',
                graduatedDate: 1181977200000,
                degree: 'B.A. Mathematics/Applied Science'
            };
        }
    ]);
