import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { employees } from './../app/data/people';
import { Input } from './ui/input';

export default function SearchTable() {
  const [searchTerm1, setSearchTerm1] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');

  const handleSearch1 = (event) => {
    setSearchTerm1(event.target.value);
  };

  const handleSearch2 = (event) => {
    setSearchTerm2(event.target.value);
  };

  const highlightText = (text) => {
    let highlightedText = text;

    if (searchTerm1) {
      const regex1 = new RegExp(`(${searchTerm1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      highlightedText = highlightedText.replace(regex1, (match) => `<span style="background-color: lightblue">${match}</span>`);
    }

    if (searchTerm2) {
      const regex2 = new RegExp(`(${searchTerm2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      highlightedText = highlightedText.replace(regex2, (match) => `<span style="background-color: lightgreen">${match}</span>`);
    }

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <>
      <Input type="text" value={searchTerm1} onChange={handleSearch1} placeholder="Type to search (Color 1)..." />
      <Input type="text" value={searchTerm2} onChange={handleSearch2} placeholder="Type to search (Color 2)..." />

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
