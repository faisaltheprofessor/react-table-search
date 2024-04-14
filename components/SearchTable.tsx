import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { employees } from './../app/data/people';
import { Input } from './ui/input';
import { DeleteIcon, MinusIcon } from 'lucide-react';
import { Button } from './ui/button';

type SearchTerm = string;

export default function SearchTable() {
  const [searchTerms, setSearchTerms] = useState<SearchTerm[]>(['', '']);
  const [showAddButton, setShowAddButton] = useState<boolean>(searchTerms.length < 2); // Adjust button visibility based on searchTerms length

  const handleSearchChange = (index: number, value: string) => {
    const newSearchTerms: SearchTerm[] = [...searchTerms];
    newSearchTerms[index] = value;
    setSearchTerms(newSearchTerms);
  };

  const handleAddSearchInput = () => {
    if (searchTerms.length < 2) { // Only allow adding up to 2 search terms
      const newSearchTerms: SearchTerm[] = [...searchTerms, ''];
      setSearchTerms(newSearchTerms);
      setShowAddButton(false);
    }
  };

  const handleRemoveSearchInput = (index: number) => {
    const newSearchTerms: SearchTerm[] = [...searchTerms.slice(0, index), ...searchTerms.slice(index + 1)];
    setSearchTerms(newSearchTerms);
    setShowAddButton(true); // Enable button again when removing a term
  };

  const highlightText = (text: string, index: number) => {
    let highlightedText: string = text;

    searchTerms.forEach((term, i) => {
      if (term) {
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const color = i === 0 ? 'lightblue' : 'lightgreen'; // Assign color based on specific index
        highlightedText = highlightedText.replace(regex, (match) => `<span style="background-color: ${color}">${match}</span>`);
      }
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <div className="search-table-container">
      <Button onClick={handleAddSearchInput} variant="default" className="add-search-button" disabled={searchTerms.length >= 2}>Add Search Input</Button>
      <div className="search-inputs">
        {searchTerms.map((term: SearchTerm, index: number) => (
          <div key={index} className='flex gap-10'>
            <Input type="text" value={term} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(index, e.target.value)} placeholder={`Type to search...`} className='my-3'/>
            <Button variant="destructive" size="sm" className="my-3" onClick={() => handleRemoveSearchInput(index)} ><MinusIcon /></Button>
          </div>
        ))}
      </div>

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
              <TableCell className="font-medium">{highlightText(person.name, 0)}</TableCell>
              <TableCell>{highlightText(person.profession, 1)}</TableCell>
              <TableCell>{highlightText(person.city, 2)}</TableCell>
              <TableCell className="text-right">{highlightText(person.dob, 3)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
