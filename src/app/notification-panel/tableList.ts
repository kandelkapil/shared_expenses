const tableHeaders = [
    { id: 0, title: 'name', show: true, sort: true, className: '' }
]

const transactionList = [
    {
        date: new Date('2024-01-01'),
        name: 'Project A',
        lastUpdated: new Date('2024-01-15'),
        paidBy: 'Alice',
        involvees: ['Alice', 'Bob', 'Charlie'],
        image: '',
    },
    {
        date: new Date('2024-02-05'),
        name: 'Project B',
        lastUpdated: new Date('2024-02-20'),
        paidBy: 'Bob',
        involvees: ['Bob', 'David', 'Eve'],
        image: '',
    },
    {
        date: new Date('2024-03-10'),
        name: 'Project C',
        lastUpdated: new Date('2024-03-15'),
        paidBy: 'Charlie',
        involvees: ['Charlie', 'Alice', 'Eve']
    },
    {
        date: new Date('2024-04-08'),
        name: 'Project D',
        lastUpdated: new Date('2024-04-20'),
        paidBy: 'David',
        involvees: ['David', 'Bob', 'Charlie']
    }
]

export { tableHeaders, transactionList }