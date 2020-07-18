export class EducationalPlans {
    static sampleData(): EducationalPlans{
        return [
            {
                name: 'Artificial Intelligence Basics',
                items: [
                    {
                        name: 'Lecture 1. History of Artificial Intelligence',
                        type: 'book',
                        expired: true
                    },
                    {
                        name: 'Practice 1. Key events in AI development.',
                        type: 'account-edit',
                        expired: true
                    },
                    {
                        name: 'Practice 2. Modern AI development.',
                        type: 'account-edit',
                        expired: true
                    },
                    {
                        name: 'Exam',
                        type: 'alarm',
                        expired: false
                    }
                ]
            },
            {
                name: 'Developing AI for simplest problems',
                items: [
                    {
                        name: 'Lecture 1',
                        type: 'book',
                        expired: true
                    },
                    {
                        name: 'Practice 1',
                        type: 'account-edit',
                        expired: false
                    },
                    {
                        name: 'Final Exam',
                        type: 'alarm',
                        expired: false
                    }
                ]
            }
        ];
    }
}
