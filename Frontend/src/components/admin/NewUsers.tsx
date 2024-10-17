import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
} from "@nextui-org/react";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface NewUsersProps {
  newUsersData: Array<{
    fullName: string;
    createdAt: string;
    profilePic: string;
    status: string; // added a status field for chip color mapping
  }>;
}

const NewUsers: React.FC<NewUsersProps> = ({ newUsersData }) => {

    
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "fullName":
        return (
            <User
            avatarProps={{radius: "lg", src: user.profilePic}}
            description={user.email}
            name={user.fullName}
          >
            {user.email}
          </User>
        );
      case "createdAt":
        return <p>{user.createdAt.slice(0, 10)}</p>;
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
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
      </Table>
    </div>
  );
};

export default NewUsers;
