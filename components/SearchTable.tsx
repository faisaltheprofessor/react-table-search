"use client"
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';

export default function SearchTable() {


  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text: string) => {
    if (!searchTerm) {
      return text;
    }
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <span key={index} style={{ backgroundColor: 'lightblue' }}>{part}</span> : part
    );
  };





  const [people, setPeople] = useState(
    [
        {
            name: "Alice Johnson",
            city: "Silverton",
            profession: "Web Developer",
            dob: "5/12/1988"
        },
        {
            name: "John Smith",
            city: "Willow Creek",
            profession: "Software Engineer",
            dob: "7/22/1995"
        },
        {
            name: "Emily Brown",
            city: "Maple Ridge",
            profession: "Data Analyst",
            dob: "3/18/1990"
        },
        {
            name: "Ryan Thompson",
            city: "Oakdale",
            profession: "UX Designer",
            dob: "9/8/1987"
        },
        {
            name: "Sarah Wilson",
            city: "Pine Valley",
            profession: "Project Manager",
            dob: "11/25/1992"
        },
        {
            name: "David Martinez",
            city: "Cedar Hills",
            profession: "Network Engineer",
            dob: "6/30/1984"
        },
        {
            name: "Olivia Adams",
            city: "Birchwood",
            profession: "Graphic Designer",
            dob: "2/14/1998"
        },
        {
            name: "Michael Davis",
            city: "Elmwood",
            profession: "Software Developer",
            dob: "4/5/1991"
        },
        {
            name: "Sophia Miller",
            city: "Spruce Grove",
            profession: "Data Scientist",
            dob: "10/10/1989"
        },
        {
            name: "Daniel Wilson",
            city: "Pinecrest",
            profession: "Systems Analyst",
            dob: "8/20/1996"
        },
        {
            name: "Chloe White",
            city: "Redwood",
            profession: "Frontend Developer",
            dob: "12/12/1993"
        },
        {
            name: "Ethan Brown",
            city: "Willowbrook",
            profession: "Product Manager",
            dob: "1/15/1985"
        },
        {
            name: "Grace Taylor",
            city: "Hawthorne",
            profession: "UI Designer",
            dob: "9/27/1990"
        },
        {
            name: "Liam Moore",
            city: "Ashwood",
            profession: "Mobile App Developer",
            dob: "3/7/1994"
        },
        {
            name: "Ella Rivera",
            city: "Blueberry",
            profession: "Database Administrator",
            dob: "7/3/1986"
        },
        {
            name: "Mason Clark",
            city: "Juniper",
            profession: "Software Architect",
            dob: "11/19/1997"
        },
        {
            name: "Amelia Hill",
            city: "Hickory",
            profession: "Backend Developer",
            dob: "5/1/1991"
        },
        {
            name: "Elijah Reed",
            city: "Peachtree",
            profession: "Cybersecurity Analyst",
            dob: "2/26/1988"
        },
        {
            name: "Ava Allen",
            city: "Applewood",
            profession: "IT Consultant",
            dob: "6/9/1996"
        },
        {
            name: "Logan Wright",
            city: "Maplewood",
            profession: "Network Administrator",
            dob: "10/22/1989"
        }
    ] 
  )

  return (
   <>
    <Input type="text" value={searchTerm} onChange={handleSearch} placeholder="Type to search..." />

<Table >
<TableCaption>A list of your recent invoices.</TableCaption>
<TableHeader>
<TableRow>
  <TableHead className="w-[100px]">Invoice</TableHead>
  <TableHead>Status</TableHead>
  <TableHead>Method</TableHead>
  <TableHead className="text-right">Amount</TableHead>
</TableRow>
</TableHeader>
<TableBody>
{ people.map(person => (
    <TableRow key={person.dob}>
    <TableCell className="font-medium">{highlightText(person.name)}</TableCell>
    <TableCell>{ person.profession }</TableCell>
    <TableCell>{ person.city }</TableCell>
    <TableCell className="text-right">{ person.dob }</TableCell>
  </TableRow>
))}
</TableBody>
</Table>
</>
  );
}
