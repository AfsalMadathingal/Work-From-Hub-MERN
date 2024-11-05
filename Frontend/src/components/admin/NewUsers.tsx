import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";
import { Key } from 'react';

// const statusColorMap: Record<string, ChipProps["color"]> = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

interface INewUser {
  _id: string;
  fullName: string;
  createdAt: string;
  profilePic: string;
  status: string;
}


interface NewUsersProps {
  newUsersData: INewUser[];
}
const NewUsers: React.FC<NewUsersProps> = ({ newUsersData }) => {

    
const renderCell = React.useCallback((item: INewUser, columnKey: Key) => {
  const cellValue = item[columnKey as keyof INewUser];


  switch (columnKey) {
    case "fullName":
      return (
        <User
          avatarProps={{ radius: "lg", src: item.profilePic }}
          description={''} // You might want to add a default description or handle this case differently
          name={item.fullName}
        >
          {''} // You might want to add a default value or handle this case differently
        </User>
      );
    case "createdAt":
      return <p>{item.createdAt.slice(0, 10)}</p>;
    default:
      return cellValue;
  }
}, []);

  return (
    <div className="bg-white p-6  rounded-md shadow-md mb-8">
      <h2 className="text-lg font-semibold mb-4">New Users</h2>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn key="fullName">Name</TableColumn>
          <TableColumn key="createdAt">Creation Date</TableColumn>
        </TableHeader>
        <TableBody items={newUsersData}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell(item , columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
      </Table>
    </div>
  );
};

export default NewUsers;
