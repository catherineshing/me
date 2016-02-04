'use strict';

angular.module('me.resume', [])

    .controller('ResumeController', [
        function() {
            var that = this;

            this.download = function() {
                console.log('download resume...');
            };

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
                        'Jenkins',
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
                        'Lorem ipsum blah blah blah',
                        'asdfasdf qwerqwer',
                        'zxcvxcvqwerqwerasdf',
                        'Lorem ipsum blah blah blahx',
                        'asdfasdf qwerqwerq',
                        'zxcvxcvqwerqwerasdfq',
                        'Lorem ipsum blah blah blahxq',
                        'asdfasdf qwerqwerqq',
                        'zxcvxcvqwerqwerasdfqq'
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
