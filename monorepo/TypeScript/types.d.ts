interface Intern {
    name: string;
    age: number;
    skills: string[];
}
declare enum Domain {
    Web = 'Web',
    Connect = 'Connect',
    Backend = 'Backend',
}
interface Junior extends Intern{
    date_of_promotion: Date;
    domain: Domain;
}

export interface Company {
    interns: Intern[];
    juniors: Junior[];
    country: string;
}