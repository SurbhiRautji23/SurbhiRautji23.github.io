export enum proficiency {
  expert = 0,
  high = 1,
  proficient = 2,
  low = 3,
}
export default class ResumeData {
  static technicalSkills: object = () => ({
    testingSkills: {
      key: 'Testing Technologies',
      display: true,
      img: 'img/testing.png',
      data: [
        {name:'Black box testing', proficiency: proficiency.expert},
        { name: 'Test Automation', proficiency: proficiency.expert },
        { name: 'JUnit', proficiency: proficiency.high },
        { name: 'Selenium', proficiency: proficiency.high },
        { name: 'Shell Scripting', proficiency: proficiency.proficient },
        { name: 'Batch', proficiency: proficiency.low },
        { name: 'PowerShell', proficiency: proficiency.proficient } ,
        { name: 'TestNG', proficiency: proficiency.proficient },
        { name: 'NeoLoad', proficiency: proficiency.low },
        { name: 'QC', proficiency: proficiency.high },
        {name:'Appium', proficiency: proficiency.proficient},
        { name: 'TestRail', proficiency: proficiency.high },
        {name: 'Jenkins', proficiency: proficiency.proficient},
        {name:'Bugzilla', proficiency: proficiency.expert},
        {name: 'Advanced Rest Client (ARC)', proficiency: proficiency.expert },
        {name:'Postman', proficiency: proficiency.expert},
        { 'Atlassian Jira', proficiency: proficiency.high },
      ],
    },
    languages: {
      key: 'Programming Languages',
      display: true,
      img: 'img/programming_languages_2.png',
      data: [{name: 'Javascipt', proficiency: proficiency.high}, {name:'Java', proficiency: proficiency.proficient}, {name: 'HTML 5', proficiency: proficiency.proficient}, {name:'CSS', proficiency: proficiency.proficient}],
    },
    frameworks: {},
    database: {
      key: 'Databases',
      display: true,
      img: 'img/databases.jpeg',
      data: [{name: 'MySQL', proficiency: proficiency.high}, {name: 'PostgreSQL', proficiency: proficiency.proficient}, {name:'Oracle 10g', proficiency: proficiency.proficient}],
    },
    others: {
      key: 'Others',
      display: true,
      data: [
        {name: 'Unix', proficiency: proficiency.proficient},
        {name: 'Windows', proficiency: proficiency.high},
        {name: 'Microsoft Excel', proficiency: proficiency.high},
        {name: 'Microsoft Office', proficiency: proficiency.high},
        {name: 'git', proficiency: proficiency.high},
        {name: 'AWS', proficiency: proficiency.proficient},
        {name: 'Agile',proficiency: proficiency.high},
        {name: 'Atlassian Confluence', proficiency: proficiency.high},
        {name: 'VMware', proficiency: proficiency.low},
        {name: 'Visual Studio Code', proficiency: proficiency.low},
        {name: 'Eclipse', proficiency: proficiency.high},
        {name :'IntelliJ', proficiency: proficiency.high},
      ],
    },
  });

  static educationDetails: object = () => ({
    data: [
      {
        startDate: 'Aug, 2014',
        endDate: 'May, 2016',
        degree: 'Master of Science',
        shortDegree: 'MS',
        major: 'Software Engineering',
        school: 'San Jose State University',
        schoolType: 'University',
        description: '',
        courses: [],
      },
      {
        startDate: 'Aug, 2008',
        endDate: ' June, 2012',
        degree: 'Bachelor of Technology',
        shortDegree: 'B.Tech',
        major: 'Computer Science and Engineering',
        school: 'Amity University, Noida',
        schoolType: 'University',
        description: '',
        courses: [],
      },
    ],
  });

  static experience: object = () => ({
    data: [
      {
        startDate: 'March, 2019',
        endDate: 'June, 2019',
        companyName: '3K Technologies, Inc.',
        designation: 'Software Quality Assurance Engineer (Contract)',
        jobDuties: [],
        skills: [],
        description: '',
      },
      {
        startDate: 'Sept, 2016',
        endDate: 'Present',
        companyName: 'Hanumayamma Innovations and Technologies, Inc',
        designation: 'Software Engineer',
        jobDuties: [],
        skills: [],
        description: '',
      },
      {
        startDate: 'Aug, 2015',
        endDate: 'Nov, 2015',
        companyName: 'NetScout Systems',
        designation: 'Software Engineer Intern',
        jobDuties: [],
        skills: [],
        description: '',
      },
      {
        startDate: 'Feb, 2013',
        endDate: 'Feb, 2014',
        companyName: 'Oracle Corporation India Pvt. Ltd.',
        designation: 'Sales Engineer',
        jobDuties: [],
        skills: [],
        description: '',
      },
    ],
  });
}
