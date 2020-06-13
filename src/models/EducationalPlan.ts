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
                        name: 'Practice 1',
                        type: 'account-edit',
                        expired: true
                    },
                    {
                        name: 'Final Exam',
                        type: 'alarm',
                        expired: false
                    }
                ]
            },
            {
                name: 'Mathematical Analysis',
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
