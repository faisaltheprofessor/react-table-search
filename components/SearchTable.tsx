import { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { employees } from './../app/data/people';
import { Input } from './ui/input';

export default function SearchTable() {
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <>
      <Input type="text" value={searchTerm} onChange={handleSearch} placeholder="Type to search..." />

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Profession</TableHead>
            <TableHead>City</TableHead>
            <TableHead className="text-right">Date of Birth</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((person, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{highlightText(person.name)}</TableCell>
              <TableCell>{highlightText(person.profession)}</TableCell>
              <TableCell>{highlightText(person.city)}</TableCell>
              <TableCell className="text-right">{highlightText(person.dob)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
